import { StyleSheet, Button, Alert } from 'react-native';
import * as Linking from 'expo-linking';
import React, { Component, useState } from 'react';
import { View, Text } from './Themed';
import * as WebBrowser from 'expo-web-browser';
import authHandler from './utils/AuthenticationHandler';


export default class SpotifyConnect extends Component {

    state = { }

    render() {
        return (
            <View>             
                <Button
                    onPress={() => authHandler.onLogin()}
                    color={"#1DB954"}
                    title={"Connexion à Spotify"}></Button>
                <Text></Text>
            </View>
        );
    }
}