import React from "react";
import {connect} from 'react-redux'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";



const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {

if(props.loggedUser){
  var routes = 
  <>
    <Drawer.Screen name="Home" component={Home} />
    
    
  </>
} else {
    var routes = 
    <>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
    </>
}





  return (
      <Drawer.Navigator>
        {routes}
      </Drawer.Navigator>
  );
}

const mapStateToProps = state => {
    return {
        loggedUser: state.userR.loggedUser
    }
  } 
  
  const mapDispatchToProps = {
    
  }
  
  export default connect(mapStateToProps, null)(DrawerNavigator);
  