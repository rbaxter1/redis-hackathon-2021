import React, {Component} from 'react';
import { Input, CheckBox } from 'react-native-elements';
import {
    View,
    StyleSheet,
    Button,
    Platform,
    Text
  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';

const {CreateNetworkRequest, GetNetworksForUserRequest, NetworkDetails, SubmitItemRequest, ItemDetails} = require('./network_pb.js');
const {NetworkPromiseClient} = require('./network_grpc_web_pb.js');

import globals from './global.js'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: "space-around"
    },
    title: {
        fontSize: 16,
        color: '#000000',
        lineHeight: 24,
        textAlign: 'left',
    },
    input: {
        borderWidth: 1
    }
});

class CreateScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            allowPublicPosting: true,
            askingPrice: "",
            image: null,
            network: this.props.network,
            open: false,
            value: null,
            items: []
        };
        this.setValue = this.setValue.bind(this);
        this.setOpen = this.setOpen.bind(this);
        this.setItems = this.setItems.bind(this);
    }

    setOpen(open) {
        this.setState({
          open
        });
      }
    
    setValue(callback) {
    this.setState(state => ({
        value: callback(state.value)
    }));
    }

    setItems(callback) {
    this.setState(state => ({
        items: callback(state.items)
    }));
    }

    componentDidMount () {
        (async () => {
            if (Platform.OS !== 'web') {
              const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
              if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
              }
            }
          })();

          var server = new NetworkPromiseClient('http://localhost:8080');
          var request = new GetNetworksForUserRequest();
          request.setEmail(globals.user);

          const fetch = async () => {
              try {
                  const response = await server.getNetworksForUser(request, {});
                  
                    console.log(response);
                    const list = response.getNetworksList();
                    console.log(list);

                    // put networks list into data array
                    //this.setState({data: list})
                    // string name = 1;
                    // string owner_id = 2;
                    // string description = 3;
                    // bytes image = 4;
                    // bool is_member = 5;
                    var networks = [];
                    for (const net of list) {
                        networks.push({
                            label: net.array[0],
                            value: net.array[0]
                        })
                    }
                    console.log("setting dropdown items to: " + networks)
                    this.setState({items: networks})
                  
              }
              catch (err) {
                  console.log(`Unexpected error for getNetworksForUser: code = ${err.code}` + `, message = "${err.message}"`);
                  
              }
          }

          fetch();
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          base64: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
            this.setState({image:result.uri})
        }
    }   

    render () {
        DropDownPicker.setTheme("LIGHT");
        const {navigation} = this.props;
        const {open, value, items} = this.state;
        const elements = [];
        elements.push(<Input
            key="1"
            style={styles.input}
            placeholder='Name'
            onChangeText={text => this.setState({name: text})}
            value={this.state.name}
        />);
        elements.push(<Input
            key="2"
            style={styles.input}
            multiline
            numberOfLines={5}
            placeholder='Description'
            onChangeText={text => this.setState({description: text})}
            value={this.state.description}
        />);
        if (this.props.context === "network") {
            elements.push(<CheckBox
                key="3"
                title='Allow others to post'
                checked={this.state.allowPublicPosting}
                onPress={() => this.setState({allowPublicPosting: !this.state.allowPublicPosting})}
            />);
        }
        if (this.props.context === "item") {
            elements.push(<Input
                key="4"
                style={styles.input}
                placeholder='Asking Price'
                value={this.state.askingPrice}
                onChangeText={text => this.setState({askingPrice: text})}
                keyboardType="numeric"
            />);
            elements.push(
                
            );
            elements.push(
            <View key="5">
                <Text>Network:</Text>
                <DropDownPicker 
                    open={open}
                    value={value}
                    items={items}
                    setOpen={this.setOpen}
                    setValue={this.setValue}
                    setItems={this.setItems}
                />
            </View>
            )
        }
        elements.push(<Button key="6" title="Pick an image from camera roll" onPress={() => {this.pickImage()}} />)

        return (
            <View style={styles.container}>
                {elements}
                <Button
                    title='Create'
                    onPress={() => {
                        //todo: submit data to backend
                        var server = new NetworkPromiseClient('http://localhost:8080');

                        if (this.props.context === "network") {
                            var networkDeets = new NetworkDetails();
                            networkDeets.setName(this.state.name);
                            networkDeets.setOwnerId(globals.user);
                            networkDeets.setDescription(this.state.description);
                            var enc = new TextEncoder();
                            const encoded = enc.encode(this.state.image);
                            networkDeets.setImage(encoded);
                            networkDeets.setIsMember(true);
                            var request = new CreateNetworkRequest();
                            request.setNetwork(networkDeets);

                            const fetch = async () => {
                                try {
                                    const response = await server.createNetwork(request, {});
                                    
                                    console.log(response);
                                    console.log(response.getNetworkName());
                                    console.log("goin back")

                                    navigation.goBack();
                                }
                                catch (err) {
                                    console.log(`Unexpected error for createNetwork: code = ${err.code}` + `, message = "${err.message}"`);
                                    
                                }
                            }
                            
                            fetch();
                
                        }

                        if (this.props.context === "item") {
                            var itemDeets = new ItemDetails();
                            // string title = 1;
                            // string description = 2;
                            // double asking_price = 3;
                            // string network_name = 4;
                            // bytes image = 5;
                            // repeated string labels = 6;
                            itemDeets.setTitle(this.state.name);
                            itemDeets.setDescription(this.state.description);
                            itemDeets.setAskingPrice(parseFloat(this.state.askingPrice));
                            itemDeets.setNetworkName(this.state.value);
                            var enc = new TextEncoder();
                            const encoded = enc.encode(this.state.image);
                            itemDeets.setImage(encoded);
                            itemDeets.setLabelsList([]);
                            var request = new SubmitItemRequest();
                            request.setItemDetails(itemDeets);
                            request.setEmail(globals.user);

                            const fetch = async () => {
                                try {
                                    const response = await server.submitItem(request, {});
                                    
                                    console.log(response);
                                    console.log(response.getSuccess());
                                    console.log("goin back")

                                    navigation.goBack();
                                }
                                catch (err) {
                                    console.log(`Unexpected error for submitItem: code = ${err.code}` + `, message = "${err.message}"`);
                                    
                                }
                            }
                            
                            fetch();

                        }

                        
                    }}
                />
            </View>
        );
    }
    
};

export default function(props) {
    const navigation = useNavigation();

    return <CreateScreen {...props} navigation={navigation} />;
}