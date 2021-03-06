import React, {useRef, useState, useEffect} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator  from "./routes/DrawerNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userAction from './redux/actions/userAction';
import {connect} from 'react-redux'



const Navigation = (props) => {
  
  useEffect(() => {
    login()
  }, [])

  const login = async() => {
    const token = await AsyncStorage.getItem('token')
    if(token){
      props.logFromLS(token)
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
    logFromLS: userAction.logFromLS
    
  } // FUNCIONES
  
  export default connect(mapStateToProps, mapDispatchToProps)(Navigation);