import axios from 'axios'

const clothesActions = {
  addClothes: (product) =>{
    return async (dispatch) => {
      try{
        const response = await axios.post('https://kaos-challenge.herokuapp.com/api/clothes/addClothes', product)
        dispatch({type: 'ADD_CLOTHES', payload: response.data.response})
      }catch(error){
        console.log(error)
      }
    }
  },
  getClothes: ()=>{
    return async(dispatch)=>{
      try{
        const response = await axios.get('https://kaos-challenge.herokuapp.com/api/clothes/getClothes')
        dispatch({type: 'GET_CLOTHES', payload: response.data.response})
      }catch(error){
        console.log(error)
      }
    }  
  }
}

export default clothesActions