import React from "react";
import { Button } from 'react-native'
import {connect} from 'react-redux'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import CreditCard from "../screens/CreditCard";
import SingleProduct from "../screens/SingleProduct";
import ShopCart from "../screens/ShopCart";
import Checkout from "../screens/Checkout";
import PortadaHome from "../screens/PortadaHome";
import AllProducts from "../screens/AllProducts";
import TabNavigator from "./TabNavigator"
import DrawerContent from "./DrawerContent"


const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {

if(props.loggedUser){
  var routes = 
  <>
    
    <Drawer.Screen name="CreditCard" component={CreditCard} />
    <Drawer.Screen name="SingleProduct" component={SingleProduct} />
    <Drawer.Screen name="ShopCart" component={ShopCart} />
    <Drawer.Screen name="AllProducts" component={AllProducts} />
    <Drawer.Screen name="Checkout" component={Checkout} />

  </>
} else {
    var routes = 
    <>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="PortadaHome" component={PortadaHome} />

    </>
}





  return (
      <Drawer.Navigator initialRouteName="PortadaHome" drawerContent={props =><DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={TabNavigator} />
        
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
  


//   import React from "react";
// import {connect} from 'react-redux'
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Login from "../screens/Login";
// import Register from "../screens/Register";
// import Home from "../screens/Home";
// import { NavigationContainer } from "@react-navigation/native";
// import CreditCard from "../screens/CreditCard";
// import SingleProduct from "../screens/SingleProduct";
// import ShopCart from "../screens/ShopCart";
// import AllProducts from "../screens/AllProducts";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



// const Drawer = createDrawerNavigator();

// const Tab = createBottomTabNavigator();


// const DrawNavigator = ( ) => {
//   <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="CreditCard" component={CreditCard} />
//         {/* {routes} */}
       
//   </Drawer.Navigator>
// }

// const DrawerNavigator = (props) => {

// if(props.loggedUser){
//   var routes = 
//   <>
//     <Drawer.Screen name="AllProducts" component={AllProducts} />
//     <Drawer.Screen name="CreditCard" component={CreditCard} />
//     <Drawer.Screen name="SingleProduct" component={SingleProduct} />
//     <Drawer.Screen name="ShopCart" component={ShopCart} />
   
    
    
    
//   </>
// } else {
//     var routes = 
//     <>
        
//         <Drawer.Screen name="Login" component={Login} />
//         <Drawer.Screen name="Register" component={Register} />
//     </>
// }





//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Login" children={DrawNavigator} />
//         <Tab.Screen name="ShopCart" component={ShopCart} />
        
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const mapStateToProps = state => {
//     return {
//         loggedUser: state.userR.loggedUser
//     }
//   } 
  
//   const mapDispatchToProps = {
    
//   }
  
//   export default connect(mapStateToProps, null)(DrawerNavigator);
  