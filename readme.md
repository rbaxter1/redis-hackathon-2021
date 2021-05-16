# The Network
## A 2021 Redis Hackathon Project


## Team:

<ul>
  <li> Rob Baxter </li>
  <li> Slattery Donohoe </li>
  <li> Jonas McGowan-Martin </li>
  <li> Jon Myers </li>
</ul>

## What is *The Network*?

*The Network* is a technology platform that enables you to build your own personal buying and selling network. When you meet people you want transact with, tell them to "join my network". Whether you are an artist building a distribution network for your creations, or a group of sports fans coordinating ticket sales, *The Network* is a space that makes building networks and transacting easy.

## Use of Redis

This project uses RedisGraph to store and retrieve data. In the setup described below, Redis runs in a [redismod](https://github.com/RedisLabsModules/redismod) Docker container.

## How the data is stored

All data for *The Network* is stored in a graph. **Users**, **Networks**, and **Items** are nodes. Edges between nodes represent relationships. For example, an edge between two **Users** indicates friendship. An edge between a **User** and an **Item** indicates a listing for sale. An edge between a **User** and a **Network** indicates membership.

### Overview of Graph Structure

**Nodes**:
- Users, Networks, Items, Tags

**Edges**:

|Node 1 |Node 2| Edges |
--- | --- | ---
|User |User | Friend|
|User | Item | Listing, Offer | 
|User | Network | Member |
|Item | Tags | Label |

TODO: Screenshot of a graph from RedisInsight

### Creating Users

When a person signs up for *The Network*, a **user** node is created. Properties are set on the node for user detail including email, first name and last name.

    GRAPH.QUERY THE_NETWORK_GRAPH
    "OPTIONAL MATCH (check:user {email: '%emusk@tesla.com'})
    MERGE (u:user {email: 'emusk@tesla.com' })
    ON CREATE SET u.first_name='Elon', u.last_name='Musk'
    RETURN not(exists(check))"

The merge is used to make sure no duplicate users are created for a given email address. The optional match returns to the service whether this user did not already exist, and the user was truly "created." 

### Creating Networks

When a user creates a network, a **network** node is created, and both an **owner** and a **member** edge is created between the **user** and the **network** nodes.

    GRAPH.QUERY THE_NETWORK_GRAPH 
    "MATCH (u:user {email:'emusk@tesla.com'})
    MERGE (n:network {name: 'Spaceship parts exchange', description: 'Buy and sell lightly used space travel tech'})
    MERGE (u)-[:OWNER]->(n)
    MERGE (u)-[:MEMBER]->(n)
    SET n.image_id = 'image:3261'"

The image associated with the network is stored in its own key. In the graph, the key is stored as a property on the network.
    
    SET image:3261 <b64_encoded_image_data>

### Joining Networks

When a user joins a network, a **member** edge is created between the **user** and **network** nodes.

    GRAPH.QUERY THE_NETWORK_GRAPH 
    "MATCH (u:user {email:'emusk@tesla.com'})
    MATCH (n:network {name:'Tesla apparel'})
    MERGE (u)-[:MEMBER]->(n)"

### Listing Items

When a user lists an item for sale in a network, an **item** node is created and a **selling** edge is created between the user and the item.

    GRAPH.QUERY THE_NETWORK_GRAPH
    "MATCH (u:user {email:'emusk@tesla.com'})
    MATCH (n:network {name:'Spaceship parts exchange'})
    MERGE (i:item {title: 'Spare rocket booster', description: 'lightly used, only one launch!', asking_price: '5000000'})
    MERGE (u)-[:SELLER]->(i)
    MERGE (i)-[:SALE]->(n)"

When an item is created, the image associated with the item is stored in its own key. In the graph, the key is stored as a property on the item.

    SET image:3261 <b64_encoded_image_data>

### Making an Offer

When a user makes an offer for a listed item, an **offer** edge is created between the user and the item. The edge has a property for offer status which could be one of the following: `active`, `accepted`, `rejected`. When an **offer** edge is created, the **status** property is initialized to `active`. In the event that an offer is made on a item already having an `accepted` offer, the offer is initialized to `rejected`.

    GRAPH.QUERY THE_NETWORK_GRAPH "MATCH (i:item {title:'Spare rocket booster'})MATCH (u:user {email: 'corporatepurchasing@nasa.org'}) MERGE (u)-[:OFFER {offer:'4500000' time:'2021-05-15 12:00:00.000000'}]->(i)"

### Accepting an Offer

When a user accepts an offer on a listed item, the **status** property on the **offer** edge updates to `accepted`. All other offers with a status property of `active` are updated to `rejected`.

TODO: Command Details

### Rejecting an Offer

When a user rejects an offer on a listed item, the **status** property on the **offer** edge updates to `rejected`.

TODO: Command Details

## How the Data is Accessed

*My Offers*

*Review Offers*


### Find All Listed Items in Any Network a User is a Member

The *Browse Items* screen shows all items for sale in all networks the user is a member.

TODO: Command Details

### Find a User's Listed Items

The *My Items* screen shows all items a user has for sale.

TODO: Command Details

### List All Available Networks

The *All Networks* screen shows all network nodes in a graph.

    GRAPH.QUERY THE_NETWORK_GRAPH "MATCH (n:network) MATCH (owner:user)-[:OWNER]->(n) OPTIONAL MATCH (u:user {email: 'emusk@tesla.com'}) OPTIONAL MATCH (u)-[m:MEMBER]->(n) RETURN n.name, n.description, owner.email, n.image_id, exists(m)"

This query returns a list of all networks, with a boolean value representing whether the user is a member of each given network.

### Find All Offers for Any Item Being Sold by a User

The *Review Offers* screen shows the properties of any **offer** edge for all items for sale by a specified user.

TODO: Command Details

### Find All Offers Submitted by a User

The *My Offers* screen shows the properties of any **offer** edge connected to a specified user.

    GRAPH.QUERY THE_NETWORK_GRAPH "MATCH (:user {email:'emusk@tesla.com'})-[o:OFFER]->(i:item) RETURN i.title, o.offer, o.time"

#### All Item Tags that a User Has Made Offers on (Analytics)

// Show the image from redisinsight

#### 



## Utility & Usefulness


## UX and DX
The following table shows iPhone and Android screenshots for each page in the mobile application. 

|Page |Screen |
--- | ---  
|Main Menu|![](./images/menu_iphone.jpg)|
|All Networks|![](./images/networks_iphone.jpg)
|My Networks|![](./images/my_networks_iphone.jpg)|
|My Items|![](./images/items_iphone.jpg)|

## Installation Instructions

### Prerequisites

- Must have Docker ([Windows](https://docs.docker.com/docker-for-windows/install/) |  [Ubuntu](https://docs.docker.com/engine/install/ubuntu/))

- Must have [Node 14+](https://nodejs.org/en/download/)

- Must have [Expo](https://docs.expo.io/) 

After installing Node, install Expo:
    
    npm i -g expo-cli

### Local Install

Get the repo:

    git clone https://github.com/rbaxter1/redis-hackathon-2021.git

    cd redis-hackathon-2021

Build and start the containers for Redis, RedisInsight, the backend Python gRPC server, and the Envoy proxy:

    docker compose up -d

Run the mobile application using Expo in a local web browser. This application can be run on your mobile phone by installing [Expo Go](https://expo.io/client). However, we recommend starting with the web browser since you may encounter connectivity issues that require custom configuration, depending on your local network setup.

    cd mobile/src

    npm i

	expo start
	
After running `expo start`, you are presented with the following options:

![](./images/expo_start.png)

 In the command window, type `w` to open the mobile application in your default web browser.

> **Tip**: When running in the browser, you can to see debugger output from the React Native app by opening your browser's developer tools window ([Firefox](https://developer.mozilla.org/en-US/docs/Tools) | [Chrome](https://developer.chrome.com/docs/devtools/open/))

Optional:

The `docker compose up` command you ran in a above starts a RedisInsight server. To use RedisInight, open your favorite web browser and go to http://localhost:8001.

After accepting the EULA agreement, click the "I already have a database" button. Then "Connect to a Redis Database". In the host field enter `redis`. The port is 6379. Enter anything you like for the name. Click "Add Redis Database"

![](./images/redisinsight_add_db.png)
## Architecture

The following diagram illustrates the architecture.

![](./images/architecture.png) 

## Technology Stack

- [Redis](https://redis.io/) powers the persistence layer. Using the [RedisGraph](https://oss.redislabs.com/redisgraph/) available from [Redis Labs](https://redislabs.com/) and provides fast, sophisticated graph operations making data management and querying easy.

- The back-end server is written in [Python](https://www.python.org/). Redis is accessed though the [redis-py module](https://docs.redislabs.com/latest/rs/references/client_references/client_python/). We also use the [redisgraph-py module](https://github.com/RedisGraph/redisgraph-py).

- We use [RedisInsight](https://redislabs.com/redis-enterprise/redis-insight/) to visualize the system graph and run ad hoc queries. 

- All backend components are deployed to [Docker](https://www.docker.com/) containers. You can easily launch the entire back-end with a simple `docker compose up` command.

- We use [gRPC](https://grpc.io/) for transport ([HTTP/2](https://http2.github.io/)), serialization ([ProtocolBuffers](https://developers.google.com/protocol-buffers/)), and service endpoint definitions.

- The mobile front-end is built on [React Native](https://reactnative.dev/) which conveniently allows a developer to create both iOS and Android application with a single codebase.

- Using [Expo](https://docs.expo.io/) developers can create an app with a single `expo init` command and debug either in a web browser or on a mobile device.

- [grpc-web](https://github.com/grpc/grpc-web) enables gRPC interface definitions to be compiled into native Javascript.

- We use [Envoy](https://www.envoyproxy.io/) for the proxy layer between the front-end mobile app and the back-end services. Envoy has a built-in `grpc_web` filter to convert HTTP/1.1 traffic to HTTP/2.


| | | |
--- | --- | ---
|![](./images/redis_enterprise_logo.png) |![](./images/redis_graph_logo.png) | ![](./images/docker_logo.png) |
|![](./images/reactnative_logo.png) | ![](./images/envoy_logo.png) | ![](./images/grpc_logo.png) |


## Developer Notes

To generate the native Javascript and Python classes and RPC endpoints from the gRPC proto file, execute the following commands.


python:

    python -m grpc_tools.protoc -I./proto --python_out=. --grpc_python_out=. ./proto/network.proto

grpc-web (javascript):

    protoc -I=./proto ./proto/network.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.
