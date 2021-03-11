import React, {useRef, useState, useEffect} from 'react';
import { connect } from 'react-redux'
import purchaseAction from '../redux/actions/purchaseAction'
import {View, Image, ImageBackground,Text, TextInput, Button, Alert, ScrollView} from 'react-native';

const ShopCard = ({product, incOne, substOne, deleteClothes, reload, forceReload}) => {
    var {id, name, price, stock, image, size, quantity} = product
    
    const [cantidad, setCantidad] = useState(quantity)
    
    useEffect(()=>{
    },[reload])
    
    const deleteProduct = e => {
        deleteClothes(product)
    }

    const subQuantity = () => {
        setCantidad((cantidad-1) < 1 ? (deleteProduct()) : (substOne(product), cantidad-1))
        forceReload(!reload)
    }

    const incQuantity = () => {
        setCantidad((cantidad+1) > 5 ? (Alert.alert('No hay más productos disponibles.'), cantidad) : (incOne(product), cantidad+1))
        forceReload(!reload)
    }


    return (
        <View>
             <View style={styles.contenedorProducto}>
                        <View style={styles.cajaProducto}>
                            <View style={styles.info}>
                                <View>
                                    <Image style={{width:100,height:100, borderRadius:20,borderWidth: 1,}} source={{uri:`${image}` }}/>
                                </View>
                                
                                <View style={styles.descripcion}>
                                    <Text style={styles.opcion}>{name}</Text>
                                    <Text style={styles.precio}>$ {price}</Text>
                                    
                                    <View style={{flexDirection:'row', marginTop:10}}>
                                        <Text onPress={subQuantity} style={{fontSize:40, marginRight:10}}>-</Text>
                                        <Text style={styles.cantidad}>Cantidad: {quantity} </Text>
                                        <Text onPress={incQuantity} style={{fontSize:25, marginTop:11,marginLeft:5}}>+</Text>
                                    </View>
                                </View>
                                
                                
                            </View>
                            
                           
                        </View>
                        <View style={{marginBottom:20}}>
                            <Text id={id} onPress={()=> deleteProduct()}  style={{alignItems:'center', backgroundColor:'#E5E5E5', paddingLeft:10,paddingRight:10, fontSize:17,}}>Eliminar producto</Text>
                        </View>
                    </View>
        </View>
    )
}
const styles = {
    
    cajaFinal:{
        justifyContent:'flex-end',
        marginTop:25
    },

    totalPrecio:{
        color:'white',
        fontSize:20,
    },


total:{
    alignItems:'center',
    backgroundColor:'black',
    color:'white'
},


cantidad:{
    marginTop:20,
    textTransform:'uppercase',
    fontWeight:'bold'
},
precio:{
    fontSize:15,
    fontWeight:'bold',
    marginTop:20
},

opcion:{
    fontSize:15,
    fontWeight:'bold',
        
    },

descripcion:{
    marginLeft:10,
    
},

info:{
    margin:17,
    flexDirection:'row'
},

contenedorProducto:{
alignItems:'center',
},

cajaProducto:{
backgroundColor:'#E5E5E5',
borderColor:'#E5E5E5',
height:150,
width:'95%',
borderRadius:20,
borderWidth: 1,

marginTop:50,
},    

cajaPrincipal:{
    backgroundColor:'#E5E5E5',
    
},

}

const mapStateToProps = state => {
    return {
      reload: state.purchaseR.reload
    }
  }
  
  const mapDispatchToProps = {
    checkout: purchaseAction.checkout,
    deleteClothes: purchaseAction.deleteClothes,
    incOne: purchaseAction.incOne,
    substOne: purchaseAction.substOne,
    forceReload: purchaseAction.forceReload
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ShopCard)