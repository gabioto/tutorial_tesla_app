import React from 'react';
import { StyleSheet, Text, View ,FlatList, Dimensions} from 'react-native';
import styles from './styles'
import CartItem from "../cardItem";
import cars from './cars'


const CarsList = (props) =>{
    //console.log(cars)
    return(
        <View style={styles.container}>
           <FlatList 
                data={cars} //es el item de abajo
                renderItem={({item})=><CartItem car={item}/>}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
           />
        </View>
    );
}
export default CarsList;

