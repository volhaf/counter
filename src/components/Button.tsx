import React from "react";

type ButtonPropsType = {
    onClick: ()=> void
    title: string
    disabled: boolean
    buttonColor: any
}


export function Button ({onClick, title, disabled, buttonColor}:ButtonPropsType): any {
    return (
        <div>
            <button
                onClick={onClick}
                disabled={disabled}
                className={buttonColor}

            >{title}</button>
        </div>
    )
}