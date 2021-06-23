//import liraries
import { View, Text, StyleSheet, Button, StatusBar, TextInput } from 'react-native';
import React, { Component } from 'react';

// create a component
const Add = () => {
    return (
        <View style={styles.container}>
            <Text>MyComponent</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff',
    },
});

//make this component available to the app
export default Add;
