import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  StyleSheet,
  Button,
  Text
} from 'react-native';
import { Input, CheckBox } from 'react-native-elements';

const {UserDetails, CreateUserRequest, GetUserRequest} = require('./network_pb.js');
const {NetworkClient} = require('./network_grpc_web_pb.js');

import globals from './global.js'

class UserPage extends Component {
    constructor(props) {
      super(props);

      this.state = {
        user:""
      }
    }

    render () {
        return (
            <View style={styles.container}>
            <Text style={styles.title} align="center">
                Currently logged in user: {this.state.user !== "" ? this.state.user : "None"}
            </Text>
            <Input
              style={styles.input}
              placeholder='Username'
              onChangeText={text => this.setState({user: text})}
              value={this.state.user}
            />
            <Button
                  title="Create User"
                  onPress={() => {
                    var userDeets = new UserDetails();
                    userDeets.setEmail(this.state.user);
                    userDeets.setFirstName("");
                    userDeets.setLastName("");
                    userDeets.setNetworkNamesList([]);
                    userDeets.setFriendIdsList([]);
                    var request = new CreateUserRequest();
                    request.setUser(userDeets);
                    var server = new NetworkClient('http://localhost:8080');
        
                    server.createUser(request, {}, (err, response) => {
                      if (err) {
                        console.log(`Unexpected error for createUser: code = ${err.code}` +
                                    `, message = "${err.message}"`);
                      } else {
                        if (response) {
                          console.log(response.getSuccess());
                          console.log(response.getEmail());

                          if (response.getSuccess()) {
                            globals.user = this.state.user;
                            console.log("user is now " + globals.user)
                          }
                          
                        }
                      }
                    });
                    

                  }}
                />
                <Button
                  title="Log In"
                  onPress={() => {
                    var request = new GetUserRequest();
                    request.setEmail(this.state.user);
                    var server = new NetworkClient('http://localhost:8080');
        
                    server.getUser(request, {}, (err, response) => {
                      if (err) {
                        console.log(`Unexpected error for getUser: code = ${err.code}` +
                                    `, message = "${err.message}"`);
                      } else {
                        if (response) {
                          console.log(response);
                          console.log(response.getUser());

                          globals.user = this.state.user;
                          console.log("user is now " + globals.user)
                        }
                      }
                    });

                  }}
                />
              <StatusBar style="auto" />
            </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      borderWidth: 1
    },
    title: {
      fontSize: 16,
      color: '#000000',
      lineHeight: 24,
      textAlign: 'left',
      alignSelf: 'center'
  },
  });

export default UserPage;