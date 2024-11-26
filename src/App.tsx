
import { useState } from 'react';
import './App.css';
import {Counter} from "./components/Counter";


function App() {
 const[value, setValue] =useState<number>(0)

 const incHandler = () => {
  setValue(value+1)
 }

  return (
    <div className="App">
      {/* <Counter/> */}
      <div className="Conteiner">
      <h1>{value}</h1>
      <button onClick={incHandler}> inc</button>
      </div>
      
    </div>
  )
}

export default App;






