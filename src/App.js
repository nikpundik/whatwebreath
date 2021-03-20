import React from "react";
import { Switch, Route, Router } from "wouter";

import Manifest from "./components/Manifest";
import City from "./components/City";

function App() {
  return (
    <div id="app">
      <Router base="/whatwebreathe">
        <Switch>
          <Route path="/manifest">
            <Manifest />
          </Route>
          <Route>
            <City />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
