import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const {JoinNetworkRequest} = require('./network_pb.js');
const {NetworkClient} = require('./network_grpc_web_pb.js');

import ItemImage from './ItemImage'

import globals from './global.js'

const styles = StyleSheet.create({
    cardContainer: {
        height: 160,
        width: '85%',
        left: '7.5%',
        justifyContent: 'space-around'
    },
    imageContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
    nameContainer: {
        height: '35%',
        backgroundColor: '#3f51b5',
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        color: '#000000',
        lineHeight: 24,
        textAlign: 'left',
        alignSelf: 'center'
    },
    button: {
        width: '30%'
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: 100,
        width: 100
    }
});

class PreviewCard extends Component {
    constructor(props) {
        super(props);
        this.handleJoinButtonClick = this.handleJoinButtonClick.bind(this);
        this.onPressItem = this.onPressItem.bind(this);
        this.state = {
            joined: this.props.item.is_member
        }
    }

    // componentDidMount () {

    // }

    handleJoinButtonClick() {
        this.setState({joined: true});

        var server = new NetworkClient('http://localhost:8080');
        var request = new JoinNetworkRequest();
        // string email = 1;
        // string network_name = 2;
        request.setEmail(globals.user);
        request.setNetworkName(this.props.item.name);

        server.joinNetwork(request, {}, (err, response) => {
            if (err) {
            console.log(`Unexpected error for joinNetwork: code = ${err.code}` +
                        `, message = "${err.message}"`);
            } else {
            if (response) {
                console.log(response);
                console.log(response.getSuccess());
            }
            }
        });
    }

    onPressItem () {
        const {navigation} = this.props;
        console.log("why are we navigating dude " + navigation)
        console.log(this.props.item)
        console.log(this.props.item.name)

        if (this.props.isNetwork) {
            navigation.navigate('Items', {network: this.props.item.name});
        }
        else {
            navigation.navigate('Item Details', {item: this.props.item});
        }
    }

    render () {
        const isJoined = this.state.joined;
        let button;
        if (!isJoined && this.props.isNetwork) {
            button = <Button style={styles.button} title="Join" onPress={() => {this.handleJoinButtonClick()}}/>
        }


        var enc = new TextDecoder("utf-8");
        const b64image = enc.decode(this.props.item.image);
        //`data:image/png;base64,${this.props.item.image}`

        return (
            <TouchableHighlight onPress={() => {this.onPressItem()}}>
                <View style={styles.cardContainer}>
                    <View style={styles.imageContainer}>
                        <ItemImage style={styles.image} source={{uri: b64image}}/>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.title} align="center">
                            {this.props.isNetwork ? this.props.item.name : this.props.item.title}
                        </Text>
                        {button}
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
    
};

export default function(props) {
    const navigation = useNavigation();

    return <PreviewCard {...props} navigation={navigation} />;
}