import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function ListItem({ el, deleteHandler}){
  return (
   <TouchableOpacity onPress={() => deleteHandler(el.key)}> 
     <Text style={styles.text}>{el.text}</Text>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    text: {
        padding: 15,
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: '#FFF5EE',
        borderWidth: 1,
        marginTop: 45,
        width: '45%',
        marginLeft: '20%'
    }
});
