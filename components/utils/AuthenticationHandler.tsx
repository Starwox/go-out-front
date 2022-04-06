import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Navigate } from 'react-router-native';


WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function AuthenticationHandler() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '1fc2338bd5c546f09b471052de6c7be0',
      scopes: ['user-read-email', 'playlist-modify-public'],
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: 'https://10.93.179.109:19006'
    },
    discovery
  );


  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      const jsonValue = JSON.stringify(code)
      AsyncStorage.setItem('@spotifyKey', jsonValue)
      }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        }}
    />
  );
}