import { StyleSheet, Text, View ,ImageBackground} from 'react-native';

const styles = StyleSheet.create({
    container:{
      width:'100%',
      padding:10,
    },
    button:{
     backgroundColor:'yellow',
     height: 40,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:20
    },
    text:{
      fontSize:12,
      fontWeight:'500',  //bold = 700
      textTransform:'uppercase'  
    }   
  });

  export default styles;
