import React, {useRef, useState, useEffect} from 'react';
import {View, Image, ImageBackground,Text, TextInput, Button, Alert} from 'react-native';
import userAction from '../redux/actions/userAction';
import {connect} from 'react-redux'

const Home = (props) => {

    const disconnectUser = async()=> {
        await props.disconnectUser()
        props.navigation.navigate('Login')
      }

    return(
    <View style={{marginTop:100}}>
        <Button      
            title="LOGOUT"
            color="#3f7fe9"
            onPress={()=> disconnectUser()}/>
    </View>)

}

const mapStateToProps = state => {
    return {
        loggedUser: state.userR.loggedUser
    }
  } // INFORMACION
  
  const mapDispatchToProps = { 
    disconnectUser: userAction.disconnectUser
    
  } // FUNCIONES
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);