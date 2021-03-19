import React, { useState } from "react";
import { Switch, Route } from "wouter";
import City from "./components/City";

function App() {
  const [showWebcam, setShowWebcam] = useState(true);
  return (
    <div id="app">
      <Switch>
        <Route path="/manifest">About Us</Route>
        <Route>
          <City showWebcam={showWebcam} setShowWebcam={setShowWebcam} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
