import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppProvider } from "./AppContext";
import { appTheme } from "./AppTheme";

const HomePage = lazy(() => import("./pages/home"));
const CallbackPage = lazy(() => import("./pages/callback"));

function App() {
  console.log(
    `%c
-----------------------------------------------
-------------Spotify Favourites!---------------
                    .
                  \\ | /
                '-.;;;.-'
               -==;;;;;==-
                .-';;;'-.
                  / | \\
                    '`,
    "font-family:monospace; color: #fd6500"
  );

  return (
    <Router basename="spotify-favourites">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <AppProvider>
            <ThemeProvider theme={appTheme}>
              <Route exact path="/(|spotify-favourites)" component={HomePage} />
              <Route exact path="/callback" component={CallbackPage} />
            </ThemeProvider>
          </AppProvider>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
