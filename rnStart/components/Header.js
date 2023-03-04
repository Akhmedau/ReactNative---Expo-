import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';

export default function Header(){
  return (
    <View style={styles.main}>
     <Text style={styles.text}> To-do list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
     main: {
      paddingTop: 60,
      height: 100,
      backgroundColor:'silver'
     },
     text: {
      fontSize: 25,
      color: 'black',
      fontStyle: 'normal',
      textAlign: 'center'
     }
});
