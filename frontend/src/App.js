import React, { Fragment, useReducer } from "react";
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
import { GuestActivateRoute } from "./authComponent/GuestActivateRoute";
import { GuestPasswordRegistrationRoute } from "./authComponent/GuestPasswordRegistrationRoute";
import { GuestPasswordResetAuthRoute } from "./authComponent/GuestPasswordResetAuthRoute";
import { PrivatePasswordUpdateRoute } from "./authComponent/PrivatePasswordUpdateRoute";
import { REQUEST_STATE } from "./constants";
import { isLoginApi } from "./apis/sessionApis";
import { UserDetail } from './containers/UserDetail';
import { GuestCreate } from "./containers/GuestCreate";
import { UserEdit } from "./containers/UserEdit";
import { GuestActivate } from "./containers/GuestActivate";

import { Foods } from './containers/Foods.jsx';
import { MyFoods } from './containers/MyFoods.jsx';
import { FoodCreate } from "./containers/FoodCreate";
import { FoodDetail } from './containers/FoodDetail';
import { FoodEdit } from "./containers/FoodEdit";

import { OrderIndex } from "./containers/OrderIndex";
import { OrderDetail } from "./containers/OrderDetail";

import { ThemeProvider } from '@material-ui/core/styles';
import MaterialUIPrivateHeader from "./component/HeaderComponent/PrivateOnly/MaterialUIPrivateHeader";
import MaterialUIGuestHeader from "./component/HeaderComponent/GuestOnly/MaterialUIGuestHeader";
import { headerTheme } from "./style_constants";

import { SignIn } from "./containers/SignIn";
import { Home } from "./containers/Home";
import { PasswordRegistration } from "./containers/PasswordRegistration";
import { PasswordResetSendEmail } from "./containers/PasswordResetSendEmail";
import { PasswordResetAuth } from "./containers/PasswordResetAuth";
import { MyTaskIndex } from "./containers/MyTaskIndex";
import { MyTaskDetail } from "./containers/MyTaskDetail";
import { BuyPointMenu } from "./containers/BuyPointMenu";
import { Setting } from "./containers/Setting";
import { UserEditEmail } from "./containers/UserEditEmail";
import { AuthChangeEmail } from "./containers/AuthChangeEmail";
import { UserEditPassword } from "./containers/UserEditPassword";
import { AuthChangePassword } from "./containers/AuthChangePassword";
import { NotificationIndex } from "./containers/NotificationIndex";
import { NotificationDetail } from "./containers/NotificationDetail";

import { sessionApis } from "./apis/sessionApis";
import { initializeState, sessionActionTypes, sessionReducer } from "./reducer/sessionReducer";
import { initializeMessage, messageActionTypes, messageReducer } from "./reducer/messageReducer";
import { SessionDispatch, SessionState, GuestDispatch, GuestState, MessageDispatch, MessageState } from "./context/Context";
import Cookies from "js-cookie";
import { MaterialUISuccessSnackber } from "./component/MaterialUISuccessSnackber"
import { MaterialUIErrorSnackber } from "./component/MaterialUIErrorSnackber";
import { guestSessionReducer, initializeGuestState } from "././reducer/guestSessionReducer";

function App() {
  const [state, dispatch] = useReducer(sessionReducer, initializeState);
  const [messageState, messageDispatch] = useReducer(messageReducer, initializeMessage);
  const [guestState, guestDispatch] = useReducer(guestSessionReducer, initializeGuestState);
  console.warn()
  console.log(state)
  return (
    <Fragment>
      <SessionDispatch.Provider value={dispatch}>
        <SessionState.Provider value={state}>
          <GuestDispatch.Provider value={guestDispatch}>
            <GuestState.Provider value={guestState}>
              <MessageDispatch.Provider value={messageDispatch}>
                <MessageState.Provider value={messageState}>
                  <Router>
                    <ThemeProvider theme={headerTheme}>
                      {
                        // REQUEST_STATEがINITIALIZEのままになっているから出てこない
                        state.fetchSessionState === REQUEST_STATE.OK ?
                          state !== undefined && state.isLogin ?
                            <MaterialUIPrivateHeader></MaterialUIPrivateHeader>
                            :
                            <MaterialUIGuestHeader></MaterialUIGuestHeader>
                          :
                          <div></div>
                      }
                    </ThemeProvider>
                    <Switch>
                      {/* HOME画面 */}
                      <GuestOnlyRoute
                        exact
                        path="/"
                        component={Home}>
                      </GuestOnlyRoute>
                      {/* HOME画面 */}
                      <GuestOnlyRoute
                        exact
                        path="/home"
                        component={Home}>
                      </GuestOnlyRoute>
                      {/* signIn画面 */}
                      <GuestOnlyRoute
                        exact
                        path="/signin"
                        component={SignIn}>
                      </GuestOnlyRoute>
                      {/* user作成画面 */}
                      <GuestOnlyRoute
                        exact
                        path="/signup"
                        component={GuestCreate}>
                      </GuestOnlyRoute>
                      {/* user有効化画面 */}
                      <GuestActivateRoute
                        exact
                        path="/activate"
                        component={GuestActivate}>
                      </GuestActivateRoute>
                      {/* パスワード登録画面 */}
                      <GuestPasswordRegistrationRoute
                        exact
                        path="/passwordRegistration"
                        component={PasswordRegistration}>
                      </GuestPasswordRegistrationRoute>
                      {/* パスワードリセットのメール送信画面 */}
                      <GuestOnlyRoute
                        exact
                        path="/passwordResetSendEmail"
                        component={PasswordResetSendEmail}>
                      </GuestOnlyRoute>
                      {/* パスワードリセット画面 */}
                      <GuestPasswordResetAuthRoute
                        exact
                        path="/PasswordResetAuth"
                        component={PasswordResetAuth}>
                      </GuestPasswordResetAuthRoute>
                      {/* user詳細画面 */}
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
                      {/* user編集画面 */}
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
                      {/* foods一覧 */}
                      <PrivateOnlyRoute
                        exact
                        path="/foods"
                        component={Foods}
                      >
                      </PrivateOnlyRoute>
                      {/* Myfoods一覧 */}
                      <PrivateOnlyRoute
                        exact
                        path="/myfoods"
                        component={MyFoods}
                      >
                      </PrivateOnlyRoute>
                      {/* food作成画面 */}
                      <PrivateOnlyRoute
                        exact
                        path="/foods/create"
                        component={FoodCreate}
                      >
                      </PrivateOnlyRoute>
                      {/* food詳細画面 */}
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
                      {/* food編集画面 */}
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
                      {/* NyTask一覧画面 */}
                      <PrivateOnlyRoute
                        exact
                        path="/taskIndex"
                        component={MyTaskIndex}>
                      </PrivateOnlyRoute>
                      {/* MyTask詳細画面 */}
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
                      {/* Order一覧画面 */}
                      <PrivateOnlyRoute
                        exact
                        path="/orders"
                        component={OrderIndex}>
                      </PrivateOnlyRoute>
                      {/* Order詳細画面 */}
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
                      {/* ポイント購入画面 */}
                      <PrivateOnlyRoute
                        exact
                        path="/point"
                        component={BuyPointMenu}>
                      </PrivateOnlyRoute>
                      {/* Setting画面 */}
                      <PrivateOnlyRoute
                        exact
                        path="/setting"
                        component={Setting}>
                      </PrivateOnlyRoute>
                      {/* お知らせ一覧画面 */}
                      <PrivateOnlyRoute
                        exact
                        path="/notificationIndex"
                        component={NotificationIndex}>
                      </PrivateOnlyRoute>
                      {/* お知らせ詳細画面 */}
                      <PrivateOnlyRoute
                        exact
                        path="/notification/:notificationId"
                        render={({ match }) =>
                          <NotificationDetail
                            match={match}
                          />
                        }
                      >
                      </PrivateOnlyRoute>
                      {/* メールアドレス変更画面 */}
                      <PrivateOnlyRoute
                        exact
                        path="/editEmail"
                        component={UserEditEmail}>
                      </PrivateOnlyRoute>
                      {/* メールアドレス変更完了画面 */}
                      <PrivateOnlyRoute
                        exact
                        path="/updateEmail"
                        component={AuthChangeEmail}>
                      </PrivateOnlyRoute>
                      {/* パスワード変更画面 */}
                      <PrivateOnlyRoute
                        exact
                        path="/editPassword"
                        component={UserEditPassword}>
                      </PrivateOnlyRoute>
                      <PrivatePasswordUpdateRoute
                        exact
                        path="/updatePassword"
                        component={AuthChangePassword}>
                      </PrivatePasswordUpdateRoute>
                      {/* 該当ページなし */}
                      <GuestOnlyRoute
                        exact
                        path="*"
                        component={Home}>
                      </GuestOnlyRoute>
                      {/* 該当ページなし */}
                      <PrivateOnlyRoute
                        exact
                        path="*"
                        component={Foods}>
                      </PrivateOnlyRoute>
                    </Switch>
                  </Router>
                  <MaterialUISuccessSnackber message={messageState.message} dispatch={messageDispatch} />
                  <MaterialUIErrorSnackber message={messageState.errorMessage} dispatch={messageDispatch} />
                </MessageState.Provider>
              </MessageDispatch.Provider>
            </GuestState.Provider>
          </GuestDispatch.Provider>
        </SessionState.Provider>
      </SessionDispatch.Provider>
    </Fragment>
  );
}

export default App;
