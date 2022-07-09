import { StyleSheet } from 'react-native';

import ChoosePlaylists from '../components/ChoosePlaylists';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function PlaylistsScreen() {
  return (
    <View style={styles.container}>
      <ChoosePlaylists />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});