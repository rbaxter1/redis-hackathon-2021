import redis
from redisgraph import Node, Edge, Graph, Path
import os
import sys
import logging
import uuid
import grpc
import base64
from concurrent import futures
from google.protobuf.json_format import MessageToJson, Parse
import network_pb2
import network_pb2_grpc

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
        log.info("Enter")

        # this is just testing redisgraph
        r = redis.Redis(connection_pool=self.redis_pool)
        redis_graph = Graph('social', r)
        john = Node(label='person', properties={'name': 'John Doe', 'age': 33, 'gender': 'male', 'status': 'single'})
        redis_graph.add_node(john)

        japan = Node(label='country', properties={'name': 'Japan'})
        redis_graph.add_node(japan)

        edge = Edge(john, 'visited', japan, properties={'purpose': 'pleasure'})
        redis_graph.add_edge(edge)

        redis_graph.commit()

        query = """MATCH (p:person)-[v:visited {purpose:"pleasure"}]->(c:country)
                RETURN p.name, p.age, v.purpose, c.name"""

        result = redis_graph.query(query)

        log.info(result.pretty_print())

        response = network_pb2.CreateUserResponse()
        return response

    def GetUser(self, request, context):
        response = network_pb2.GetUserResponse()
        return response

    def SearchForUser(self, request, context):
        response = network_pb2.SearchForUserResponse()
        return response

    def CreateFriendship(self, request, context):
        response = network_pb2.CreateFriendshipResponse()
        return response

    def ReplyToFriendship(self, request, context):
        response = network_pb2.ReplyToFriendshipResponse()
        return response

    def SubmitItem(self, request, context):
        response = network_pb2.SubmitItemResponse()
        return response

    def SubmitItemOffer(self, request, context):
        response = network_pb2.SubmitItemOfferResponse()
        return response

    def CreateNetwork(self, request, context):
        response = network_pb2.CreateNetworkResponse()
        return response

    def GetNetworksForUser(self, request, context):
        response = network_pb2.GetNetworksForUserResponse()
        return response

    def SearchForNetworks(self, request, context):
        response = network_pb2.SearchForNetworksResponse()
        return response

    def InviteUserToNetwork(self, request, context):
        response = network_pb2.InviteUserToNetworkResponse()
        return response

    def ReplyToNetworkInvite(self, request, context):
        response = network_pb2.ReplyToNetworkInviteResponse()
        return response

if __name__ == '__main__':
    log = logging.getLogger('')
    log.setLevel(logging.DEBUG)
    sh = logging.StreamHandler(sys.stdout)
    formatter = logging.Formatter('[%(asctime)s] %(levelname)s [%(filename)s.%(funcName)s:%(lineno)d] %(message)s', datefmt='%a, %d %b %Y %H:%M:%S')
    sh.setFormatter(formatter)
    log.addHandler(sh)
    # logging usage
    #log.info("These aren’t the droids you’re looking for.")
    #log.warning("You take the red pill, you stay in Wonderland and I show you how deep the rabbit-hole goes.")
    #log.debug("Happy hunger games and may the odds be ever in your favor.")
    #log.critical("All we have to decide is what to do with the time that is given us.")

    # setup gRPC server
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    network_pb2_grpc.add_NetworkServicer_to_server(Network(), server)
    server.add_insecure_port('[::]:9700')
    server.start()
    server.wait_for_termination()

    