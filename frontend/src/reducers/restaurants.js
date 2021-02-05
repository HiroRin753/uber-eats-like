import {REQUEST_STATE} from '../constants';//REQUEST_STATEという定数をconstants.jsから取り込む

export const initialState = {//initialStateには以下の２つの値が入っている。initialState 引数は初回レンダー時に使われる state 値。後続のレンダー時にはその値は無視されます。 もし初期 state が高価な計算をして求める値である場合は、代わりに関数を渡すことができます。 この関数は初回のレンダー時にのみ実行されます。
  fetchState: REQUEST_STATE.INITIAL, //GET APIの状態を表すfetchState。一般的にAPIからデータを取得する時にfetch...というのでこのように命名
  restaurantsList: [],//APIから取得したレストラン一覧が入る。初期値は空配列として、[]を入れておく。
};
//export const ...としているが、これはこのオブジェクトをJavaScriptモジュールとして外部でも参照させるために付けている。もし同じファイル内でのみ参照するのであればexportは不要。
export const restaurantsActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
}

export const restaurantsReducer = (state,action) =>{
  switch (action.type){
      case restaurantsActionTypes.FETCHING:
        return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
        };
      case restaurantsActionTypes.FETCH_SUCCESS:
        return{
          fetchState: REQUEST_STATE.OK,
          restaurantsList: action.payload.restaurants,
        };
      default:
        throw new Error();
  }
}