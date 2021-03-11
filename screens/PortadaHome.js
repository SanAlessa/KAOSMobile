import React from 'react'
import {View, Image, ImageBackground,Text, TextInput, Button, Alert, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';

const fotoPortada = {uri:'https://i.imgur.com/lUFPdZ4.png'}

const PortadaHome = (props) => {
    return (
       <View>
           
           <ImageBackground style={styles.portada} source={fotoPortada}>
                <TouchableHighlight onPress={()=> props.navigation.navigate('Home')}>
                    <View  style={{alignItems:'center', backgroundColor:'#00E8FF', paddingTop:20, paddingBottom:20}}>
                        <Text style={{fontWeight:'bold', fontSize:20, textTransform:'uppercase'}}>Click para ver la ropa fachera!</Text>
                    </View>
                </TouchableHighlight>
           </ImageBackground>
           
       </View>
    )
}

const styles = {
    
    portada:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
        
    }
}

export default PortadaHome