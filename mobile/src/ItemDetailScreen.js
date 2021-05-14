import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    Image
  } from 'react-native';

import ItemImage from './ItemImage'

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
        height: 100,
        width: 100
    }
});

export default class ItemDetailScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        // load item using id from backend
        // this.props.itemId
        console.log("itemid: " + this.props.itemId);
    }

    render () {
        return(
            <View style={styles.container}>
                <Text style={styles.title} align="center">
                    {this.props.name}
                </Text>
                <ItemImage style={styles.image} source={{uri: `data:image/png;base64,${this.props.imageUrl}`}}/>
            </View>
        );
    }
}