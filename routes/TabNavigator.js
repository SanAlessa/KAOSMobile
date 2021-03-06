import * as React from 'react';
import { Text, View } from 'react-native';
import Home from "../screens/Home";
import ShopCart from "../screens/ShopCart";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () =>{
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="ShopCart" component={ShopCart}/>
      </Tab.Navigator>
    
  );
}

export default TabNavigator