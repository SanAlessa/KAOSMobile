import React, {useRef, useState, useEffect} from 'react';
import {View, Image, ImageBackground,Text, TextInput, Button, Alert} from 'react-native';
import userAction from '../redux/actions/userAction';
import {connect} from 'react-redux'

// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';



const fondoLogin = {uri:'https://i.imgur.com/e4WwnUj.png'}


const Login = (props) => {

    const [newUser, setNewUser] = useState({})

    const inputLogin = (name, value) => {
        setNewUser({
            ...newUser,
            [name]: value
        })
    }

    const sendUser = async e => {
        e.preventDefault()
        
      
        if(  newUser.email=== '' || newUser.password=== '' ) {
            
            Alert.alert('All fields are required!')

        } else {
            
            const respuesta = await props.signIn(newUser)
            console.log(respuesta)
            
        }
        

    }



return(
    <View style={styles.contenedor}>
        <ImageBackground source={fondoLogin} style={styles.fondo}>
            
            <View style={styles.cajaInput}>
                <View style={styles.contenedorInputs}>
                  
                   

                    
                     
                     <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Email:"
                        placeholderTextColor="white"
                        onChangeText={(value) => inputLogin("email", value)}
                    />

                     <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Password:"
                        placeholderTextColor="white"
                        secureTextEntry
                        onChangeText={(value) => inputLogin("password", value)}
                    />
              
                </View>
                
                <View style={styles.botonesSignUp}>
                    <Button
                        style={styles.pruebita}
                        title="SIGN IN"
                        color="#3f7fe9"
                        onPress= {sendUser}/>

                
                {/* <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn}
                    disabled={this.state.isSigninInProgress} /> */}

                </View>
            </View>
                
            
        </ImageBackground>
    </View>
)
}

const styles ={

    contenedorInputs:{  
        width:'100%'
    },

    botonesSignUp:{
        width:'50%',
        marginTop:"85%",

    },
    

    cajaInput:{
        width:'80%',
        height:'35%',
        alignItems:'center'
        
    },

    textArea:{
        height: 40,
        
        paddingLeft:10,
        alignItems:'center'
      },
    
      input:{
        height:90,
        backgroundColor: '#3f7fe9',
        borderColor:'#3f7fe9',
        borderWidth: 2,
        marginBottom: 5,
        marginTop:20,
        
        
      },
    
    fondo:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },

    contenedor:{
        flex: 1,
        justifyContent:'center',
        
        
      },
}

const mapStateToProps = state => {
    return {
        loggedUser: state.userR.loggedUser
    }
  } // INFORMACION
  
  const mapDispatchToProps = { 
    signIn: userAction.loginUser
    
  } // FUNCIONES
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);