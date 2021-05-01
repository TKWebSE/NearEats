import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Restaurants} from './containers/Restaurants.jsx';
import { FoodDetail } from './containers/FoodDetail';
import {Foods} from './containers/Foods.jsx';
import { Fragment } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PrimarySearchAppBar from "./component/MaterialUIHead";
import { COLORS } from "./style_constants";


//ヘッダーの色を定義
const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.MAIN_COLOR
    },
  },
});

function App() {
  return (
    <Fragment>
    <ThemeProvider theme={outerTheme}>
        <PrimarySearchAppBar></PrimarySearchAppBar>
    </ThemeProvider>
    <Router>
      <Switch>
        //restaurant一覧画面
        <Route 
          exact
          path="restaurants">
          <Restaurants />
        </Route>
        //food一覧
        <Route
          exact
          path="/foods">
          <Foods />
        </Route>
        //food詳細画面
        <Route
          exact
          path="/foods/:id"
          render ={({match}) => 
            <FoodDetail 
              match={match}
            />
          }
        >
        </Route>
        //food作成画面
        <Route
          exact
          path="/foods/create">
          <Foods />
        </Route>
        //food編集画面
        <Route
          exact
          path="/foods/:id/edit">
          <Foods />
        </Route>
      </Switch>
    </Router>
    </Fragment>
  );
}

export default App;
