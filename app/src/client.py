from google.protobuf.json_format import MessageToJson, Parse
import grpc
import network_pb2
import network_pb2_grpc
import json
import random


def CreateNetwork(stub, newNetwork):
    return stub.CreateNetwork(
        network_pb2.CreateNetworkRequest(network=newNetwork))


def GetNetworksForUser(stub, userEmail):
    return stub.GetNetworksForUser(
        network_pb2.GetNetworksForUserRequest(email=userEmail))


def JoinNetwork(stub, userEmail, networkName):
    return stub.JoinNetwork(
        network_pb2.JoinNetworkRequest(
            email=userEmail, network_name=networkName)
    )


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
            newNetwork.owner_id = 'jsmith@gmail.com'
            newNetwork.description = 'some blah description pt 5'
            image_string = "image_data_12345"
            newNetwork.image = image_string.encode('utf-8')
            response = CreateNetwork(stub, newNetwork)
            print("Greeter client received: " + response.network_name)

        # GetNetworksForUser endpoint
        elif cmd == "GetNetworksForUser":
            response = GetNetworksForUser(stub, 'jsmith@gmail.com')
            print(MessageToJson(response))

        # JoinNetwork endpoint
        elif cmd == "JoinNetwork":
            JoinNetwork(stub, 'mdavis@gmail.com', 'myNetwork1109')

        # Command to populate DB with dummy data
        elif cmd == "LoadTestData":
            print("Loading test data...")
            data = ''
            with open('./client_data/client_data.json') as f:
                data = json.load(f)
            # create all users
            print("Creating %d users" % len(data['users']))
            for u in data['users']:
                userDetails = Parse(json.dumps(u), network_pb2.UserDetails())
                stub.CreateUser(
                    network_pb2.CreateUserRequest(user=userDetails))
            # create all networks
            print("Creating %d networks" % len(data['networks']))
            for n in data['networks']:
                users = []
                alreadyOwned = 'owner_id' in n
                # If an owner's been assigned, get 9 other users
                if alreadyOwned:
                    users = random.sample(data['users'], 9)
                    # Make sure not to re-add the owner
                    while any(u['email'] == n['owner_id'] for u in users):
                        users = random.sample(data['users'], 9)
                # Otherwise just get 10 random users and assign the first one as owner
                else:
                    users = random.sample(data['users'], 10)
                    n['owner_id'] = users[0]['email']
                    users.pop(0)

                # Create the network itself
                newNetwork = network_pb2.NetworkDetails()
                newNetwork.name = n['name']
                newNetwork.description = n['description']
                newNetwork.owner_id = n['owner_id']
                CreateNetwork(stub, newNetwork)

                # Add users to network
                for u in users:
                    JoinNetwork(stub, u['email'], n['name'])

        # Test to create user and get user
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
