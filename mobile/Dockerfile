FROM node:15
RUN npm i -g expo-cli
RUN mkdir /src
WORKDIR /src
COPY ./src .
RUN npm install
#ENTRYPOINT ["expo", "start"]
#CMD ["w"]
