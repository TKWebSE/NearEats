import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Restaurants} from './containers/Restaurants.jsx';
import {Foods} from './containers/Foods.jsx';

function App() {
  return (
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
  );
}

export default App;
