import axios from 'axios'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


const userAction = {
    registerUser: (nuevoUsuario) => {
        console.log("Soy el nuevo user")
        return async (dispatch , getState) => {
            try{
                const respuesta = await axios.post('https://kaos-challenge.herokuapp.com/api/user/signup', nuevoUsuario)
                console.log(respuesta)
                dispatch({
                        type: 'LOG_USER' ,
                        payload: respuesta.data
                })
                console.log("respuesta")
                
            }   
            catch(error){
              console.log(error)
            }  
        }
    }, 
    
    loginUser: (user) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('https://kaos-challenge.herokuapp.com/api/user/signin', user)
            console.log(respuesta)
            if(!respuesta.data.success) {
                return respuesta.data
            }
            dispatch({
            type:'LOG_USER', 
            payload: respuesta.data
            }) 
            Alert.alert("Bienvenido " + respuesta.data.response.firstname + " "+ respuesta.data.response.lastname + "!")
        }
    },
    
    logFromLS:(token)=> {
        console.log(token)
        return async (dispatch, getState) =>{
            try{
                const respuesta = await axios.post('https://kaos-challenge.herokuapp.com/api/user/ls',{token},{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                dispatch({type: 'LOG_USER', payload:{response:{...respuesta.data.response}}})
            }
            catch(error){
                if(error.response.status=== 401){
                    alert("esta intentando ingresar sin permisos")
                    AsyncStorage.clear()
                }
            }
        }
    },

    disconnectUser: () => {
        return (dispatch, getState) => {
            dispatch({type: 'DISCONNECT_USER'})
        }
    },
}
export default userAction