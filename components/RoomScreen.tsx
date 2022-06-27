import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Linking } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import AuthenticationHandler from '../components/utils/AuthenticationHandler';

export default function RoomScreen() {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PopOut</Text>
      <AuthenticationHandler></AuthenticationHandler>
        <Button style={styles.loginBt} mode="contained" onPress={() => console.log('Pressed')}>
          <Text style={styles.loginText}> Scanner le QR code </Text>
        </Button>
      {/* <TouchableOpacity>
        <Text style={styles.loginText} href="Register">Signup</Text>
      </TouchableOpacity> */}
      <Button style={styles.registerBtn} mode="contained" onPress={() => navigation.navigate("Code")}>
        <Text style={styles.loginText}> &nbsp; &nbsp; Entrez le code &nbsp; &nbsp;  </Text>
      </Button>


    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:25,
    color:"#8c8c8c",
    marginBottom:40
  },
  inputView:{
    width:"50%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginBt:{
    width:"65%" ,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: '#96527A',
    marginTop:1,
    marginBottom:10
    
  },
  registerBtn:{
    width:"65%" ,
    backgroundColor: '#96527A', 
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
  },
  loginText:{
    color:"white"
  }
});