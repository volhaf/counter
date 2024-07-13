import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
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
}
function Button ({onClick, title}:ButtonPropsType): any {
    return (
        <div>
            <button onClick={onClick}>{title}</button>
        </div>
    )
}