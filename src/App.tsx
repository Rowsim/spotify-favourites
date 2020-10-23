import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppProvider } from "./AppContext";

const HomePage = lazy(() => import("./pages/home"));
const CallbackPage = lazy(() => import("./pages/callback"));

function App() {
  return (
    <Router basename="spotify-favourites">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <AppProvider>
            <Route exact path="/(|spotify-favourites)" component={HomePage} />
            <Route exact path="/callback" component={CallbackPage} />
          </AppProvider>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
