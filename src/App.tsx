
import { useEffect, useState } from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import { LocalStorageHandler } from './components/LocalStorageHandler';


function App() {

 
  return (
    <div className="App">
      {/* <Counter/> */}
      <LocalStorageHandler/>
 
      
    </div>
  )
}





export default App;




