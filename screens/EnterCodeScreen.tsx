import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import EnterCode from '../components/EnterCode';

export default function CodeScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
    <EnterCode />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});