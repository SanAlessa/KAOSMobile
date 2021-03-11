import React from 'react'
import {View, Image, ImageBackground,Text, TextInput, Button, Alert, ScrollView} from 'react-native';
import { useState } from "react"
import { connect } from 'react-redux'
import purchaseAction from '../redux/actions/purchaseAction'
import ShopCard from './ShopCard'


const ShopCart = (props) => {
    
    if(props.checkout.length > 0){
        var prices = props.checkout.map(price=> price.price*price.quantity)
        var totalPrice = prices.reduce((a, b)=> a + b)
      }
    
     
      

    return (
       <View style={styles.cajaPrincipal}>
           
        <ScrollView>
            <View styles={styles.contenedor}>
        
                {(props.checkout.length=== 0) ? <View style={{alignItems:'center', backgroundColor:'white'}}><Text style={{alignItems:'center', fontSize:30,marginTop:'80%', fontWeight:'bold'}}>Agrega un articulo al carrito!</Text><View style={{marginTop:30}}><Button onPress={()=> props.navigation.navigate('AllProducts')}  title='Ir a la tienda'></Button></View></View> :
                    props.checkout.map((product,index)  =>{
                            return(
                            <ShopCard key={index} product={product}/>
                            )
                        })}

            </View>
        </ScrollView>
        
        
        <View style={styles.cajaTotal}>
            {(props.checkout.length=== 0) ? <View></View> :  
                    <View style={styles.cajaFinal}>
                        <View style={styles.total}>
                                <Text style={styles.totalPrecio}>TOTAL: ${totalPrice} </Text>
                        </View>

                        <View>
                            <Button onPress={()=> props.navigation.navigate('Checkout',{preciototal: totalPrice})} title="Finalizar compra"></Button>
                        </View>
                    </View>}
        </View>
        
       </View>
       
       
       
    )
}

const styles = {
  
    totalPrecio:{
        color:'white',
        fontSize:20,
    },

    total:{
        alignItems:'center',
        backgroundColor:'black',
        color:'white',
        paddingTop:15,
        paddingBottom:15 
    },

    cajaPrincipal:{
        backgroundColor:'white',
        justifyContent:'space-between',
        flex:1,
        
    },

}

const mapStateToProps = state => {
    return {
      checkout: state.purchaseR.checkout,
      reload: state.purchaseR.reload
    }
  }
  const mapDispatchToProps = {
    checkoutAction: purchaseAction.checkout,
    deleteClothes: purchaseAction.deleteClothes,
    incOne: purchaseAction.incOne,
    substOne: purchaseAction.substOne,
    forceReload: purchaseAction.forceReload
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(ShopCart)