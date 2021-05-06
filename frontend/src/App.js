import React,{ Fragment } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Restaurants} from './containers/Restaurants.jsx';
import { FoodDetail } from './containers/FoodDetail';
import { FoodEdit } from "./containers/FoodEdit";
import {Foods} from './containers/Foods.jsx';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PrimarySearchAppBar from "./component/MaterialUIHead";
import { COLORS } from "./style_constants";


//ヘッダーの色を定義
const headerTheme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.MAIN_COLOR
    },
  },
});

function App() {
  return (
    <Fragment>
    <ThemeProvider theme={headerTheme}>
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
        //user詳細画面
        <Route 
          exact
          path="restaurants">
          <Restaurants />
        </Route>
        //user作成画面
        <Route 
          exact
          path="restaurants">
          <Restaurants />
        </Route>
        //user編集画面
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
          path="/foods/:foodId"
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
