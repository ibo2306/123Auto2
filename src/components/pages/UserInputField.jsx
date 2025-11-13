import React from 'react'

export default function UserInputField({inputName, myValue, onValueChange}) {
  return (
    <div >
       <label>{inputName}</label> 
       <br></br>
      <input className='inputField' value={myValue} onChange={onValueChange} ></input>
    </div>
  )
}
