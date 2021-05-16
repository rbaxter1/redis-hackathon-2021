import React, {Component} from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native'

const {GetOffersMadeByUserRequest, GetOffersForUserItemsRequest, AcceptOfferRequest} = require('./network_pb.js');
const {NetworkClient, NetworkPromiseClient} = require('./network_grpc_web_pb.js');

import globals from './global.js'

// message ItemOffer {
//     string email = 1;
//     string title = 2;
//     double offer = 3;
//     string time = 4;
//     string status = 5;
//   }

const styles = StyleSheet.create({
    cardContainer: {
        height: 500,
        width: '85%',
        left: '7.5%',
        justifyContent: 'space-around',
        flex: 1,
        flexDirection: "row",
        borderWidth: 1
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
        fontSize: 24,
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

function FetchData({context, onUpdate}) {
    useFocusEffect(
        React.useCallback(() => {
            var server = new NetworkPromiseClient('http://localhost:8080');
            let isActive = true;

            if (context === "my offers") {
                var req = new GetOffersMadeByUserRequest();
                req.setEmail(globals.user);

                const fetch = async () => {
                    try {
                        const response = await server.getOffersMadeByUser(req, {});
                        
                        if (isActive) {
                            console.log(response);
        
                            console.log(response.getSuccess());
                            const list = response.getOffersList();
                            console.log(list)

                            //   string email = 1;
                            //   string title = 2;
                            //   double offer = 3;
                            //   string time = 4;
                            //   string status = 5;
                            var data = [];
                            for (const offer of list) {

                                data.push({
                                    email: offer.array[0],
                                    title: offer.array[1],
                                    offer: offer.array[2],
                                    time: offer.array[3],
                                    status: offer.array[4]
                                })
                                
                            }
                            onUpdate(data);
                        }
                    }
                    catch (err) {
                        console.log(`Unexpected error for getOffersMadeByUser: code = ${err.code}` + `, message = "${err.message}"`);
                        
                    }
                }
                
                fetch();
            }

            if (context === "received") {
                var req = new GetOffersForUserItemsRequest();
                req.setEmail(globals.user);

                const fetch = async () => {
                    try {
                        const response = await server.getOffersForUserItems(req, {});
                        
                        if (isActive) {
                            console.log(response);
        
                            console.log(response.getSuccess());
                            const list = response.getOffersList();
                            console.log(list)

                            //   string email = 1;
                            //   string title = 2;
                            //   double offer = 3;
                            //   string time = 4;
                            //   string status = 5;
                            var data = [];
                            for (const offer of list) {

                                data.push({
                                    email: offer.array[0],
                                    title: offer.array[1],
                                    offer: offer.array[2],
                                    time: offer.array[3],
                                    status: offer.array[4]
                                })
                                
                            }
                            onUpdate(data);
                        }
                    }
                    catch (err) {
                        console.log(`Unexpected error for getOffersForUserItems: code = ${err.code}` + `, message = "${err.message}"`);
                        
                    }
                }
                
                fetch();
            }
            

            return () => { isActive = false }
        }, [])
    );

    return null;
}

function Buttons ({item, context}) {
    if (context === "received" && item.status === "pending") {
        return <View>
            <Button title="Accept" onPress={() => {
                var server = new NetworkPromiseClient('http://localhost:8080');

                var req = new AcceptOfferRequest();
                req.setItemTitle(item.title);
                req.setOfferEmail(item.email);

                const fetch = async () => {
                    try {
                        const response = await server.acceptOffer(req, {});
                        
                        console.log(response);
    
                        console.log(response.getSuccess());
                        
                    }
                    catch (err) {
                        console.log(`Unexpected error for acceptOffer: code = ${err.code}` + `, message = "${err.message}"`);
                        
                    }
                }
                
                fetch();

            }} />
        </View>
    }
    else {
        return <Text style={styles.title}>{item.status}</Text>
    }
}

export default class OffersScreen extends Component {
    state = {
        data: [],
        page: 1,
        loading: true,
        error: null
    };

    handleUpdate = data => {
        console.log("handling update: " + data);
        this.setState(() => ({
            data: data,
            loading: false
        }));
    }

    render () {
        // let buttons;
        // if (this.props.context === "my offers") {
        //     buttons = <Button title="Cancel Offer" onPress={() => {}}/>
        // }
        // if (this.props.context === "received") {
        //     buttons = <View>
        //         <Button title="Accept" onPress={() => {}} />
        //         <Button title="Reject" onPress={() => {}} />
        //     </View>
        // }
        return (
            <View>
            <FetchData
                    context={this.props.context}
                    onUpdate={this.handleUpdate}
                />
            <FlatList contentContainerStyle={{
                flexDirection: 'column'
            }}
            numColumns={1}
            data={this.state.data}
            keyExtractor={item => item.time}
            renderItem={({item}) => (
                
                <View style={{marginTop: 25, width: '100%', height: '500', flex: 1}}>
                    <View style={styles.cardContainer}>
                        <Text style={styles.title}>Item: {item.title}</Text>
                        <Text style={styles.title}>Offered Price: {item.offer}</Text>
                        <Text style={styles.title}>From User: {item.email}</Text>
                        <Buttons item={item} context={this.props.context} />
                    </View>
                    
                </View>
            )}
            />
            </View>
        );
    }
}