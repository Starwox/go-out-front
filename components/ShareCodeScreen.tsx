import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Linking, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RNCamera } from 'react-native-camera'

export default function ShareCodeScreen() {
 const [barcodes, setBarcodes] = useState([]);
 const cameraRef = useRef(null); 

 const barcoderecognized =({ barcodes }) => {
    barcodes?.forEach(barcode => console.log(barcode.data));

    setBarcodes({ barcodes });
  }

  const renderBarcode = ({ data }) =>
    Alert.alert(
      'Scanned Data',
      data,
      [
        {
          text: 'Okay',
          onPress: () => console.log('Okay Pressed'),
          style: 'cancel'
        }
      ],
      { cancelable: false }
    );

return (
<View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.scanner}
        onGoogleVisionBarcodesDetected={barcoderecognized}>
        {renderBarcode}>
        </RNCamera>
      </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },

  scanner: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})