import React, {useRef, useState, useEffect} from 'react';
import {View, Image, ImageBackground,Text, TextInput, Button, Alert} from 'react-native';
import userAction from '../redux/actions/userAction';
import {connect} from 'react-redux'

// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';



const fondoRegister = {uri:'https://i.imgur.com/ix9SwB6.png'}


const Register = (props) => {

    

    const [newUser, setNewUser] = useState({})

    const inputLogin = (name, value) => {
        setNewUser({
            ...newUser,
            [name]: value
        })
    }

    const sendUser = async e => {
        e.preventDefault()
        
      
        if(newUser.firstname=== ''  || newUser.lastname=== '' || newUser.password=== ''|| newUser.email=== '' ) {
            
            Alert.alert('All fields are required!')

        } else {
            Alert.alert("HOLA! BIENVENIDO A KAOS.")
            const respuesta = await props.registerUser(newUser)
        }
        

    }



return(
    <View style={styles.contenedor}>
        <ImageBackground source={fondoRegister} style={styles.fondo}>
            
            <View style={styles.cajaInput}>
                <View style={styles.contenedorInputs}>
                  
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Name:"
                        placeholderTextColor="white"
                        onChangeText={(value) => inputLogin("firstname", value)}/>

                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="LastName:"
                        placeholderTextColor="white"
                        onChangeText={(value) => inputLogin("lastname", value)}
                    />

                     <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Password:"
                        placeholderTextColor="white"
                        secureTextEntry
                        onChangeText={(value) => inputLogin("password", value)}
                    />
                     
                     <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Email:"
                        placeholderTextColor="white"
                        onChangeText={(value) => inputLogin("email", value)}
                    />
              
                </View>
                
                <View style={styles.botonesSignUp}>
                    <Button
                        style={styles.pruebita}
                        title="SIGN UP"
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
        marginTop:"60%",

    },
    

    cajaInput:{
        width:'80%',
        height:'40%',
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
    registerUser: userAction.registerUser
    
  } // FUNCIONES
  
  export default connect(mapStateToProps, mapDispatchToProps)(Register);