import React, { Fragment, useEffect, useReducer } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { PrivateOnlyRoute } from "./authComponent/PrivateRoute";
import { GuestOnlyRoute } from "./authComponent/GuestRoute";
import { REQUEST_STATE } from "./constants";
import { isLoginApi } from "./apis/sessionApis";
import { UserDetail } from './containers/UserDetail';
import { UserCreate } from "./containers/UserCreate";
import { UserEdit } from "./containers/UserEdit";

import { Foods } from './containers/Foods.jsx';
import { MyFoods } from './containers/MyFoods.jsx';
import { FoodCreate } from "./containers/FoodCreate";
import { FoodDetail } from './containers/FoodDetail';
import { FoodEdit } from "./containers/FoodEdit";

import { OrderIndex } from "./containers/OrderIndex";
import { OrderDetail } from "./containers/OrderDetail";

import { ThemeProvider } from '@material-ui/core/styles';
import MaterialUIPrivateHeader from "./component/MaterialUIPrivateHeader";
import MaterialUIGuestHeader from "./component/MaterialUIGuestHeader";
import { headerTheme } from "./style_constants";

import { SignIn } from "./containers/SignIn";
import { Home } from "./containers/Home";
import { MyTaskIndex } from "./containers/MyTaskIndex";
import { MyTaskDetail } from "./containers/MyTaskDetail";

import { sessionApis } from "./apis/sessionApis";
import { initializeState, sessionActionTypes, sessionReducer } from "./reducer/sessionReducer";
import { SessionDispatch, SessionState } from "./context/Context";
import Cookies from "js-cookie";

function App() {
  const [state, dispatch] = useReducer(sessionReducer, initializeState);

  console.log(Cookies.get())
  return (
    <Fragment>
      <SessionDispatch.Provider value={dispatch}>
        <SessionState.Provider value={state}>
          <Router>
            <ThemeProvider theme={headerTheme}>
              {
                state.fetchSessionState === REQUEST_STATE.OK ?
                  state.isLogin ?
                    <MaterialUIPrivateHeader></MaterialUIPrivateHeader>
                    :
                    <MaterialUIGuestHeader></MaterialUIGuestHeader>
                  :
                  <div></div>
              }
            </ThemeProvider>
            <Switch>
        //HOME画面
              <GuestOnlyRoute
                exact
                path="/"
                component={Home}>
              </GuestOnlyRoute>
        //HOME画面
              <GuestOnlyRoute
                exact
                path="/home"
                component={Home}>
              </GuestOnlyRoute>
          //signIn画面
              <GuestOnlyRoute
                exact
                path="/signin"
                component={SignIn}>
              </GuestOnlyRoute>
          //user作成画面
              <GuestOnlyRoute
                exact
                path="/users/create"
                component={UserCreate}>
              </GuestOnlyRoute>
          //user詳細画面
              <PrivateOnlyRoute
                exact
                path="/users/:userId"
                render={({ match }) =>
                  <UserDetail
                    match={match}
                  />
                }
              >
              </PrivateOnlyRoute>
          //user編集画面
              <PrivateOnlyRoute
                exact
                path="/users/:userId/edit"
                render={({ match }) =>
                  <UserEdit
                    match={match}
                  />
                }
              >
              </PrivateOnlyRoute>
          //foods一覧
              <PrivateOnlyRoute
                exact
                path="/foods"
                component={Foods}
              >
              </PrivateOnlyRoute>
          //Myfoods一覧
              <PrivateOnlyRoute
                exact
                path="/myfoods"
                component={MyFoods}
              >
              </PrivateOnlyRoute>
          //food作成画面
              <PrivateOnlyRoute
                exact
                path="/foods/create"
                component={FoodCreate}
              >
              </PrivateOnlyRoute>
          //food詳細画面
              <PrivateOnlyRoute
                exact
                path="/foods/:foodId"
                render={({ match }) =>
                  <FoodDetail
                    match={match}
                  />
                }
              >
              </PrivateOnlyRoute>
          //food編集画面
              <PrivateOnlyRoute
                exact
                path="/foods/:foodId/edit"
                render={({ match }) =>
                  <FoodEdit
                    match={match}
                  />
                }
              >
              </PrivateOnlyRoute>
          //NyTask一覧画面
              <PrivateOnlyRoute
                exact
                path="/taskIndex"
                component={MyTaskIndex}>
              </PrivateOnlyRoute>
          //MyTask詳細画面
              <PrivateOnlyRoute
                exact
                path="/MyTask/:orderId"
                render={({ match }) =>
                  <MyTaskDetail
                    match={match}
                  />
                }
              >
              </PrivateOnlyRoute>
          //order一覧画面
              <PrivateOnlyRoute
                exact
                path="/orders"
                component={OrderIndex}>
              </PrivateOnlyRoute>
          //Order詳細画面
              <PrivateOnlyRoute
                exact
                path="/orders/:orderId"
                render={({ match }) =>
                  <OrderDetail
                    match={match}
                  />
                }
              >
              </PrivateOnlyRoute>
            </Switch>
          </Router>
        </SessionState.Provider>
      </SessionDispatch.Provider>
    </Fragment>
  );
}

export default App;
