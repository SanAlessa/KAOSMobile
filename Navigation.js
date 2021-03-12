import React, {useRef, useState, useEffect} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator  from "./routes/DrawerNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userAction from './redux/actions/userAction';
import purchaseAction from './redux/actions/purchaseAction';
import {connect} from 'react-redux'



const Navigation = (props) => {
  
  const [reload , setReload]=useState(false)
  
  useEffect(() => {
    login()
    cart()
  }, [])

  const login = async() => {
    const token = await AsyncStorage.getItem('token')
    if(token){
      props.logFromLS(token)
    }
  }
  const cart = async () => {
    const carrito = await AsyncStorage.getItem('cart')
    if(carrito) {
      props.getCart(carrito)
    }
  }

    return (
        <NavigationContainer >
          
          <DrawerNavigator />
          
          
        </NavigationContainer>
    );
  }

  

  const mapStateToProps = state => {
    return {
        loggedUser: state.userR.loggedUser
    }
  } // INFORMACION
  
  const mapDispatchToProps = { 
    logFromLS: userAction.logFromLS,
    getCart: purchaseAction.getCart
    
  } // FUNCIONES
  
  export default connect(mapStateToProps, mapDispatchToProps)(Navigation);