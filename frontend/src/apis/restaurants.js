import axios from 'axios';
import {restaurantsIndex} from'../urls/index'

export const fetchRestaurants = async()=>{
  return await axios.get(restaurantsIndex) //axiosはimport axios from 'axios';と、axios.get(...のように使うのが基本です。
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}