
import { useState } from 'react';
import './App.css';
import {Counter} from "./components/Counter";


function App() {
 const[value, setValue] =useState<number>(0)

 const incHandler = () => {
  setValue(value+1)
 }

 const setLocalStorageHandler =() => {
localStorage.setItem('counterKey', value.toString())
 }


 const getFromLocalStorageHandler =() => {
  let valueAsString = localStorage.getItem('counterKey')
  if (valueAsString) {
    let newValue = JSON.parse(valueAsString)
    setValue(newValue)
  }
 
   }
  


  return (
    <div className="App">
      {/* <Counter/> */}
      <div className="Conteiner">
      <h1>{value}</h1>
      <button onClick={incHandler}> inc</button>
      <button onClick={setLocalStorageHandler}> setLocalStorage</button>
      <button onClick={getFromLocalStorageHandler}> getFromLocalStorage</button>
      </div>
      
    </div>
  )
}

export default App;






