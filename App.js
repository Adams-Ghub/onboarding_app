import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import AddToCartScreen from './AddToCartScreen';
import OnlineShoppingScreen from './OnlineShoppingScreen';
// import AddToCartScreen from './AddToCartScreen';
import PaymentSuccessfulScreen from "./PaymentSuccessfulScreen";

export default class App extends Component{
  constructor(props){
    super(props)
      this.state={}
    
  }
  render(){
  return (
    <View style={styles.container}>
    {/* <AddToCartScreen /> */}
    <PaymentSuccessfulScreen />
    {/* <OnlineShoppingScreen/> */}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical:30,
    marginHorizontal:20,
  },
});
