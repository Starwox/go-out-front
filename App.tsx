import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStore, combineReducers } from "redux";
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import store from './store/reducers/playlists'
import { Provider } from 'react-redux'
import tokenReducer from "./store/reducers/token";
import playlistsRecucer from "./store/reducers/playlists";
import { useFonts } from 'expo-font';
let customFonts = {
  'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
  'Inter-Black': require('./assets/fonts/Inter-Black.ttf')
};
export default function App() {
  const [isLoaded] = useFonts(customFonts);
  const rootReducer = combineReducers({
    token: tokenReducer,
    playlists: playlistsRecucer,
  });
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const store = createStore(rootReducer);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
