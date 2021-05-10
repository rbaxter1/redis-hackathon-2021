# The Network
# A 2021 Redis Hackathon Project

## Team:

Rob Baxter

Slattery Donohoe

Jonas McGowan-Martin

Jon Myers

## Instructions

Prerequisites:

Must have Docker (and docker compose) (Windows: https://docs.docker.com/docker-for-windows/install/)

Must have Node 14 (https://nodejs.org/en/download/)

Must have expo (https://docs.expo.io/)

    npm i -g expo-cli

Get the repo

    git clone https://github.com/rbaxter1/redis-hackathon-2021.git

    cd redis-hackathon-2021

Start-up the containers for Redis, Python gRPC server, and Envoy proxy. 

    docker compose up -d

TIP: *if you get a firewall warning on Windows, click "Allow access"

    cd mobile/src

    npm i

	expo start
	
At this point, if you have expo installed on your mobile device, you can open it and scan the QR code. You may need to change the connection type to Tunnel. If you do not have expo installed on your Android or iPhone, then simply type w to launch the app in your browser.

TIP: if you want to see debug out from the react native app, open your browser developer tools window.


## Architecture:

![](architecture.png)




## THESE ARE JUST NOTES TODO REMOVE

Required:

    docker pull redislabs/redismod
    docker pull envoyproxy/envoy-dev:0cdd980286615044b66ee585d56fedd71631c9df

Start:
    docker compose up --build -d

Notes: 

from grpc dir:

    protoc -I=./proto ./proto/network.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

    python -m grpc_tools.protoc -I./proto --python_out=. --grpc_python_out=. ./proto/network.proto

    