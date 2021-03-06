import AsyncStorage from "@react-native-async-storage/async-storage";
const initState = {
    loggedUser: null
  }
  
  const userReducer = (state = initState, action) =>{
    
      switch(action.type){
        case 'LOG_USER' :
          AsyncStorage.setItem('token', action.payload.response.token)
          return{
            ...state,
            loggedUser: action.payload
          }
        case 'DISCONNECT_USER':
          return {
              ...state,
              loggedUser: null
            }
        default :
          return state
      }
  }
  export default userReducer