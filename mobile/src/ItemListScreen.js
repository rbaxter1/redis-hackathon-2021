import React, { Component } from 'react';
import {FlatList, View} from 'react-native';

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
        //TODO: fetch items from backend and load into state
        var server = new NetworkClient('http://localhost:8080');

        if (this.props.context === "my networks") {
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
                        
                    }
                }
            });

            this.setState(() => ({
                data: NETWORKDATA,
                loading: false
            }));
        }
        if (this.props.context === "my items") {
            var request = new GetItemsForUserRequest();
            request.setEmail(globals.user);
    
            server.getItemsForUser(request, {}, (err, response) => {
                if (err) {
                    console.log(`Unexpected error for getItemsForUser: code = ${err.code}` +
                                `, message = "${err.message}"`);
                } else {
                    if (response) {
                        var res = new GetItemsForUserResponse();
    
                        console.log(response);
                        const list = response.getItemsList();
                        console.log(list);

                        // put items list into data array
                        //this.setState({data: list})
                        
                    }
                }
            });
            
            this.setState(() => ({
                data: ITEMDATA,
                loading: false
            }));
        }
        if (this.props.context === "all networks") {
            // i don't remember how we said we would do this
            this.setState(() => ({
                data: NETWORKDATA,
                loading: false
            }));
        }
        if (this.props.context === "network items") {
            var request = new GetItemsForNetworkRequest();
            request.setNetworkName(this.props.network);
    
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
                        
                    }
                }
            });

            this.setState(() => ({
                data: ITEMDATA,
                loading: false
            }));
        }

        

    };

    render () {
        const isNetwork = this.props.context === "all networks" || this.props.context === "my networks";

        return (
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
        );
    }
}