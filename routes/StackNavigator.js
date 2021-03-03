import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {connect} from 'react-redux'
import Home from "../screens/Home";
import Login from "../screens/Login";



const Stack = createStackNavigator();



const StackNavigator = (props) => {


  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
     
     <Stack.Screen name="Home" component={Home}/>
     <Stack.Screen name="Home" component={Login}/>
      
    </Stack.Navigator>
  );
}


const mapStateToProps = state => {
  return {
      loggedUser: state.userR.loggedUser
  }
} // INFORMACION

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, null)(StackNavigator);


