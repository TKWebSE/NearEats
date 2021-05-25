import React,{ Fragment } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {UserDetail} from './containers/UserDetail.jsx';
import { FoodDetail } from './containers/FoodDetail';
import { FoodEdit} from "./containers/FoodEdit";
import {FoodCreate} from "./containers/FoodCreate";
import {Foods} from './containers/Foods.jsx';
import { ThemeProvider } from '@material-ui/core/styles';
import PrimarySearchAppBar from "./component/MaterialUIHead";
import { headerTheme } from "./style_constants";

function App() {
  return (
    <Fragment>
    <ThemeProvider theme={headerTheme}>
        <PrimarySearchAppBar></PrimarySearchAppBar>
    </ThemeProvider>
    <Router>
      <Switch>
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
        //user作成画面
        <Route 
          exact
          path="restaurants">
          <Foods />
        </Route>
        //user編集画面
        <Route 
          exact
          path="restaurants">
          <Foods />
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
      </Switch>
    </Router>
    </Fragment>
  );
}

export default App;
