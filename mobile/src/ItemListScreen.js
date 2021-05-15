import React, { Component } from 'react';
import {FlatList, View} from 'react-native';

import PreviewCard from './PreviewCard'

const {GetItemsForUserRequest, GetItemsForUserResponse} = require('./network_pb.js');
const {NetworkClient} = require('./network_grpc_web_pb.js');

const DATA = [
    {
        id: 'thing1',
        name: 'the first thing',
        image_url: 'https://reactnative.dev/img/tiny_logo.png'
    },
    {
        id: 'thing2',
        name: 'the second thing',
        image_url: 'https://reactnative.dev/img/tiny_logo.png'
    },
    {
        id: 'thing3',
        name: 'the third thing',
        image_url: 'https://reactnative.dev/img/tiny_logo.png'
    },
    {
        id: 'thing4',
        name: 'the third thing',
        image_url: 'https://reactnative.dev/img/tiny_logo.png'
    },
    {
        id: 'thing5',
        name: 'the third thing',
        image_url: 'https://reactnative.dev/img/tiny_logo.png'
    },
    {
        id: 'thing6',
        name: 'the third thing',
        image_url: 'https://reactnative.dev/img/tiny_logo.png'
    },
    {
        id: 'thing7',
        name: 'the third thing',
        image_url: 'https://reactnative.dev/img/tiny_logo.png'
    },
    {
        id: 'thing8',
        name: 'the third thing',
        image_url: 'https://reactnative.dev/img/tiny_logo.png'
    },
    {
        id: 'thing9',
        name: 'the third thing',
        image_url: 'https://reactnative.dev/img/tiny_logo.png'
    },
    {
        id: 'thing10',
        name: 'the third thing',
        image_url: 'https://reactnative.dev/img/tiny_logo.png'
    }
]

export default class ItemListScreen extends Component {
    state = {
        data: [],
        page: 1,
        loading: true,
        error: null
    };

    componentDidMount() {
        console.log("item list did mount");
        console.log("navigation passed in? " + this.props.navigation);
        this.fetchAllItems();
    }

    fetchAllItems = () => {
        const {page} = this.state;

        //TODO: fetch items from backend and load into state
        var request = new GetItemsForUserRequest()
        var server = new NetworkClient('http://localhost:8080');

        request.setEmail('me@you.com')

        server.getItemsForUser(request, {}, (err, response) => {
            if (err) {
                console.log(`Unexpected error for getItemsForUser: code = ${err.code}` +
                            `, message = "${err.message}"`);
            } else {
                if (response) {
                    console.log(response)
                }
            }
        });

        this.setState((prevState, nextProps) => ({
            data: DATA,
            loading: false
        }));
    };

    render () {
        return (
            <FlatList contentContainerStyle={{

                flexDirection: 'column'

            }}
            numColumns={2}
            data={this.state.data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
                <View style={{marginTop: 25, width: '50%'}}>
                    <PreviewCard navigation={this.props.navigation} item={item} isNetwork={this.props.isNetwork}/>
                </View>
            )}
            />
        );
    }
}