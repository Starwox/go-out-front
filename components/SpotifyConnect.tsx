import { StyleSheet, Button, Alert } from 'react-native';
import * as Linking from 'expo-linking';
import React, { Component, useState } from 'react';
import { View, Text } from './Themed';
import * as WebBrowser from 'expo-web-browser';


export default function SpotifyConnect() {

    const query = {
        CLIENT_ID: "1fc2338bd5c546f09b471052de6c7be0",
        REDIRECT_URI: "exp://192.168.1.20:19000/--/",
        AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
        RESPONSE_TYPE: "code",
        SCOPE: "user-modify-playback-state user-read-playback-state user-read-currently-playing playlist-read-private user-read-private streaming app-remote-control",
    }
    const [result, setResult] = useState(null);

    return (
        <View>             
            <Button
                onPress={() => WebBrowser.openBrowserAsync(`${query.AUTH_ENDPOINT}?client_id=${query.CLIENT_ID}&redirect_uri=${query.REDIRECT_URI}&response_type=${query.RESPONSE_TYPE}&scope=${query.SCOPE}`)}
                color={"#1DB954"}
                title={"Connexion à Spotify"}></Button>
            <Text>{result}</Text>
        </View>
    );
}