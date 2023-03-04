import React, {useState, useEffect} from 'react';
import { Text, View , StyleSheet, Button, linking} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function Scanner(){
  const[hasPermission, setHasPermission] = useState(null);
  const[scanned, setscanned] = useState(false);

  useEffect(() => {
    (async() => {
      const { status } = await BarCodeScanner.requestPermissionAsync();
      setHasPermission( status === 'granted');
    })();
  },[]);
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert ('Bar Code With Type ${type}' and data $ {Linking.openURL(`${data}`)} has been scanned`);
  };

  if (hasPermission===null){
    return <Text> Requesting For Camera Permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No Access to Camera </Text>>
  }
  return (
    <View style = {styles.container}>
      <BarCodeScanned
          onBarCodeScanned = {scanned ? undefined : handleBarCodeScanned} 
          style = {StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title = 'Tap to scan again' onPress={() =>setScanned(false)}/>}
    </View>
  )
}

const styles = StyleSheet.create ({
  container:1,
  flexDirection: 'column';
  justifyContent: 'center'

})