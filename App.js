import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarsList from "./components/CarsList";
import Header from "./components/Header"

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <CarsList/>
      
      <StatusBar style="auto"></StatusBar>

    </View>
  );
}

//you can decalre funcional or class component
//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
