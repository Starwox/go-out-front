import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Linking } from 'react-native';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const navigation = useNavigation<StackNavigationProp<RootTabParamList>>();

export default class LoginScreen extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>PopOut</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email... &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>&nbsp; &nbsp; &nbsp; &nbsp; LOGIN &nbsp; &nbsp; &nbsp; &nbsp;</Text>
        </TouchableOpacity> */}
        <Button style={styles.loginBt} icon="login" mode="contained" onPress={() => console.log('Pressed')}>
        <Text style={styles.loginText}>LOGIN </Text>
  </Button>
        {/* <TouchableOpacity>
          <Text style={styles.loginText} href="Register">Signup</Text>
        </TouchableOpacity> */}
        <Button style={styles.registerBtn} icon="account-plus" mode="contained" onPress={() => navigation.navigate("TabOne")}>
        <Text style={styles.loginText}>Signup</Text>
  </Button>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#003f5c',
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
    width:"80%",
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
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginBt:{
    width:"65%" ,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  registerBtn:{
    width:"65%" ,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
  },
  loginText:{
    color:"white"
  }

});