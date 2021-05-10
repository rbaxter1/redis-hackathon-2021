import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import glamorous from 'glamorous-native';

import ItemImage from './ItemImage'

const styles = StyleSheet.create({
    container: {
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
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'robotoRegular',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'left',
        alignSelf: 'center'
    }
});

const Title = glamorous.text((props, theme) => ({
    fontSize: 16,
    color: props.color || '#000000',
    lineHeight: 24,
    textAlign: props.align || 'left',
    alignSelf: props.alignSelf || 'center'
}));

const CardContainer = glamorous.view((props, theme) => ({
    height: 160,
    width: '85%',
    left: '7.5%',
    justifyContent: 'space-around'
}));

const ImageContainer = glamorous.view((props, theme) => ({
    flex: 1,
    alignItems: 'stretch'
}));

const NameContainer = glamorous.view((props, theme) => ({
    height: '30%',
    backgroundColor: '#3f51b5',
    justifyContent: 'center'
}));

// function CardContainer () {
//     return (
//         <View style={styles.container}></View>
//     );
// }

// function ImageContainer () {
//     return (
//         <View style={styles.imageContainer}></View>
//     );
// }

// function NameContainer () {
//     return (
//         <View style={styles.nameContainer}></View>
//     );
// }

const PreviewCard = ({name, imageUrl}) => {
    return (
        <CardContainer>
            <ImageContainer>
                <ItemImage source={{uri: imageUrl}} />
            </ImageContainer>
            <NameContainer>
                <Title align="center">
                    {name}
                </Title>
            </NameContainer>
        </CardContainer>
    );
};

export default PreviewCard;