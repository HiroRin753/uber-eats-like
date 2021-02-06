import React, {Fragment,useEffect} from 'react';

//apis
import{fetchFoods} from '../apis/foods';


export const Foods =({//まずFoodsコンポーネントがmatchというオブジェクトを受け取ります。そして、このmatchオブジェクトからmatch.params.restaurantsIdとすることで、React Routerでマッチした:restaurantsIdを取得することができます。
  match
  })=> {
  useEffect(()=>{
    fetchFoods(1)
    .then((data)=>
     console.log(data)
    )
  },[])

  return (
    <Fragment>
      フード一覧
    </Fragment>
  )
}