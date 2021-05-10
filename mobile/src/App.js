import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const {CreateUserRequest, CreateUserResponse} = require('./network_pb.js');
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
