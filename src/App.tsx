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
      <div className={'counter'}>
        {'number'}
        <div className={'button_conteiner'}>
          <Button
              onClick={()=>{}}
              title={'inc'}/>
            <Button
                onClick={()=>{}}
                title={'reset'}/>
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
                disabled={disabled}
                {title}
            </button>
        </div>
    )
}