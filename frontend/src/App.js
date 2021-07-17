import React,{ Fragment, useEffect,useReducer } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {isLoginApi} from "./apis/sessionApis";
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
import { Home } from "./containers/Home";
import {sessionApis} from "./apis/sessionApis";
import {initializeState,sessionActionTypes,sessionReducer} from "./reducer/sessionReducer";

function PrivateRoute({ component: Component}){
  const [state,dispatch] = useReducer(sessionReducer,initializeState);

  return(
  state.isLogin?
    <Component/>
  :
    <Redirect
    to={{
      pathname: "/users/signin",
    }}
/>
  )
}

function App() {
  const [state,dispatch] = useReducer(sessionReducer,initializeState);

  useEffect(() => {
    isLoginApi()
    .then((data)=>{
      dispatch({
        type:sessionActionTypes.ISLOGIN,
        payload: {
          currentUser:data.user
        },
        payload: {
          is_login:data.is_login
        },
      })
    })
    .catch((e) => console.log(e))
  },[])

  return (
    <Fragment>
    <Router>
    <ThemeProvider theme={headerTheme}>
        <PrimarySearchAppBar></PrimarySearchAppBar>
    </ThemeProvider> 
      <Switch>
      //HOME画面
        <PrivateRoute 
          exact
          path="/home"
          component={Home}>
          {/* <Home/> */}
        </PrivateRoute>
        //signIn画面
        <Route 
          exact
          path="/users/signin">
          <SignIn/>
        </Route>
        {/* <AuthenticatedGuard> */}
          //user作成画面
          <Route 
            exact
            path="/users/create">
            <UserCreate/>
          </Route>
        {/* </AuthenticatedGuard> */}
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
