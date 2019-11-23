import React from 'react';
import './App.css';
import CompoundSlider from './components/compound-slider';

function App() {
  return (
    <div className="App">
      <CompoundSlider min={0} max={7402}/>
    </div>
  );
}

export default App;
