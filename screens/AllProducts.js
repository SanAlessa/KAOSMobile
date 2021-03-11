import React, {useRef, useState, useEffect} from 'react';
import {View, Image, ImageBackground,Text, TextInput, Button, Alert, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import clothesActions from '../redux/actions/clothesActions';


const AllProducts = (props) => {

  useEffect(() => {
    props.getClothes() 
    
}, [])


    return (
        <View style={styles.contenedor}>
            <ScrollView>
                <View style={styles.cajaProducto}>
                
               
                
                  {props.clothes.map((product,index)  =>{
                    return(
                      <TouchableOpacity  key={index} onPress={()=> props.navigation.navigate('SingleProduct',{product: product})}>
                      <View  style={styles.contenedorFirstCollection}>
                      
                        
                      <Image   source={{uri:`${product.stock[0].images[0]}`}} style={styles.firstCollection}/>
                        
                        
                      <Text   style={styles.productName}>{product.name.length <= 5 ? product.name : product.name.slice(0,12)+"..."}</Text>
                      <Text   style={styles.price}>$ {product.price}</Text>
                    
                  </View>
                  </TouchableOpacity>
                    )
                  })}
               
                
              
                
                </View>
            </ScrollView>
        </View>
    )
}
const styles ={
    contenedor:{
        
    },

    price:{
      marginLeft:5,
    },
  
    productName:{
      marginLeft:5,
      fontWeight:'bold',
      textTransform:'uppercase',
      fontSize:18,
    },
  
    firstCollection:{
      height:180,
      width:180,
      borderRadius:20,
      borderWidth: 1,
      marginTop: 25
    },
  
    cajaProducto:{
      flexDirection:'row',
      justifyContent:'space-around',
      flexWrap:'wrap'
    },
    
   
    cajaDesigner:{
      marginTop:20,
      flexDirection:'row',
      justifyContent:'space-between',
      marginLeft:10,
      marginRight:10
    },
   
  }
  const mapStateToProps = state => {
    return {
      clothes: state.clothesR.clothes,
      loggedUser: state.userR.loggedUser
    }
  } // INFORMACION
  
  const mapDispatchToProps = { 
    getClothes: clothesActions.getClothes
    
  } // FUNCIONES
  
  export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);