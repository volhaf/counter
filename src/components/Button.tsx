import React from "react";

type ButtonPropsType = {
    onClick: ()=> void
    title: string
    disabled?: boolean
}


export function Button ({onClick, title, disabled}:ButtonPropsType): any {
    return (
        <div>
            <button
                onClick={onClick}
                disabled = {disabled}
            >{title}</button>
        </div>
    )
}