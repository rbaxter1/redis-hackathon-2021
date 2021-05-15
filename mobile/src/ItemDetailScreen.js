import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    Image
  } from 'react-native';
  import { Input } from 'react-native-elements';

import ItemImage from './ItemImage'
import globals from './global.js'
import ThemedListItem from 'react-native-elements/dist/list/ListItem';

const {SubmitItemOfferRequest, ItemOffer} = require('./network_pb.js');
const {NetworkClient} = require('./network_grpc_web_pb.js');

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
        alignSelf: 'center'
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: 250,
        width: 250
    },
    input: {
        borderWidth: 1
    }
});

export default class ItemDetailScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            offer: ""
        }
    }

    componentDidMount () {
        // load item using id from backend
        console.log("item: " + this.props.item);

        //just kidding lol we just pass it in from parent screen
    }

    render () {
        return(
            <View style={styles.container}>
                <Text style={styles.title} align="center">
                    {this.props.item.name}
                </Text>
                <ItemImage style={styles.image} source={{uri: `data:image/png;base64,${this.props.item.image}`}}/>
                <Text style={styles.title} align="center">
                    {this.props.item.description}
                </Text>
                <Text style={styles.title} align="center">
                    {this.props.askingPrice}
                </Text>
                <Input
                    style={styles.input}
                    placeholder='Offer'
                    keyboardType="numeric"
                    onChangeText={text => this.setState({offer: text})}
                    value={this.state.offer}
                />
                <Button
                    title={"Make Offer"}
                    onPress={() => {
                        var server = new NetworkClient('http://localhost:8080');

                        // string email = 1;
                        // string title = 2;
                        // double offer = 3;
                        // string time = 4;
                        var offer = new ItemOffer();
                        offer.setEmail(globals.user);
                        offer.setTitle(this.props.item.name);
                        offer.setOffer(parseFloat(this.state.offer));
                        offer.setTime(Date.now());
                        var req = new SubmitItemOfferRequest();
                        req.setItemOffer(offer);

                        server.submitItemOffer(req, {}, (err, response) => {
                            if (err) {
                                console.log(`Unexpected error for submitItemOffer: code = ${err.code}` +
                                            `, message = "${err.message}"`);
                            } else {
                                if (response) {
                                    console.log(response);
                                    console.log(response.getSuccess());
                                }
                            }
                        });
                    }}
                />
            </View>
        );
    }
}