import AsyncStorage from "@react-native-async-storage/async-storage";
const initState = {
    checkout: []
  }
  
  const purchaseReducer = (state=initState, action) => {
    switch(action.type){
      case 'CHECKOUT': 
      AsyncStorage.setItem('cart', JSON.stringify(action.payload))
      return {
        ...state,
        checkout: action.payload
      }
      case 'RELOAD':
        return {
          ...state,
          reload: action.payload
        }
      default: 
        return state
    }
  }
  
  export default purchaseReducer