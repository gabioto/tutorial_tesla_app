import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Pressable} from 'react-native';
import styles from './styles'

const StyledButton = (props) =>{
    /*const type = props.type;
    const content = props.content;
    const onPress = props.onPress; */
    //= que lo de arriba
    const {type,content,onPress} = props
    
    const backgroundColor = type === 'primary' ? '#171A20CC': '#ffffffa6'
    const textColor = type === 'primary' ? 'white': 'black'

    return(
        <View style={styles.container}>
            <Pressable
                style={[styles.button,{backgroundColor:backgroundColor}]}
                onPress={()=>onPress()}
            >
                
                <Text style={[styles.text,{color:textColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
}
export default StyledButton;

