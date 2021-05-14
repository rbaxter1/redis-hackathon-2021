import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    }
});

const ItemImage = props => {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" {...props} />
        </View>
    );
}

export default ItemImage;