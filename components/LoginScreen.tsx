import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { Linking } from 'react-native';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AuthenticationHandler from '../components/utils/AuthenticationHandler';
import { useState } from 'react';
import * as Font from 'expo-font';

export default function LoginScreen () {
  const fetchFonts = async () =>
  await Font.loadAsync({
    'Inter-Black': require('../assets/fonts/Inter-Black.ttf'),
  });
  const navigation = useNavigation(); 

  {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../background.png')} resizeMode="cover" style={styles.image}>     
        {/* <Text style={styles.logo}>Go out</Text> */}

        <Image source={require('../Logo.png')} />
        <Text style={styles.intro}>{'\n'}Sortez {'\n'} Vivez,{'\n'} Partagez,</Text>
        <Text style={styles.subtext}>Le guide ultime des{'\n'} étudiants !</Text>
        <AuthenticationHandler navigation={navigation}></AuthenticationHandler>
        <Button style={styles.registerBtn} mode="contained" onPress={() => navigation.navigate("Two")}>
        <Text style={styles.loginText}>REJOINDRE UN SALON</Text>
        </Button>
        <Text style={styles.legal}>En continuant, vous assurez avoir lu et accepté nos conditions{'\n'} générales de vente. Cliquez ici pour voir nos CGV</Text>
        </ImageBackground>
    </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    // backgroundColor: '#ffffff',
    backgroundColor: 'rgba(225, 225, 225, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  intro:{
    // fontWeight: 'bold',
    fontSize: 24,
    color: '#ffffff',
    marginRight: '50%',
    marginBottom: '10%',
    justifyContent: 'center',
    fontFamily: 'Inter-Black',
    alignItems: 'center',
  },
  subtext:{
    fontWeight: 'bold',
    fontSize: 22,
    color: '#ffffff',
    marginRight: '21%',
    marginBottom: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  legal:{
    color : '#ffffff',
    fontSize: 10.5,
    marginTop: '5%',
    marginBottom: '-10%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

  },
  logo:{
    fontWeight:"bold",
    fontSize:25,
    color:"#8c8c8c",
    marginBottom:40
  },

  registerBtn:{
    width:"74%" ,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: '#ffffff',
  },
  loginText:{
    color:"black"
  }

});