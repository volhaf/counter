import React, {useState} from 'react';

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
    let[count, setCount] = useState(0);



  return (
      <div className={'counter'}>
        <div>{count}</div>
        <div className={'button_conteiner'}>
          <Button
              onClick={()=>{}}
              title={'inc'}
              disabled={count===5}
          />
            <Button
                onClick={()=>{}}
                title={'reset'}
                disabled={count===0}/>
        </div>

      </div>
  )}




type ButtonPropsType = {
    onClick: ()=> void
    title: string
    disabled?: boolean
}
function Button ({onClick, title, disabled}:ButtonPropsType): any {
    return (
        <div>
            <button
                onClick={onClick}>
                {disabled}
                {title}
            </button>
        </div>
    )
}