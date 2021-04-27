import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import styles from './styles'
import StyledButton from "../styledButton";

const CartItem = (props) =>{

    const {name,tagline,taglineCTA,image} = props.car;
    return(
        <View style={styles.cardContainer}>
            <ImageBackground 
            source={image}
            style={styles.image}/>
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}{' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <StyledButton 
                    type='primary' 
                    content={"Custom Order"} 
                    onPress={()=>{console.warn("custom order was pressed")}}/>
                <StyledButton 
                    type='secondary' 
                    content={"Existing inventory"} 
                    onPress={()=>{console.warn("Existing inventory was pressed")}}/>
            </View>
            
        </View>
    );
}
export default CartItem;

