import React from 'react';
import { Input, CheckBox } from 'react-native-elements';
import {
    View,
    StyleSheet,
    Button
  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
    },
    input: {
        borderWidth: 1
    }
});

const CreateScreen = (props) => {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [allowPublicPosting, setPublicPosting] = React.useState(true);

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Input
                style={styles.input}
                placeholder='Name'
                onChangeText={setName}
                value={name}
            />
            <Input
                style={styles.input}
                multiline
                numberOfLines={5}
                placeholder='Description'
                onChangeText={setDescription}
                value={description}
            />
            <CheckBox
                title='Allow others to post'
                checked={allowPublicPosting}
                onPress={() => setPublicPosting(!allowPublicPosting)}
            />
            <Button
                title='Create'
                onPress={() => {
                    // submit data to backend

                    navigation.goBack();
                }}
            />
        </View>
    );
};

export default CreateScreen;