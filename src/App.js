import React from "react";
import { Switch, Route } from "wouter";

import Manifest from "./components/Manifest";
import City from "./components/City";

function App() {
  return (
    <div id="app">
      <Switch>
        <Route path="/manifest">
          <Manifest />
        </Route>
        <Route>
          <City />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
