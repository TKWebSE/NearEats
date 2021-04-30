import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Restaurants} from './containers/Restaurants.jsx';
import {Foods} from './containers/Foods.jsx';
import { Fragment } from 'react';
import styled from "styled-components";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PrimarySearchAppBar from "./component/MaterialUIHead";
import { COLORS } from "./style_constants";

//ヘッダーの色を定義
const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.MAIN_COLOR,
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
        //レストラン一覧
        <Route 
          exact
          path="/restaurants">
          <Restaurants />
        </Route>
        //フード一覧
        <Route
          path="/foods">
          <Foods />
        </Route>
      </Switch>
    </Router>
    </Fragment>
  );
}

export default App;
