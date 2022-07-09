import React from 'react';
import { StyleSheet } from 'react-native';
import ChooseSongScreen from '../components/ChooseSong';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function SongsScreen({route}) {
  const idPlaylist = route.params.idPlaylist;

  return (
    <View style={styles.container}>
      <ChooseSongScreen idPlaylist={idPlaylist} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});