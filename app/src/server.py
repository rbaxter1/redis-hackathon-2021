import base64
from concurrent import futures
from datetime import datetime
from google.protobuf.json_format import MessageToJson, Parse
import grpc
import logging
import network_pb2
import network_pb2_grpc
import os
import redis
from redisgraph import Node, Edge, Graph, Path
import sys
import uuid


class Network(network_pb2_grpc.NetworkServicer):
    def __init__(self):
        try:
            redis_url = os.environ['REDIS_URL']
        except:
            redis_url = 'redis'
        '''
        try:
            redis_port = os.environ['REDIS_PORT']
        except:
            redis_port = 6379

        try:
            redis_password = os.environ['REDIS_PASSWORD']
        except:
            redis_password = ''
        '''
        self.redis_pool = redis.ConnectionPool(host=redis_url)

    def Sanitize(self, str):
        str = str.replace("'", "\\'")
        return str

    def SaveImage(self, request, context):
        r = redis.Redis(connection_pool=self.redis_pool)
        image_id = 'image:{0}'.format(str(uuid.uuid4()))
        log.info('image id: {0}'.format(image_id))
        image = open('/src/gandalf.jpg', 'rb').read()
        log.info('image: {0}'.format(base64.b64encode(image)))
        r.set(image_id, image)
        response = network_pb2.SaveImageResponse()
        response.success = True
        response.image_id = image_id
        return response

    def GetImage(self, request, context):
        response = network_pb2.GetImageResponse()
        r = redis.Redis(connection_pool=self.redis_pool)
        log.info('get image id: {0}'.format(request.image_id))
        response.image = r.get(request.image_id)
        response.success = True
        return response

    def CreateUser(self, request, context):
        log.info("Creating user")
        r = self.GetRedisConnection()

        firstName = request.user.first_name
        lastName = request.user.last_name
        email = request.user.email

        query = """OPTIONAL MATCH (check:user {email: '%s'})
        MERGE (u:user {email: '%s' })
        ON CREATE SET u.first_name='%s', u.last_name='%s'
        RETURN not(exists(check))""" % (self.Sanitize(email), self.Sanitize(email), self.Sanitize(firstName), self.Sanitize(lastName))

        result = self.ExecuteQueryOnNetwork(query)

        response = network_pb2.CreateUserResponse()
        response.success = result.result_set[0][0]
        response.email = email
        return response

    def GetUser(self, request, context):
        log.info("Getting user")
        email = self.Sanitize(request.email)

        query = """MATCH (u:user )
        where u.email = '%s' return u.first_name, u.last_name, u.email""" % email
        results = self.ExecuteQueryOnNetwork(query)

        userDetails = network_pb2.UserDetails()

        for record in results.result_set:
            log.info("processing record")
            userDetails.first_name = record[0]
            userDetails.last_name = record[1]
            userDetails.email = record[2]
            break

        response = network_pb2.GetUserResponse(user=userDetails)
        return response

    def SubmitItem(self, request, context):

        itemTitle = self.Sanitize(request.item_details.title)
        itemDescription = self.Sanitize(request.item_details.description)
        itemAskingPrice = request.item_details.asking_price
        img = request.item_details.image

        networkName = self.Sanitize(request.item_details.network_name)

        userEmail = self.Sanitize(request.email)

        query = """MATCH (u:user {email:'%s'})
        MATCH (n:network {name:'%s'})
        MERGE (i:item {title: '%s', description: '%s', asking_price: '%.2f'})
        MERGE (u)-[:SELLER]->(i)
        MERGE (i)-[:SALE]->(n)""" % (userEmail, networkName, itemTitle, itemDescription, itemAskingPrice)

        if len(img) > 0:
            image_id = 'image:{0}'.format(str(uuid.uuid4()))
            query += ("""SET i.image_id = '%s'""" % image_id)
            self.GetRedisConnection().set(image_id, img)
        print(query)

        self.ExecuteQueryOnNetwork(query)

        response = network_pb2.SubmitItemResponse(success=True)
        return response

    def SubmitItemOffer(self, request, context):
        offer = request.item_offer
        buyerEmail = self.Sanitize(offer.email)
        itemName = self.Sanitize(offer.title)
        offerPrice = offer.offer

        query = """MATCH (i:item {title:'%s'})
        MATCH (u:user {email:'%s'})
        MERGE (u)-[:OFFER {offer:'%.2f', time:'%s'}]->(i)""" % (itemName, buyerEmail, offerPrice, datetime.now())
        print(query)
        self.ExecuteQueryOnNetwork(query)

        response = network_pb2.SubmitItemOfferResponse()
        response.success = True
        return response

    def CreateNetwork(self, request, context):
        newNetwork = request.network
        networkName = self.Sanitize(newNetwork.name)
        desc = self.Sanitize(newNetwork.description)
        owner = self.Sanitize(newNetwork.owner_id)
        img = newNetwork.image

        query = """MATCH (u:user {email: '%s'})
        MERGE (n:network {name: '%s', description: '%s'})
        MERGE (u)-[:OWNER]->(n)
        MERGE (u)-[:MEMBER]->(n)""" % (owner, networkName, desc)

        if len(img) > 0:
            log.info(img)
            image_id = 'image:{0}'.format(str(uuid.uuid4()))
            query += ("""SET n.image_id = '%s'""" % image_id)
            self.GetRedisConnection().set(image_id, img)

        self.ExecuteQueryOnNetwork(query)
        response = network_pb2.CreateNetworkResponse()
        response.network_name = networkName
        return response

    def GetNetworksForUser(self, request, context):
        email = request.email

        query = """MATCH (n:network)
        MATCH (owner:user)-[:OWNER]->(n)
        OPTIONAL MATCH (u:user {email: '%s'})
        OPTIONAL MATCH (u)-[m:MEMBER]->(n)
        RETURN n.name, n.description, owner.email, n.image_id, exists(m)""" % self.Sanitize(email)

        result = self.ExecuteQueryOnNetwork(query)

        response = network_pb2.GetNetworksForUserResponse()
        for record in result.result_set:
            network_data = network_pb2.NetworkDetails()
            network_data.name = record[0]
            network_data.description = record[1]
            network_data.owner_id = record[2]
            image_id = record[3]
            if image_id is not None:
                network_data.image = self.GetRedisConnection().get(image_id)
            network_data.is_member = record[4]
            response.networks.append(network_data)

        return response

    def JoinNetwork(self, request, context):
        userEmail = request.email
        networkName = request.network_name
        query = """MATCH (u:user {email: '%s'})
        MATCH (n:network {name: '%s'})
        MERGE (u)-[:MEMBER]->(n)""" % (self.Sanitize(userEmail), self.Sanitize(networkName))

        self.ExecuteQueryOnNetwork(query)

        response = network_pb2.JoinNetworkResponse()
        response.success = True
        return response

    def GetItemsForUser(self, request, context):

        email = self.Sanitize(request.email)

        query = """MATCH (u:user {email: '%s'})
        MATCH (i:item)
        MATCH (u:user)-[:SELLER]->(i)
        RETURN i.title, i.description, i.asking_price, i.image_id""" % email

        result = self.ExecuteQueryOnNetwork(query)

        response = network_pb2.GetItemsForUserResponse(success=True)
        for record in result.result_set:
            itemDetail = network_pb2.ItemDetails()
            itemDetail.title = record[0]
            itemDetail.description = record[1]
            itemDetail.asking_price = float(record[2])

            image_id = record[3]
            if image_id is not None:
                itemDetail.image = self.GetRedisConnection().get(image_id)
            response.items.append(itemDetail)

        return response

    def GetItemsForNetwork(self, request, context):

        networkName = self.Sanitize(request.network_name)

        query = """MATCH (n:network {name: '%s'})
        MATCH (i:item)
        MATCH (i:item)-[:SALE]->(n)
        RETURN i.title, i.description, i.asking_price, i.image_id""" % networkName

        result = self.ExecuteQueryOnNetwork(query)

        response = network_pb2.GetItemsForNetworkResponse(success=True)
        for record in result.result_set:
            itemDetail = network_pb2.ItemDetails()
            itemDetail.title = record[0]
            itemDetail.description = record[1]
            itemDetail.asking_price = float(record[2])

            image_id = record[3]
            if image_id is not None:
                itemDetail.image = self.GetRedisConnection().get(image_id)
            response.items.append(itemDetail)

        return response

    def GetOffersForUserItems(self, request, context):
        email = self.Sanitize(request.email)

        query = """MATCH (:user {email:'%s'})-[:SELLER]->(i:item)
        MATCH (buyer:user)-[o:OFFER]->(i)
        RETURN buyer.email, i.title, o.offer, o.time""" % email

        result = self.ExecuteQueryOnNetwork(query)
        response = network_pb2.GetOffersForUserItemsResponse()
        for record in result.result_set:
            itemOffer = network_pb2.ItemOffer()
            itemOffer.email = record[0]
            itemOffer.title = record[1]
            itemOffer.offer = float(record[2])
            itemOffer.time = record[3]
            response.offers.append(itemOffer)

        return response

    def GetOffersMadeByUser(self, request, context):
        email = self.Sanitize(request.email)

        query = """MATCH (:user {email:'%s'})-[o:OFFER]->(i:item)
        RETURN i.title, o.offer, o.time""" % email

        result = self.ExecuteQueryOnNetwork(query)
        response = network_pb2.GetOffersMadeByUserResponse()
        for record in result.result_set:
            itemOffer = network_pb2.ItemOffer()
            itemOffer.email = email
            itemOffer.title = record[0]
            itemOffer.offer = float(record[1])
            itemOffer.time = record[2]
            response.offers.append(itemOffer)

        return response

    def GetRedisConnection(self):
        return redis.Redis(connection_pool=self.redis_pool)

    def GetNetworkGraph(self):
        r = self.GetRedisConnection()
        redis_graph = Graph('THE_NETWORK_GRAPH', r)
        return redis_graph

    def ExecuteQueryOnNetwork(self, query):
        redis_graph = self.GetNetworkGraph()
        return redis_graph.query(query)


if __name__ == '__main__':
    log = logging.getLogger('')
    log.setLevel(logging.DEBUG)
    sh = logging.StreamHandler(sys.stdout)
    formatter = logging.Formatter(
        '[%(asctime)s] %(levelname)s [%(filename)s.%(funcName)s:%(lineno)d] %(message)s', datefmt='%a, %d %b %Y %H:%M:%S')
    sh.setFormatter(formatter)
    log.addHandler(sh)
    # logging usage
    # log.info("These aren’t the droids you’re looking for.")
    # log.warning("You take the red pill, you stay in Wonderland and I show you how deep the rabbit-hole goes.")
    # log.debug("Happy hunger games and may the odds be ever in your favor.")
    # log.critical("All we have to decide is what to do with the time that is given us.")

    # setup gRPC server
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    network_pb2_grpc.add_NetworkServicer_to_server(Network(), server)
    server.add_insecure_port('[::]:9700')
    server.start()
    server.wait_for_termination()
