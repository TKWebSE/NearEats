import React,{ Fragment, useEffect } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {UserDetail} from './containers/UserDetail';
import {UserCreate} from "./containers/UserCreate";
import {UserEdit} from "./containers/UserEdit";

import {Foods} from './containers/Foods.jsx';
import {FoodCreate} from "./containers/FoodCreate";
import { FoodDetail } from './containers/FoodDetail';
import { FoodEdit} from "./containers/FoodEdit";

import {OrderIndex} from "./containers/OrderIndex";
import {OrderDetail} from "./containers/OrderDetail";

import { ThemeProvider } from '@material-ui/core/styles';
import PrimarySearchAppBar from "./component/MaterialUIHead";
import { headerTheme } from "./style_constants";

import {SignIn} from "./containers/SignIn";

import {sessionApis} from "./apis/sessionApis";
import {initializeState,sessionReducer} from "./reducer/sessionReducer";
import { sessionIsLogin } from "./urls";

function App() {
  // const [state,dispatch] = useReducer(sessionReducer,initializeState);

  // useEffect(() => {
  //   sessionisLogin()
  //   .then((data) => {
  //     dispatch({
  //       type:sessionIsLogin,
  //       payload: {
  //         user:data.user
  //       },
  //     })
  //   .catch((e) => console.log(e))  
  //   })
  // })

  return (
    <Fragment>
    <Router>
    <ThemeProvider theme={headerTheme}>
        <PrimarySearchAppBar></PrimarySearchAppBar>
    </ThemeProvider> 
      <Switch>
        //signIn画面
        <Route 
          exact
          path="/users/signin">
          <SignIn/>
        </Route>
        //user作成画面
        <Route 
          exact
          path="/users/create">
          <UserCreate/>
        </Route>
        //user詳細画面
        <Route 
          exact
          path="/users/:userId"
          render ={({match}) => 
            <UserDetail 
              match={match}
            />
          }
        >          
        </Route>
        //user編集画面
        <Route 
          exact
          path="/users/:userId/edit"
          render ={({match}) => 
            <UserEdit
              match={match}
            />
          }
        >          
        </Route>
        //food一覧
        <Route
          exact
          path="/foods">
          <Foods />
        </Route>
        //food作成画面
        <Route
          exact
          path="/foods/create">
          <FoodCreate />
        </Route>
        //food詳細画面
        <Route
          exact
          path="/foods/:foodId"
          render ={({match}) => 
            <FoodDetail 
              match={match}
            />
          }
        >
        </Route>
        //food編集画面
        <Route
          exact
          path="/foods/:foodId/edit"
          render={({match}) => 
          <FoodEdit
            match={match}
          />
          }
        >
        </Route>
        //order一覧画面
        <Route
          exact
          path="/orders">
          <OrderIndex  />
        </Route>
        //Order詳細画面
        <Route
          exact
          path="/orders/:orderId"
          render={({match}) => 
          <OrderDetail
            match={match}
          />
          }
        >
        </Route>
      </Switch>
    </Router>
    </Fragment>
  );
}

export default App;
