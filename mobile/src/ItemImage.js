import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import glamorous from 'glamorous-native';

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

const ImageContainer = glamorous.view((props, theme) => ({
    flex: 1,
    alignItems: 'stretch'
}));

const StyledImage = glamorous.image((props, theme) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
}));

// function ImageContainer () {
//     return (
//         <View style={styles.container}></View>
//     );
// }

// function TheImage () {
//     return (
//         <Image style={styles.image}></Image>
//     );
// }

const ItemImage = props => {
    return (
        <ImageContainer>
            <StyledImage resizeMode="contain" {...props} />
        </ImageContainer>
    );
}

export default ItemImage;