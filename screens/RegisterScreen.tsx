import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import LoginScreen from '../components/LoginScreen';
import RoomScreen from '../components/RoomScreen';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
// { navigation }: RootTabScreenProps<'TabOne'>
export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
      <RoomScreen />
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