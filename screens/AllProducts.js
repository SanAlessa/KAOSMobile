import React from 'react'
import {View, Image, ImageBackground,Text, TextInput, Button, Alert, ScrollView} from 'react-native';


const AllProducts = () => {
    return (
        <View style={styles.contenedor}>
            <ScrollView>
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

                
                <View style={styles.contenedorFirstCollection}>
                    <Image source={{uri:'https://www.47street.com.ar/media/catalog/product/cache/3fb5d7e1907479a32213f0a7d23de7e9/p/o/portadacangurocosmosbatik56425.jpg'}} style={styles.firstCollection}/>
                    <Text style={styles.productName}>Buzo horrible</Text>
                    <Text style={styles.price}>$53.00</Text>
                </View>

                
                <View style={styles.contenedorFirstCollection}>
                    <Image source={{uri:'https://www.47street.com.ar/media/catalog/product/cache/3fb5d7e1907479a32213f0a7d23de7e9/p/o/portadacangurocosmosbatik56425.jpg'}} style={styles.firstCollection}/>
                    <Text style={styles.productName}>Buzo horrible</Text>
                    <Text style={styles.price}>$53.00</Text>
                </View>

                
                <View style={styles.contenedorFirstCollection}>
                    <Image source={{uri:'https://www.47street.com.ar/media/catalog/product/cache/3fb5d7e1907479a32213f0a7d23de7e9/p/o/portadacangurocosmosbatik56425.jpg'}} style={styles.firstCollection}/>
                    <Text style={styles.productName}>Buzo horrible</Text>
                    <Text style={styles.price}>$53.00</Text>
                </View>

                
                <View style={styles.contenedorFirstCollection}>
                    <Image source={{uri:'https://www.47street.com.ar/media/catalog/product/cache/3fb5d7e1907479a32213f0a7d23de7e9/p/o/portadacangurocosmosbatik56425.jpg'}} style={styles.firstCollection}/>
                    <Text style={styles.productName}>Buzo horrible</Text>
                    <Text style={styles.price}>$53.00</Text>
                </View>
                
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
export default AllProducts