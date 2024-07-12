import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;


type CounterPropsType = {

}

function Counter ({}:CounterPropsType): any {
  return (
      <div>
        <h3>{}</h3>
        {'number'}
        <div>
          <button>inc</button>
          <button>reset</button>
        </div>

      </div>
  )}