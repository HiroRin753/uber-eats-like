import axios from 'axios';
import {lineFoods, lineFoodsReplace} from '../urls/index'//lineFoodsは仮注文のAPIのURL文字列

export const postLineFoods = async(params) => {
  return await axios.post(lineFoods,//第一引数
  {
    food_id: params.foodId,//第二引数
    count:params.count,//第二引数
  }
)
.then(res=>{
  return res.data
})
.catch((e)=> {throw e;})//すでに別の店舗の仮注文がある場合にnot_acceptableが返ってきた際にはcatch((e) => { throw e; })に入る。
};

export const replaceLineFoods = async(params)=> {
  return await axios.put(lineFoodsReplace,
    {
      food_id: params.foodId,
      count: params.count,
    }
  )
  .then(res => {
    return res.data
  })
  .catch((e) => {throw e;})
};