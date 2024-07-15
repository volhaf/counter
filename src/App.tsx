import React, {useState} from 'react';

import './App.css';
import {Button} from "./components/Button";

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
    let [count, setCount] = useState(0);
    let [on, setOn] = useState(false);

    const incClickHandler = () => {
        if (count < 5) {
            setCount(count + 1)
            setOn(true)
        }
    }
    const resetClickHandler = () => {
        setCount(0)
        setOn(false)
    }



    return (
        <div className={'counter'}>
            <div>{count}</div>
            <div className={'button_conteiner'}>
                <Button
                    onClick={incClickHandler}
                    title={'inc'}
                    disabled={count === 5}
                />
                <Button
                    onClick={resetClickHandler}
                    title={'reset'}
                    disabled={count === 0}/>
            </div>

        </div>)


}

