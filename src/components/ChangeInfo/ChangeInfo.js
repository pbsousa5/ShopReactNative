import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ChangeInfo extends Component {
    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#adff2f' }}>
                <Text>
                    ChangeInfo Component
                </Text>
                <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                    <Text>Go back Main</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
