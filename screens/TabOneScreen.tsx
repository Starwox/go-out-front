import { StyleSheet, TextInput, Button } from 'react-native';
import * as React from 'react';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {useRoute} from '@react-navigation/native';
import SpotifyConnect from '../components/SpotifyConnect';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TabOneScreen() {

  const [text, onChangeText] = React.useState("Useless Text");

  function getData () {
    const value = AsyncStorage.getItem('@spotifyKey')
    value.then(function(data) {        
      try {
        fetch("https://127.0.0.1:8000/fr/api/spotify-user", {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: data
          }).then(res => {
            return res;
          }); 
      } catch(e) {
        console.log(e)
      }
        })
    }
    
    getData();
    return (
    <View style={styles.container}>
      <Text style={styles.title}>After</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
