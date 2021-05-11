import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
});

const ItemImage = props => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} resizeMode="contain" {...props} />
        </View>
    );
}

export default ItemImage;