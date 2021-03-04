import React from 'react'
import {Button,View,Text,Image,ImageBackground,Dimensions,StyleSheet,TouchableOpacity,Platform, ScrollView} from 'react-native';
import CarrouselSingleProduct from './CarrouselSingleProduct'

const SingleProduct = () => {
    return (
       <View>
           <CarrouselSingleProduct/>
           <View style={styles.cajaInformacion}>
                <Text style={styles.producto}>REMERA DE BLANCA NIEVES</Text>
                <Text style={styles.precio}>$1.500</Text>
                <View style={styles.barra}></View>
                <View style={styles.opciones}>
                    <Text style={styles.opcion}>Colors</Text>
                    <Text style={styles.opcion}>Size</Text>
                </View>
                <View>
                   
                    
                    
                </View>
           </View>
       </View>
    )
}


const styles = {

    

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


    barra:{
        width:"95%",
        height:0.2,
        backgroundColor:'black',
        marginLeft:10,
        marginTop:20
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
        marginTop:10,
        marginLeft:10,
        fontWeight:'bold',
        
    },
    cajaInformacion:{
        backgroundColor:'white',
        height:'100%',
        borderRadius:40,
        borderWidth: 1,
        borderColor:'white'
    }
}
export default SingleProduct