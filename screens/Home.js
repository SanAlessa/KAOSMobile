import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {connect} from 'react-redux'
import {Button,View,Text,Image,ImageBackground,Dimensions,StyleSheet,TouchableOpacity,Platform, ScrollView, TouchableHighlight} from 'react-native';
import App from './Carrousel';
import clothesActions from '../redux/actions/clothesActions';
import userAction from '../redux/actions/userAction';

const sidebar={uri:"https://i.imgur.com/ofHuH36.png"}
const logo = {uri:"https://i.imgur.com/sZsA6tB.png"}
const carrito = {uri:"https://i.imgur.com/9RTli13.png"}



const Home =(props) => { 
  
  useEffect(() => {
    props.getClothes() 
    
}, [])


if(props.loggedUser){
  var text = 
  <>
  <Text style={styles.show}  onPress={()=> props.navigation.navigate('AllProducts')}>Show all</Text>
</>

} else {
  var text = 
  
  <Text style={styles.show}  onPress={()=> props.navigation.navigate('Login')}>Show all</Text>
  
  
}


return(
    <View style={styles.contenedor}>
     <ScrollView>
       <View style={{alignItems:'center', marginTop:25, flexDirection:'row', justifyContent:'space-between'}} >
        <Image source={sidebar} style={{width:'10%',height:30,  }}/>
        <Image source={logo} style={{width:'40%',height:60}}/>
        <TouchableOpacity onPress={()=> props.navigation.navigate('ShopCart')} style={{width:'10%', height:50}}>
          <Image source={carrito} style={{width:'100%',height:50}} />
        </TouchableOpacity>
        
       </View>  
       
        <App/>

          <View style={styles.contenidoGeneral}>
            <View style={styles.cajaDesigner}>
              <Text style={styles.designer}>Designer Collection</Text>
              {text}
            </View>
            
            {(props.clothes.length=== 0) ? <View><Text>Cargando...</Text></View> : <View style={styles.cajaProducto}>
              
              
              <View style={styles.contenedorFirstCollection}>
                
                <Image source={{uri:`${props.clothes[props.clothes.length-1].stock[0].images[0]}`}} style={styles.firstCollection}/ >
                <Text style={styles.productName} >{props.clothes[props.clothes.length-1].name}</Text>
                <Text style={styles.price}>$ {props.clothes[props.clothes.length-1].price}</Text>
              </View>

                <View style={styles.contenedorFirstCollection}>
                  <Image source={{uri:`${props.clothes[props.clothes.length-2].stock[0].images[0]}`}} style={styles.firstCollection}/>
                  <Text style={styles.productName}>{props.clothes[props.clothes.length-2].name}</Text>
                  <Text style={styles.price}>$ {props.clothes[props.clothes.length-2].price}</Text>
                </View>
            </View>}

            
          </View>

          {(props.clothes.length=== 0) ? <View></View> :
          <View style={styles.contenidoGeneral}>
            <View style={styles.cajaDesigner}>
              <Text style={styles.designer}>Winter Collection</Text>
              {text}
            </View>
            
            <View style={styles.cajaProducto}>
              
              <View style={styles.contenedorFirstCollection}>
                <Image source={{uri:`${props.clothes[props.clothes.length-5].stock[0].images[0]}`}} style={styles.firstCollection}/>
                <Text style={styles.productName}>{props.clothes[props.clothes.length-5].name}</Text>
                <Text style={styles.price}>$ {props.clothes[props.clothes.length-5].price}</Text>
              </View>
              
              
              <View style={styles.contenedorFirstCollection}>
                <Image source={{uri:`${props.clothes[props.clothes.length-35].stock[0].images[0]}`}} style={styles.firstCollection}/>
                <Text style={styles.productName}>{props.clothes[props.clothes.length-35].name}</Text>
                <Text style={styles.price}>$ {props.clothes[props.clothes.length-35].price}</Text>
              </View>
            
            </View>


          </View>}
        </ScrollView>
    </View>
    
  )
}


const styles ={

contenedorFirstCollection:{
  marginBottom:15,
},
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
    marginTop: 25,
    
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
 
  contenedor:{
    alignItems:'center',
    justifyContent:'center'
  }
}


const mapStateToProps = state => {
  return {
    clothes: state.clothesR.clothes,
    loggedUser: state.userR.loggedUser
  }
} // INFORMACION

const mapDispatchToProps = { 
  getClothes: clothesActions.getClothes,
  disconnectUser: userAction.disconnectUser
  
} // FUNCIONES

export default connect(mapStateToProps, mapDispatchToProps)(Home);