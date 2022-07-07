import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootTabParamList } from '../../types';
import { Button } from 'react-native-paper';

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

//const navigation = useNavigation<StackNavigationProp<RootTabParamList>>();


export default function AuthenticationHandler({navigation}) {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '1fc2338bd5c546f09b471052de6c7be0',
      scopes: [
        'user-read-email','user-read-private','user-library-read', 'user-read-currently-playing', 'user-read-playback-state',
        'playlist-modify-public', 'playlist-read-private','playlist-read-collaborative'
      ],
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: 'https://172.20.10.2:19006'
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      const jsonValue = JSON.stringify(code)
      AsyncStorage.setItem('@spotifyKey', jsonValue)
      try {
          fetch("https://127.0.0.1:8000/test/room/"+ code)
          .then(function(response) {
            return response.blob;
          })
      } catch(e) {
        console.log(e)
      }
      //navigation.navigate("TabOne")
      }
  }, [response]);

  return (
    <Button
      style={styles.loginBt}
      disabled={!request}
      mode="contained"
      onPress={() => {
        promptAsync();
        }}
    >
        <Text style={styles.loginText}>Connexion Spotify</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  loginBt:{
    // width:"65%" ,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: '#1ed760',
    marginTop:1,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
});