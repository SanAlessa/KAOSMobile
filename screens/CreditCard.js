import CreditCardDisplay from 'react-native-credit-card-display';
import {Button,View,Text,Image,ImageBackground,Dimensions,StyleSheet,TouchableOpacity,Platform, ScrollView} from 'react-native';

import React from 'react'

const CreditCard = () => {
  return (
  <View style={styles.tarjeta}>
    
      <CreditCardDisplay
        number={4242424242424242}
        cvc={123}
        expiration="04/21"
        name="John J. Doe"
        since="2004"
      />
    
    
  </View>
    
  );
}

const styles ={
  tarjeta:{
    alignItems:'center',
    marginTop:50,
    
  },
}


export default CreditCard


