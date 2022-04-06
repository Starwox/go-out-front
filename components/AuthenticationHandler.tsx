import {authorize, refresh} from 'react-native-app-auth';
class AuthenticationHandler {
    constructor() {
      this.spotifyAuthConfig = {
        clientId: '1fc2338bd5c546f09b471052de6c7be0',
        clientSecret: '333029afb54045898f90472f804de670',
        redirectUrl: 'com.your.app.name://oauthredirect',
        scopes: [
          'playlist-read-private',
          'playlist-modify-public',
          'playlist-modify-private',
          'user-library-read',
          'user-library-modify',
          'user-top-read',
        ],
        serviceConfiguration: {
          authorizationEndpoint: 'https://accounts.spotify.com/authorize',
          tokenEndpoint: 'https://accounts.spotify.com/api/token',
        },
      };
    }
  
    async onLogin() {
      try {
        const result = await authorize(this.spotifyAuthConfig);
        alert(JSON.stringify(result));
        return result;
      } catch (error) {
        console.log(JSON.stringify(error));
      } 
    }
  
    async refreshLogin(refreshToken) {
      const result = await refresh(this.spotifyAuthConfig, {
        refreshToken: refreshToken,
      });
      return result;
    }
  
  }
  
  const authHandler = new AuthenticationHandler();
  
  export default authHandler;