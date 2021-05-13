import React, {Component} from 'react';
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

class CreateScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            allowPublicPosting: true,
            askingPrice: ""
        }
    }

    render () {
        const {navigation} = this.props;

        const elements = [];
        elements.push(<Input
            key="1"
            style={styles.input}
            placeholder='Name'
            onChangeText={text => this.setState({name: text})}
            value={this.state.name}
        />);
        elements.push(<Input
            key="2"
            style={styles.input}
            multiline
            numberOfLines={5}
            placeholder='Description'
            onChangeText={text => this.setState({description: text})}
            value={this.state.description}
        />);
        if (this.props.context === "network") {
            elements.push(<CheckBox
                key="3"
                title='Allow others to post'
                checked={this.state.allowPublicPosting}
                onPress={() => this.setState({allowPublicPosting: !this.state.allowPublicPosting})}
            />);
        }
        if (this.props.context === "item") {
            elements.push(<Input
                key="4"
                style={styles.input}
                placeholder='Asking Price'
                value={this.state.askingPrice}
                onChangeText={text => this.setState({askingPrice: text})}
                keyboardType="numeric"
            />);
        }

        return (
            <View style={styles.container}>
                {elements}
                <Button
                    title='Create'
                    onPress={() => {
                        //todo: submit data to backend
    
                        navigation.goBack();
                    }}
                />
            </View>
        );
    }
    
};

export default function(props) {
    const navigation = useNavigation();

    return <CreateScreen {...props} navigation={navigation} />;
}