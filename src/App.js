import React, { useState } from 'react';

import City from './components/City';

const cities = [
  { name: 'Brescia', particles: 30 },
  { name: 'Mumbai', particles: 500 },
];

function App() {
  const [index, setIndex] = useState(0);
  const next = () => {
      setIndex(prev => prev === cities.length - 1 ? 0 : prev + 1);
  };
  const city = cities[index];
  const webcam = true;
  return (
    <div id="app">
      <City city={city} next={next} webcam={webcam} />
    </div>
  );
}

export default App;
