import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

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
        height: '30%',
        backgroundColor: '#3f51b5',
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        color: '#000000',
        lineHeight: 24,
        textAlign: 'left',
        alignSelf: 'center'
    }
});

const PreviewCard = ({name, imageUrl}) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <ItemImage source={{uri: imageUrl}} />
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.title} align="center">
                    {name}
                </Text>
            </View>
        </View>
    );
};

export default PreviewCard;