import axios from 'axios';
import {foodsIndex} from '../urls/index'

export const fetchFoods = async(restaurantId) =>{
  return await axios.get(foodsIndex(restaurantId)) // foodsIndex(restaurantId)はURL文字列を返す
  .then(res=>{
    return res.data
  })
  .catch((e)=> console.error(e))
}