import React, { Component } from 'react';
import {FlatList, View} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import PreviewCard from './PreviewCard'

const {GetItemsForUserRequest, GetItemsForUserResponse, GetNetworksForUserRequest, ItemDetails, GetItemsForNetworkRequest} = require('./network_pb.js');
const {NetworkClient} = require('./network_grpc_web_pb.js');

import globals from './global.js'

// NetworkDetails
// string name = 1;
// string owner_id = 2;
// string description = 3;
// bytes image = 4;
// bool is_member = 5;

// ItemDetails
// string title = 1;
// string description = 2;
// double asking_price = 3;
// string network_name = 4;
// bytes image = 5;
// repeated string labels = 6;

const ITEMDATA = [
    {
        title: 'item1',
        description: 'iafuwehfakushfliasuhefliae',
        asking_price: '9999',
        network_name: 'thing1',
        image: 'iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        labels: ['label1, label2']
    },
    {
        title: 'item2',
        description: 'iafuwehfakushfliasuhefliae',
        asking_price: '9999',
        network_name: 'thing1',
        image: 'iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        labels: ['label1, label2']
    },
    {
        title: 'item3',
        description: 'iafuwehfakushfliasuhefliae',
        asking_price: '9999',
        network_name: 'thing1',
        image: 'iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        labels: ['label1, label2']
    }
]

const NETWORKDATA = [
    {
        name: 'thing1',
        owner_id: 'jonas',
        description: 'aushfliauhflashdflkasjhdfl',
        image: 'iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        is_member: true
    },
    {
        name: 'thing2',
        owner_id: 'jonas',
        description: 'aushfliauhflashdflkasjhdfl',
        image: 'iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        is_member: true
    },
    {
        name: 'thing3',
        owner_id: 'jonas',
        description: 'aushfliauhflashdflkasjhdfl',
        image: 'iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        is_member: false
    },
    {
        name: 'thing4',
        owner_id: 'jonas',
        description: 'aushfliauhflashdflkasjhdfl',
        image: 'iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        is_member: false
    },
    {
        name: 'thing5',
        owner_id: 'jonas',
        description: 'aushfliauhflashdflkasjhdfl',
        image: 'iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        is_member: false
    },
    {
        name: 'thing6',
        owner_id: 'jonas',
        description: 'aushfliauhflashdflkasjhdfl',
        image: 'iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        is_member: true
    },
    {
        name: 'thing7',
        owner_id: 'jonas',
        description: 'aushfliauhflashdflkasjhdfl',
        image: 'iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        is_member: false
    },
    {
        name: 'thing8',
        owner_id: 'jonas',
        description: 'aushfliauhflashdflkasjhdfl',
        image: 'iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        is_member: true
    },
    {
        name: 'thing9',
        owner_id: 'jonas',
        description: 'aushfliauhflashdflkasjhdfl',
        image: 'iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        is_member: true
    },
    {
        name: 'thing10',
        owner_id: 'jonas',
        description: 'aushfliauhflashdflkasjhdfl',
        image: 'iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        is_member: true
    },
]

function FetchData({context, network, onUpdate}) {
    useFocusEffect(
        React.useCallback(() => {
            var server = new NetworkClient('http://localhost:8080');

        if (context === "my networks") {
            var request = new GetNetworksForUserRequest();
            request.setEmail(globals.user);
            console.log("sending req: " + globals.user)

            server.getNetworksForUser(request, {}, (err, response) => {
                if (err) {
                    console.log(`Unexpected error for getNetworksForUser: code = ${err.code}` +
                                `, message = "${err.message}"`);
                } else {
                    if (response) {
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
                        var data = [];
                        for (const net of list) {
                            // only add if member
                            console.log("is member? " + net.array[4])
                            if (net.array[4]){
                                data.push({
                                    name: net.array[0],
                                    owner_id: net.array[1],
                                    description: net.array[2],
                                    image: net.array[3],
                                    is_member: net.array[4]
                                })
                            }
                        }
                        onUpdate(data);
                    }
                }
            });
            // this.setState(() => ({
            //     data: NETWORKDATA,
            //     loading: false
            // }));
        }
        if (context === "my items") {
            var request = new GetItemsForUserRequest();
            request.setEmail(globals.user);
    
            server.getItemsForUser(request, {}, (err, response) => {
                if (err) {
                    console.log(`Unexpected error for getItemsForUser: code = ${err.code}` +
                                `, message = "${err.message}"`);
                } else {
                    if (response) {
                        console.log(response);
                        const list = response.getItemsList();
                        console.log(list);

                        // put items list into data array
                        //this.setState({data: list})
                        var data = [];
                        for (const it in list) {
                            data.push({
                                title: it.array[0],
                                description: it.array[1],
                                asking_price: it.array[2],
                                network_name: it.array[3],
                                image: it.array[4]
                            })
                        }
                        onUpdate(data);
                    }
                }
            });
            
            // this.setState(() => ({
            //     data: ITEMDATA,
            //     loading: false
            // }));
        }
        if (context === "all networks") {
            var request = new GetNetworksForUserRequest();
            request.setEmail(globals.user);

            server.getNetworksForUser(request, {}, (err, response) => {
                if (err) {
                    console.log(`Unexpected error for getNetworksForUser: code = ${err.code}` +
                                `, message = "${err.message}"`);
                } else {
                    if (response) {
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
                        var data = [];
                        for (const net of list) {
                            data.push({
                                name: net.array[0],
                                owner_id: net.array[1],
                                description: net.array[2],
                                image: net.array[3],
                                is_member: net.array[4]
                            })
                        }
                        onUpdate(data);
                    }
                }
            });
        }
        if (context === "network items") {
            var request = new GetItemsForNetworkRequest();
            request.setNetworkName(network);
    
            server.getItemsForNetwork(request, {}, (err, response) => {
                if (err) {
                    console.log(`Unexpected error for getItemsForNetwork: code = ${err.code}` +
                                `, message = "${err.message}"`);
                } else {
                    if (response) {
                        console.log(response);
                        const list = response.getItemsList();
                        console.log(list);

                        // put items list into data array
                        //this.setState({data: list})
                        // string title = 1;
                        // string description = 2;
                        // double asking_price = 3;
                        // string network_name = 4;
                        // bytes image = 5;
                        // repeated string labels = 6;
                        var data = [];
                        for (const it in list) {
                            data.push({
                                title: it.array[0],
                                description: it.array[1],
                                asking_price: it.array[2],
                                network_name: it.array[3],
                                image: it.array[4]
                            })
                        }
                        onUpdate(data);
                    }
                }
            });

            // this.setState(() => ({
            //     data: ITEMDATA,
            //     loading: false
            // }));
        }

        return () => {/*can do stuff when we lose focus here*/}

        }, [context, network, onUpdate])
    );

    return null;
}

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
        //this.fetchAllItems();
    }

    handleUpdate = data => {
        console.log("handling update: " + data);
        console.log(data[0])
        console.log(data[1])
        this.setState(() => ({
            data: data,
            loading: false
        }));
    }

    render () {
        const isNetwork = this.props.context === "all networks" || this.props.context === "my networks";

        return (
            <>
                <FetchData
                    context={this.props.context}
                    network={this.props.network}
                    onUpdate={this.handleUpdate}
                />
                <FlatList contentContainerStyle={{
                    flexDirection: 'column'
                }}
                numColumns={2}
                data={this.state.data}
                keyExtractor={isNetwork ? item => item.name : item => item.title}
                renderItem={({item}) => (
                    
                    <View style={{marginTop: 25, width: '50%'}}>
                        <PreviewCard navigation={this.props.navigation} item={item} isNetwork={isNetwork}/>
                    </View>
                )}
                />
            </>
        );
    }
}