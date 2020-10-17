import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./home";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
