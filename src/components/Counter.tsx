import React, {useState} from "react";
import {Button} from "./Button";

type CounterPropsType = {

}

export function Counter ({}:CounterPropsType): any {
    let [count, setCount] = useState(0);

        const incClickHandler = () => {
            if (count < 5) setCount(count + 1)
            }
        const resetClickHandler = () => {
            setCount(0)
        }

        return (
            <div className={'counter'}>
                <div className={'number'}>{count}</div>
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
            </div>
        )
    }