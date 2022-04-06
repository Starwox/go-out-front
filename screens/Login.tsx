import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from '../components/Themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationHandler from '../components/utils/AuthenticationHandler';

export default function Login({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rejoindre un salon</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <AuthenticationHandler></AuthenticationHandler>
      <Button
            onPress={() => navigation.navigate('TabOneScreen')}
            title="Register"
            color="#343434"
            accessibilityLabel="Register a User."/>
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
});
