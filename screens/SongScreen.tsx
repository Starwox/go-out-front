import { StyleSheet } from 'react-native';

import ChooseSong from '../components/ChooseSong';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function SongScreen() {
  return (
    <View style={styles.container}>
      <ChooseSong />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});