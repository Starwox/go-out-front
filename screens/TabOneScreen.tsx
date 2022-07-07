import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import LoginScreen from '../components/LoginScreen';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
// { navigation }: RootTabScreenProps<'TabOne'>
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});