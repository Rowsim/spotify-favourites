import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const HomePage = lazy(() => import("./pages/home"));
const CallbackPage = lazy(() => import("./pages/callback"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/(|spotify-favourites)" component={HomePage} />
          <Route exact path="/callback" component={CallbackPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
