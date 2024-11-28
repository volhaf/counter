import { useState } from "react"

export type LocalStorageHandlerPropsType = {

}


export function LocalStorageHandler ({} :LocalStorageHandlerPropsType) {
  const[value, setValue] =useState<number>(0)

  const incHandler = () => {
   setValue(value+1)
  }
 
  const setLocalStorageHandler =() => {
 localStorage.setItem('counterKey', value.toString())
 localStorage.setItem('counterKey +1', value.toString())
  }
 
 
  const getFromLocalStorageHandler =() => {
   let valueAsString = localStorage.getItem('counterKey')
   if (valueAsString) {
     let newValue = JSON.parse(valueAsString)
     setValue(newValue)
   }
  
    }
   
 const clearLocalStorageHandler = () => {
 localStorage.clear()
 setValue(0)
 }
 const removeLocalStorageHandler = () => {
  localStorage.removeItem('counterKey +1')
 }

  return (
<div className="Conteiner">
      <h1>{value}</h1>
      <button onClick={incHandler}> inc</button>
      <button onClick={setLocalStorageHandler}> setLocalStorage</button>
      <button onClick={getFromLocalStorageHandler}> getFromLocalStorage</button>
      <button onClick={clearLocalStorageHandler}> clearLocalStorage</button>
      <button onClick={removeLocalStorageHandler}> remoweLocalStorage</button>
      </div>
  )
}
