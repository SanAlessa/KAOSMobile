import React from 'react'
import {View, Image, ImageBackground,Text, TextInput, Button, Alert, ScrollView} from 'react-native';

const ShopCart = () => {
    return (
       <View style={styles.cajaPrincipal}>
           <ScrollView>
           <View styles={styles.contenedor}>
            
            <View style={styles.contenedorProducto}>
                <View style={styles.cajaProducto}>
                    <View style={styles.info}>
                        <View>
                            <Image style={{width:100,height:100, borderRadius:20,borderWidth: 1,}} source={{uri:'https://www.47street.com.ar/media/catalog/product/cache/3fb5d7e1907479a32213f0a7d23de7e9/r/e/remera_disney_doc_m98561portada.jpg' }}/>
                        </View>
                        <View style={styles.descripcion}>
                            <Text style={styles.opcion}>REMERA DE BLANCA NIEVES</Text>
                            <Text style={styles.precio}>$1500</Text>
                            <Text style={styles.cantidad}>Cantidad: 15</Text>
                        </View>
                    </View>
                    
                </View>
            </View>
            

        </View>



        <View styles={styles.contenedor}>
            
            <View style={styles.contenedorProducto}>
                <View style={styles.cajaProducto}>
                    <View style={styles.info}>
                        <View>
                            <Image style={{width:100,height:100, borderRadius:20,borderWidth: 1,}} source={{uri:'https://www.47street.com.ar/media/catalog/product/cache/3fb5d7e1907479a32213f0a7d23de7e9/r/e/remera_disney_doc_m98561portada.jpg' }}/>
                        </View>
                        <View style={styles.descripcion}>
                            <Text style={styles.opcion}>REMERA DE BLANCA NIEVES</Text>
                            <Text style={styles.precio}>$1500</Text>
                            <Text style={styles.cantidad}>Cantidad: 15</Text>
                        </View>
                    </View>
                    
                </View>
            </View>
            

        </View>

        <View styles={styles.contenedor}>
            
            <View style={styles.contenedorProducto}>
                <View style={styles.cajaProducto}>
                    <View style={styles.info}>
                        <View>
                            <Image style={{width:100,height:100, borderRadius:20,borderWidth: 1,}} source={{uri:'https://www.47street.com.ar/media/catalog/product/cache/3fb5d7e1907479a32213f0a7d23de7e9/r/e/remera_disney_doc_m98561portada.jpg' }}/>
                        </View>
                            <View style={styles.descripcion}>
                                <Text style={styles.opcion}>REMERA DE BLANCA NIEVES</Text>
                                <Text style={styles.precio}>$1500</Text>
                                <Text style={styles.cantidad}>Cantidad: 15</Text>
                            </View>
                        </View>
                    </View>
                </View>
        </View>
        

        <View styles={styles.contenedor}>
            
            <View style={styles.contenedorProducto}>
                <View style={styles.cajaProducto}>
                    <View style={styles.info}>
                        <View>
                            <Image style={{width:100,height:100, borderRadius:20,borderWidth: 1,}} source={{uri:'https://www.47street.com.ar/media/catalog/product/cache/3fb5d7e1907479a32213f0a7d23de7e9/r/e/remera_disney_doc_m98561portada.jpg' }}/>
                        </View>
                            <View style={styles.descripcion}>
                                <Text style={styles.opcion}>REMERA DE BLANCA NIEVES</Text>
                                <Text style={styles.precio}>$1500</Text>
                                <Text style={styles.cantidad}>Cantidad: 15</Text>
                            </View>
                        </View>
                    </View>
                </View>
        </View>

        <View styles={styles.contenedor}>
            
            <View style={styles.contenedorProducto}>
                <View style={styles.cajaProducto}>
                    <View style={styles.info}>
                        <View>
                            <Image style={{width:100,height:100, borderRadius:20,borderWidth: 1,}} source={{uri:'https://www.47street.com.ar/media/catalog/product/cache/3fb5d7e1907479a32213f0a7d23de7e9/r/e/remera_disney_doc_m98561portada.jpg' }}/>
                        </View>
                            <View style={styles.descripcion}>
                                <Text style={styles.opcion}>REMERA DE BLANCA NIEVES</Text>
                                <Text style={styles.precio}>$1500</Text>
                                <Text style={styles.cantidad}>Cantidad: 15</Text>
                            </View>
                        </View>
                    </View>
                </View>
        </View>
        
        
        
        
        
        
        
        <View style={styles.cajaFinal}>
            <View style={styles.total}>
                <View>
                    <Text style={styles.totalPrecio}>TOTAL: $10.000</Text>
                </View>
            </View>

            <View>
                <Button title="Finalizar compra"></Button>
            </View>
        </View>

        
        </ScrollView>
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
    marginTop:20
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
backgroundColor:'white',
borderColor:'white',
height:150,
width:'95%',
borderRadius:20,
borderWidth: 1,

marginTop:50
},    

cajaPrincipal:{
    backgroundColor:'#E5E5E5'
},

}

export default ShopCart