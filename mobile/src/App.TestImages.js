import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
const {CreateUserRequest, SaveImageRequest, SaveImageResponse, GetImageRequest, GetImageResponse} = require('./network_pb.js');
const {NetworkClient} = require('./network_grpc_web_pb.js');

export default function App() {
  return (
    <View style={styles.container}>
    <Button
          title="Create User"
          onPress={() => {

            var request = new CreateUserRequest()
            var server = new NetworkClient('http://localhost:8080');

            server.createUser(request, {}, (err, response) => {
              if (err) {
                console.log(`Unexpected error for createUser: code = ${err.code}` +
                            `, message = "${err.message}"`);
              } else {
                if (response) {
                  console.log(response)
                }
              }
            });
          }}
        />

        <Button
          title="Test Image"
          onPress={() => {

            var server = new NetworkClient('http://localhost:8080');
            
            var request = new SaveImageRequest()
            
            server.saveImage(request, {}, (err, response) => {
              if (err) {
                console.log(`Unexpected error for saveImage: code = ${err.code}` +
                            `, message = "${err.message}"`);
              } else {
                if (response) {
                  var image_id = response.getImageId();
                  console.log(image_id);

                  var get_request = new GetImageRequest()
                  get_request.setImageId(image_id)
                  server.getImage(get_request, {}, (err, response) => {
                    if (err) {
                      console.log(`Unexpected error for getImage: code = ${err.code}` +
                                  `, message = "${err.message}"`);
                    } else {
                      if (response) {
                        var image = response.getImage_asB64();
                        

                        //<Image source={{uri: `data:image/jpg;base64,${image}`}} />

                        console.log(image);
                      }
                    }
                  });

                }
              }            
            });

            //display image
          }}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
