import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LargeGrid from "./LargeGrid";
import SmallGrid from "./SmallGrid";
import MergedGrid from "./MergedGrid";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SmallGrid} />
        <Route exact path="/large" component={LargeGrid} />
        <Route exact path="/merged" component={MergedGrid} />
      </Switch>
    </Router>
  );
}

export default App;
