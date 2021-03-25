import React, { useState, useEffect } from "react";
import { Switch, Route, Router } from "wouter";

import Manifest from "./components/Manifest";
import City from "./components/City";

const currentLocation = () => {
  return window.location.hash.replace(/^#/, "") || "/";
};

const navigate = (to) => (window.location.hash = to);

const useHashLocation = () => {
  const [loc, setLoc] = useState(currentLocation());
  useEffect(() => {
    const handler = () => setLoc(currentLocation());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  return [loc, navigate];
};

function App() {
  return (
    <div id="app">
      <Router hook={useHashLocation} base="/whatwebreathe">
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
