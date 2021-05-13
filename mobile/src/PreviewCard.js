import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

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
    }
});

export default class PreviewCard extends Component {
    constructor(props) {
        super(props);
        this.handleJoinButtonClick = this.handleJoinButtonClick.bind(this);
        this.state = {
            joined: false
        }
    }

    componentDidMount () {
        //todo: load state of item from backend
        //itemId is passed into props
    }

    handleJoinButtonClick() {
        this.setState({joined: true});

        //todo: update backend
    }

    render () {
        const isJoined = this.state.joined;
        let button;
        if (!isJoined && this.props.isNetwork) {
            button = <Button style={styles.button} title="Join" onPress={this.handleJoinButtonClick}/>
        }

        return (
            <View style={styles.cardContainer}>
                <View style={styles.imageContainer}>
                    <ItemImage source={{uri: this.props.imageUrl}} />
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.title} align="center">
                        {this.props.name}
                    </Text>
                    {button}
                </View>
            </View>
        );
    }
    
};