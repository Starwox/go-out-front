import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Linking } from 'react-native';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AuthenticationHandler from '../components/utils/AuthenticationHandler';

import { useState } from 'react';
// const navigation = useNavigation<StackNavigationProp<RootTabParamList>>();

export default function LoginScreen () {
  const navigation = useNavigation(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>PopOut</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email... " 
            placeholderTextColor="#003f5c"
            onChangeText={text => setEmail(text)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry={true}
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setPassword(text)}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>&nbsp; &nbsp; &nbsp; &nbsp; LOGIN &nbsp; &nbsp; &nbsp; &nbsp;</Text>
        </TouchableOpacity> */}
        <Button style={styles.loginBtn} icon="login" mode="contained" onPress={() => navigation.navigate("Two")}>
        <Text style={styles.loginText}>LOGIN </Text>
  </Button>
        {/* <TouchableOpacity>
          <Text style={styles.loginText} href="Register">Signup</Text>
        </TouchableOpacity> */}
        <Button style={styles.registerBtn} icon="account-plus" mode="contained" onPress={() => navigation.navigate("Code")}>
        <Text style={styles.loginText}>Signup</Text>
  </Button>
  <AuthenticationHandler></AuthenticationHandler>


  
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
  logo:{
    fontWeight:"bold",
    fontSize:25,
    color:"#8c8c8c",
    marginBottom:40
  },
  inputView:{
    width:"50%",
    backgroundColor:"#915e7c",
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
  forgot:{
    color:"white",
    fontSize:11
  },

  loginBtn:{
    width:"35%" ,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
    backgroundColor: '#96527A'
  },
  registerBtn:{
    width:"35%" ,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: '#96527A'
  },
  loginText:{
    color:"white"
  }

});