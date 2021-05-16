import base64
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


def SubmitItem(stub, itemDetails, userEmail):
    return stub.SubmitItem(
        network_pb2.SubmitItemRequest(
            item_details=itemDetails, email=userEmail)
    )


def GetImageData(path):
    image = open(path, 'rb').read()
    image_data = str(base64.b64encode(image))
    image_data_str = "data:image/jpeg;base64,{0}".format(
        image_data[2:-1])
    return image_data_str.encode('UTF-8')


def run(cmd):
    client_data_path = '../client_data'
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
            response = GetNetworksForUser(stub, 'sage@gmail.com')
            print(MessageToJson(response))

        # JoinNetwork endpoint
        elif cmd == "JoinNetwork":
            JoinNetwork(stub, 'mdavis@gmail.com', 'myNetwork1109')

        # Command to populate DB with dummy data
        elif cmd == "LoadTestData":
            print("Loading test data...")
            data = ''
            with open(f'{client_data_path}/client_data.json') as f:
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

                # Create the network itself
                newNetwork = network_pb2.NetworkDetails()
                newNetwork.name = n['name']
                newNetwork.description = n['description']
                newNetwork.owner_id = n['owner_id']

                # Get image
                image_name = n['image']
                image_path = f'{client_data_path}/images/{image_name}'
                newNetwork.image = GetImageData(image_path)
                CreateNetwork(stub, newNetwork)

                # Add users to network
                for u in users:
                    if (u['email'] != newNetwork.owner_id):
                        JoinNetwork(stub, u['email'], n['name'])

                # add items
                for i in n['items']:
                    item = Parse(
                        json.dumps(i), network_pb2.ItemDetails())
                    item.network_name = n['name']
                    email = n['owner_id'] if alreadyOwned else (
                        random.choice(users)['email'])
                    SubmitItem(stub, item, email)

        # SubmitItemOffer endpoint
        elif cmd == "SubmitItemOffer":
            item = network_pb2.ItemOffer()
            item.email = 'serena.w@gmail.com'
            item.title = 'Through the Looking Glass'
            item.offer = 175

            stub.SubmitItemOffer(
                network_pb2.SubmitItemOfferRequest(item_offer=item))

        # GetOffersMadeByUser endpoint
        elif cmd == "GetOffersMadeByUser":
            response = stub.GetOffersMadeByUser(
                network_pb2.GetOffersMadeByUserRequest(email='twoods@gmail.com'))
            print(MessageToJson(response))

        # GetOffersForUserItems endpoint
        elif cmd == "GetOffersForUserItems":
            response = stub.GetOffersForUserItems(
                network_pb2.GetOffersForUserItemsRequest(email='a.nunes@gmail.com'))
            print(MessageToJson(response))

        # GetItemsForUser endpoint
        elif cmd == "GetItemsForUser":
            response = stub.GetItemsForUser(
                network_pb2.GetItemsForUserRequest(email='a.nunes@gmail.com')
            )
            print(MessageToJson(response))

        # AcceptOffer endpoint
        elif cmd == "AcceptOffer":
            response = stub.AcceptOffer(network_pb2.AcceptOfferRequest(
                item_title='Through the Looking Glass', offer_email='twoods@gmail.com'))
            print(MessageToJson(response))

        # Test to create user and get user
        elif cmd == "test":
            userDetails = network_pb2.UserDetails()
            userDetails.first_name = "John"
            userDetails.last_name = "Smith"
            userDetails.email = "JohnSmith@test.com"
            userRequest = network_pb2.CreateUserRequest(user=userDetails)
            response = stub.CreateUser(userRequest)
            print(MessageToJson(response))

            userDetails2 = network_pb2.UserDetails()
            userDetails2.first_name = "John"
            userDetails2.last_name = "White"
            userDetails2.email = "JohnWhite@test.com"
            userRequest = network_pb2.CreateUserRequest(user=userDetails2)
            response = stub.CreateUser(userRequest)
            print(MessageToJson(response))

            userDetails3 = network_pb2.UserDetails()
            userDetails3.first_name = "Jimmy"
            userDetails3.last_name = "White"
            userDetails3.email = "JimmyWhite@test.com"
            userRequest = network_pb2.CreateUserRequest(user=userDetails3)
            response = stub.CreateUser(userRequest)
            print(MessageToJson(response))

            getUserRequest = network_pb2.GetUserRequest(
                email=userDetails.email)
            response = stub.GetUser(getUserRequest)
            print(MessageToJson(response))

            newNetwork = network_pb2.NetworkDetails()
            newNetwork.name = 'myNetwork'
            newNetwork.owner_id = userDetails.email
            newNetwork.description = 'some blah description'
            response = stub.CreateNetwork(
                network_pb2.CreateNetworkRequest(network=newNetwork))
            print("Greeter client received: " + response.network_name)

            item = network_pb2.ItemDetails()
            item.title = "test item"
            item.description = "an item for testing"
            item.asking_price = 25.23
            item.network_name = newNetwork.name
            image_string = "image_data_12345"
            item.image = image_string.encode('utf-8')

            submitItemRequest = network_pb2.SubmitItemRequest(
                item_details=item)
            submitItemRequest.email = userDetails.email

            response = stub.SubmitItem(submitItemRequest)
            print(MessageToJson(response))

            item = network_pb2.ItemDetails()
            item.title = "test item two"
            item.description = "another item for testing"
            item.asking_price = 25.233245
            item.network_name = newNetwork.name
            image_string = "image_data_12345"
            item.image = image_string.encode('utf-8')

            submitItemRequest = network_pb2.SubmitItemRequest(
                item_details=item)
            submitItemRequest.email = userDetails.email

            response = stub.SubmitItem(submitItemRequest)
            print(MessageToJson(response))

            getItemsForUsersRequest = network_pb2.GetItemsForUserRequest(
                email=userDetails.email)
            response = stub.GetItemsForUser(getItemsForUsersRequest)
            print(MessageToJson(response))

            getItemsForNetworkRequest = network_pb2.GetItemsForNetworkRequest(
                network_name=newNetwork.name)
            response = stub.GetItemsForNetwork(getItemsForNetworkRequest)
            print(MessageToJson(response))

            itemOffer = network_pb2.ItemOffer()
            itemOffer.email = userDetails2.email
            itemOffer.title = item.title
            itemOffer.offer = 12

            response = stub.SubmitItemOffer(
                network_pb2.SubmitItemOfferRequest(item_offer=itemOffer))
            print(MessageToJson(response))

            itemOffer = network_pb2.ItemOffer()
            itemOffer.email = userDetails3.email
            itemOffer.title = item.title
            itemOffer.offer = 121234

            response = stub.SubmitItemOffer(
                network_pb2.SubmitItemOfferRequest(item_offer=itemOffer))
            print(MessageToJson(response))

            response = stub.GetOffersMadeByUser(
                network_pb2.GetOffersMadeByUserRequest(email=userDetails2.email))
            print(MessageToJson(response))

            response = stub.GetOffersMadeByUser(
                network_pb2.GetOffersMadeByUserRequest(email=userDetails3.email))
            print(MessageToJson(response))

            response = stub.GetOffersForUserItems(
                network_pb2.GetOffersForUserItemsRequest(email=userDetails.email))
            print(MessageToJson(response))

            response = stub.AcceptOffer(network_pb2.AcceptOfferRequest(
                item_title=item.title, offer_email=userDetails3.email))
            print(MessageToJson(response))

            response = stub.GetOffersMadeByUser(
                network_pb2.GetOffersMadeByUserRequest(email=userDetails2.email))
            print(MessageToJson(response))

            response = stub.GetOffersMadeByUser(
                network_pb2.GetOffersMadeByUserRequest(email=userDetails3.email))
            print(MessageToJson(response))

            response = stub.GetOffersForUserItems(
                network_pb2.GetOffersForUserItemsRequest(email=userDetails.email))
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
