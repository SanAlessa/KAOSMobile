import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator  from "./routes/DrawerNavigator";


const Navigation = () => {
  

    return (
        <NavigationContainer >
          
          <DrawerNavigator />
          
          
        </NavigationContainer>
    );
  }

  

export default Navigation;