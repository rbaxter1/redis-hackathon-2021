## The Network
# A 2021 Redis Hackathon Project

Team:
Rob Baxter
Slattery Donohoe
Jonas McGowan-Martin
Jon Myers

Required:

    docker pull redislabs/redismod
    docker pull envoyproxy/envoy-dev:0cdd980286615044b66ee585d56fedd71631c9df

Start:
    docker compose up --build -d


Architecture:

![](architecture.png)



Notes: 

from grpc dir:

    protoc -I=./proto ./proto/network.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

    python -m grpc_tools.protoc -I./proto --python_out=. --grpc_python_out=. ./proto/network.proto

    