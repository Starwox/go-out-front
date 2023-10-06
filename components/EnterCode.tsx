import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { Linking } from 'react-native';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AuthenticationHandler from '../components/utils/AuthenticationHandler';
import { useState } from 'react';
// import { useFonts } from 'expo-font';
import * as Font from 'expo-font';

export default function EnterCode() {
    const fetchFonts = async () =>
    await Font.loadAsync({
      'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    });
    const navigation = useNavigation(); 
    {
      return (
        <View style={styles.container}>
          <Image source={require('../link.png')} style={styles.image}/>
              <Text style={styles.EnterCode}>Entrez le code </Text>
              <Text>{'\n'}</Text>
        <Button style={styles.code} mode="contained" icon="share-variant" labelStyle={{fontSize: 27}}>4575</Button>
      </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    EnterCode:{
        fontSize: 27,
        transform: [{ translateY: -75 }],
        fontFamily: 'Inter-Regular',
    },
    image: {
        width: 150,
        height: 150,
        // translate transform y-axis
        transform: [{translateY: -130}],

    },
    code: {

        width:"64%" ,
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        color:"red",
        backgroundColor: '#96527A',
        transform: [{translateY: -60}],
    },

  });