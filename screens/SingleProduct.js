import React from 'react'
import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import purchaseAction from "../redux/actions/purchaseAction"
import clothesActions from '../redux/actions/clothesActions'
import {Button,View,Text,Image,ImageBackground,Dimensions,StyleSheet,TouchableOpacity,Platform, ScrollView, Alert} from 'react-native';
import CarrouselSingleProduct from './CarrouselSingleProduct'
import { v4 as uuidv4 } from 'uuid';

const SingleProduct = (props) => {
var imagenes = props.route.params.product.stock[0].images
var ruta = props.route.params.product

const url = props.route.params.product._id
const oneProduct = props.clothes.filter(product => product._id === url)
const [product, setProduct] = useState({})

useEffect(() => {
  setProduct({ id: '', name: oneProduct[0].name, image: oneProduct[0].stock[0].images[0], 
  price: oneProduct[0].price, description: '', color: oneProduct[0].stock[0].color, size: '', quantity: 1 })
  
}, [oneProduct[0]])

const Click = (value) => {
  
  setProduct({ ...product, color: value })
}

const shop = () => {
    
}
const addToCart = () => {
  props.checkout(product)
  props.forceReload(!props.reload)
  props.navigation.navigate('ShopCart')
}   

    return (
    
       <View style={styles.caja}>
       
           <CarrouselSingleProduct imagenes={imagenes}/>
           
            <View style={styles.cajaInformacion}>

                    <Text  style={styles.producto}>{ruta.name}</Text>
                    <Text style={styles.precio}>$ {ruta.price}</Text>
                    <Text style={{marginLeft:10, marginTop:10}}>{ruta.description}</Text>
                    <View style={styles.opciones}>
                        <Text style={styles.opcion}>Colors</Text>
                        <Text style={styles.opcion}>Size</Text>
                    </View>
                    
                    <View style={{ flexDirection: 'row', }}>
                        
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            {ruta.stock.map((color, index) => {
                                return(
                                    <TouchableOpacity  key={index} onPress={()=> Click(color.color)}>
                                        <View style={{backgroundColor:`${color.color}`, height:30, width:30, marginRight:5, marginLeft:5, borderColor:'black', borderWidth:2}}></View>
                                    </TouchableOpacity>
                                )
                            })}    
                        </View>

                        <View style={{flexDirection: 'row', marginRight:5}}>
                            {ruta.stock[0].size.map((size, i) => {
                                    return(
                                        <TouchableOpacity key={i}  onPress={()=> setProduct({ ...product, id:uuidv4(), size: size.size })}>
                                        <View  style={{flexWrap:'wrap', justifyContent:'center', flexDirection: 'row', height:30,width:38, marginRight:10,backgroundColor:'white', borderColor:'black', borderWidth:2,paddingLeft:5,paddingRight:5 }}>
                                        <Text  style={{fontWeight:'bold', fontSize:12 }}>{size.size}</Text>
                                        </View>

                                        </TouchableOpacity>
                                        
                                    )
                                })}
                        
                        </View>
                    </View>
                    
            </View>
                <View style = {{justifyContent:'flex-end'}}>
                    <Button title='Agregar al carrito' onPress={()=> addToCart()}></Button>
                </View>
                

     
       </View>
   
    )
}


const styles = {
    caja:{
        backgroundColor:'white',
        flex:1,
        justifyContent:'space-between'
    },

    opcion:{
        fontSize:18,
        fontWeight:'bold',
        
    },


    opciones:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:15,
        marginRight:15,
        marginTop:15,
    },


    precio:{
        fontSize:25,
        marginTop:10,
        marginLeft:10,
        color:"#3f7fe9",
        fontWeight:'bold'
    },
    producto:{
        fontSize:25,
        marginLeft:10,
        fontWeight:'bold',
        
    },
    cajaInformacion:{
        backgroundColor:'white',
        borderRadius:40,
        borderWidth: 1,
        borderColor:'white'
    }
}
const mapStateToProps = state => {
    return {
      cart: state.purchaseR.checkout,
      clothes: state.clothesR.clothes,
      reload: state.purchaseR.reload,
      lastClothes: state.clothesR.lastClothes
    }
  }
  
  const mapDispatchToProps = {
    checkout: purchaseAction.checkout,
    forceReload: purchaseAction.forceReload,
    getClothes: clothesActions.getClothes
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)