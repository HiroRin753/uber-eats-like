import React from 'react';
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
}from "react-router-dom";

//components
import {Restaurants} from './containers/Restaurants.jsx';
import {Foods} from './containers/Foods.jsx';
import {Orders} from './containers/Orders.jsx';

function App() {
  return (
   <Router>
     <Switch>
       <Route  //店舗一覧ページ propsとは親・子コンポーネント間でのデータの「受け渡し口」のようなものです。
       exact //exactというprops（それぞれのcomponentが持つ情報のようなもの）はデフォでfalseになっておりここをtrueにする(exact={true}と明示しなくても、exactとするだけでOK)ことで、PATHの完全一致の場合にのみコンポーネントをレンダリングする。
       path = '/restaurants' > 
        <Restaurants/>
       </Route>

       <Route  //フード一覧ページ
        exact
         path = "/foods">
        <Foods/>
       </Route>

       <Route //注文ページ
        exact
         path = "/orders">
        <Orders/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
