import React, {useState} from "react";
import {Button} from "./Button";
import s from './Counter.module.css'

type CounterPropsType = {

}





export function Counter ({}:CounterPropsType): any {
    let [count, setCount] = useState(0);
    let[color, setColor] = useState(false);

        const incClickHandler = () => {
            if (count <= 5) {
                return setCount(count + 1 );
                setColor(!color);
            }}

            const resetClickHandler = () => {
                setCount(0)
                setColor(!color)
            }

// const buttonColorHandler = () => {
//     setColor(!color)
// }


            return (
                <div className={s.counter}>
                    <div className={count === 5 ? s.max : s.number}>{count}</div>
                    <div className={s.button_conteiner}>
                        <Button
                            onClick={incClickHandler}
                            title={'inc'}
                            disabled={count === 5 }
                            buttonColor={color ? s.onActiveButton : s.offActiveButton}
                        />
                        <Button
                            onClick={resetClickHandler}
                            title={'reset'}
                            disabled={count === 0}
                            buttonColor={color ?  s.offActiveButton :s.onActiveButton}




                        />
                    </div>
                </div>
            )
        }