import React, { useState } from "react";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import PrivateRoute from './utils/PrivateRoute.js';

function App() {
  return (
      <div className="App">
        <Route exact path='/' render={props => <Login {...props} />} />
        <PrivateRoute exact path='/BubblePage' component={BubblePage} />
      </div>
  );
}

export default App;
