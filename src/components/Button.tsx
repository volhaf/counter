import React from "react";

type ButtonPropsType = {
    onClick: ()=> void
    title: string
    disabled?: boolean
    style?: any

}


export function Button ({onClick, title, disabled, style}:ButtonPropsType): any {
    return (
        <div>
            <button
                onClick={onClick}
                disabled = {disabled}
                style={style}
            >{title}</button>
        </div>
    )
}