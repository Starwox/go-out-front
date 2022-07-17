import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType, useAuthRequest } from 'expo-auth-session';
import { StyleSheet, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import * as tokenAction from "../../store/actions/token";
import * as playlists from "../../store/actions/playlist";

WebBrowser.maybeCompleteAuthSession();
//const queryString = require('query-string');
// Endpoint
const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

const AuthenticationHandler = ({navigation}) => {
  const dispatch = useDispatch();
  const playlistsData = () => {
    useSelector((state) => state.playlists)
  }
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: '1fc2338bd5c546f09b471052de6c7be0',
      scopes: [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "user-modify-playback-state",
        "streaming",
        "user-read-email",
        "user-read-private",
      ],
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: 'https://127.0.0.1:19006',
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      axios.post(
        "https://127.0.0.1:8000/fr/api/spotify-user/"+ access_token)
        .then((response) => {
          dispatch(playlists.addPlaylists(response.data));
          navigation.navigate("Playlists");
        })
        .catch((error) => {
          console.log("error", error.message);
        });
        dispatch(tokenAction.addToken(access_token));
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
        <Text style={styles.loginText}><Image source={require('../../spotify_logo.png')} style={styles.spotify} /> Connexion avec Spotify</Text>
    </Button>
  );
}
export default AuthenticationHandler;

const styles = StyleSheet.create({
  loginBt:{
    // width:"65%" ,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: 'black',
    marginTop:1,
    marginBottom:10
  },
  spotify:{
    width:20,
    height:20,
  },
  loginText:{
    color:"white"
  },
});