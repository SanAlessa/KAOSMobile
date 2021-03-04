import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {connect} from 'react-redux'
import {Button,View,Text,Image,ImageBackground,Dimensions,StyleSheet,TouchableOpacity,Platform, ScrollView} from 'react-native';
import App from './Carrousel';






const Home =(props) => { 
  return(
    <View style={styles.contenedor}>
     <ScrollView>
        <App/>
          
          <View style={styles.contenidoGeneral}>
            <View style={styles.cajaDesigner}>
              <Text style={styles.designer}>Designer Collection</Text>
              <Text style={styles.show}>Show all</Text>
            </View>
            
            <View style={styles.cajaProducto}>
              
              <View style={styles.contenedorFirstCollection}>
                <Image source={{uri:'https://www.47street.com.ar/media/catalog/product/cache/3fb5d7e1907479a32213f0a7d23de7e9/c/h/chucknegro_1.jpg'}} style={styles.firstCollection}/>
                <Text style={styles.productName}>Hoodie</Text>
                <Text style={styles.price}>$84.00</Text>
              </View>
              
              
              <View style={styles.contenedorFirstCollection}>
                <Image source={{uri:'https://www.47street.com.ar/media/catalog/product/cache/3fb5d7e1907479a32213f0a7d23de7e9/p/o/portadacangurocosmosbatik56425.jpg'}} style={styles.firstCollection}/>
                <Text style={styles.productName}>Buzo horrible</Text>
                <Text style={styles.price}>$53.00</Text>
              </View>
            
            </View>
          </View>





          <View style={styles.contenidoGeneral}>
            <View style={styles.cajaDesigner}>
              <Text style={styles.designer}>Winter Collection</Text>
              <Text style={styles.show}>Show all</Text>
            </View>
            
            <View style={styles.cajaProducto}>
              
              <View style={styles.contenedorFirstCollection}>
                <Image source={{uri:'https://www.47street.com.ar/media/catalog/product/cache/3fb5d7e1907479a32213f0a7d23de7e9/o/s/osakanegraportada.jpg'}} style={styles.firstCollection}/>
                <Text style={styles.productName}>Campera</Text>
                <Text style={styles.price}>$84.00</Text>
              </View>
              
              
              <View style={styles.contenedorFirstCollection}>
                <Image source={{uri:'https://www.47street.com.ar/media/catalog/product/cache/3fb5d7e1907479a32213f0a7d23de7e9/p/a/pantalon_affair39319.jpg'}} style={styles.firstCollection}/>
                <Text style={styles.productName}>Pantalon</Text>
                <Text style={styles.price}>$53.00</Text>
              </View>
            
            </View>


          </View>
        </ScrollView>
    </View>
    
  )
}


const styles ={


  price:{
    marginLeft:5,
  },

  productName:{
    marginLeft:5,
    fontWeight:'bold',
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
    justifyContent:'space-around'
  },
  
  show:{
    marginTop:5,
    fontSize:15,
    fontWeight:'bold',
    backgroundColor:'#A9A9A9',
    paddingRight:5,
    paddingLeft:5
  }
  ,
  designer:{
    fontSize:20,
    fontWeight:'bold'
  },
  cajaDesigner:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:10,
    marginRight:10
  },
 
}


export default Home;