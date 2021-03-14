import React from 'react'
import {View, Image, ImageBackground,Text, TextInput, Button, Alert, ScrollView, LogBox} from 'react-native';
import CreditCard from './CreditCard';

const Checkout = (props) => {
    
    
    return (
        <View style={{flex:1}} >
        
            <CreditCard/>
            
            <View style={{alignItems:'center',backgroundColor:'black', justifyContent:'space-between' }}>
                <Text style={{color:'white', fontSize:25, fontWeight:'bold', textTransform:'uppercase',paddingBottom:20,paddingTop:20}}>El precio a pagar es: $ {props.route.params.preciototal}</Text>
            </View>
          
        
        </View>
        
           
            
        
    )
}



export default Checkout