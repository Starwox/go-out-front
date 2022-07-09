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

export default function App() {
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
