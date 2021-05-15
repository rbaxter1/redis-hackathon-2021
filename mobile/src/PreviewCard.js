import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ItemImage from './ItemImage'

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
            joined: false
        }
    }

    componentDidMount () {
        //todo: load state of item from backend
        //itemId is passed into props through item
    }

    handleJoinButtonClick() {
        this.setState({joined: true});

        //todo: update backend
    }

    onPressItem () {
        const {navigation} = this.props;
        console.log("why are we navigating dude " + navigation)
        navigation.navigate('Item Details', {itemId: this.props.item.itemId});
    }

    render () {
        const isJoined = this.state.joined;
        let button;
        if (!isJoined && this.props.isNetwork) {
            button = <Button style={styles.button} title="Join" onPress={this.handleJoinButtonClick}/>
        }

        return (
            <TouchableHighlight onPress={() => {this.onPressItem()}}>
                <View style={styles.cardContainer}>
                    <View style={styles.imageContainer}>
                        <ItemImage style={styles.image} source={{uri: this.props.item.image_url}} />
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.title} align="center">
                            {this.props.item.name}
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