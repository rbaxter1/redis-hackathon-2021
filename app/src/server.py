import redis
import os
import sys
import logging
import grpc
from concurrent import futures
from google.protobuf.json_format import MessageToJson, Parse
import network_pb2
import network_pb2_grpc


class Network(network_pb2_grpc.NetworkServicer):
    def __init__(self):
        redis_address = os.environ['REDIS_URL']
        self.redis_pool = redis.ConnectionPool(host=redis_address)

    def CreateUser(self, request, context):
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

    