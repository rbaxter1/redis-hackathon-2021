from google.protobuf.json_format import MessageToJson, Parse
import grpc
import network_pb2
import network_pb2_grpc


def run(cmd):
    # NOTE(gRPC Python Team): .close() is possible on a channel and should be
    # used in circumstances in which the with statement does not fit the needs
    # of the code.
    with grpc.insecure_channel('localhost:9700') as channel:
        stub = network_pb2_grpc.NetworkStub(channel)
        # CreateNetwork endpoint
        if cmd == "CreateNetwork":
            newNetwork = network_pb2.NetworkDetails()
            newNetwork.name = 'myNetwork1218'
            newNetwork.owner_id = 'rbaxter@ezesoft.com'
            newNetwork.description = 'some blah description pt 5'
            image_string = "image_data_12345"
            newNetwork.image = image_string.encode('utf-8')
            print(newNetwork.image)
            response = stub.CreateNetwork(
                network_pb2.CreateNetworkRequest(network=newNetwork))
            print("Greeter client received: " + response.network_name)
        # GetNetworksForUser endpoint
        elif cmd == "GetNetworksForUser":
            userEmail = 'rbaxter@ezesoft.com'
            response = stub.GetNetworksForUser(
                network_pb2.GetNetworksForUserRequest(email=userEmail))
            print(MessageToJson(response))
        # JoinNetwork endpoint
        elif cmd == "JoinNetwork":
            userEmail = 'slattery.donohoe@gmail.com'
            networkName = 'myNetwork5'
            response = stub.JoinNetwork(
                network_pb2.JoinNetworkRequest(
                    email=userEmail, network_name=networkName)
            )

        elif cmd == "test":
            userDetails = network_pb2.UserDetails()
            userDetails.first_name = "John"
            userDetails.last_name = "Smith"
            userDetails.email = "JohnSmith@test.com"
            userRequest = network_pb2.CreateUserRequest(user=userDetails)
            response = stub.CreateUser(userRequest)
            print(MessageToJson(response))

            getUserRequest = network_pb2.GetUserRequest(
                email=userDetails.email)
            response = stub.GetUser(getUserRequest)

            print(MessageToJson(response))
        else:
            print("Unknown command.")


if __name__ == '__main__':
    print("Enter a command...")
    cmd = str(input())

    print("Running command " + cmd)
    run(cmd)

    print("Press enter to exit")
    str(input())
