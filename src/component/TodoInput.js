import React, { useState } from 'react'

export default function TodoInput(props) {

const [inputText,SetinputText]= useState('');



  return (
   

    <div className="input-container">
        <input type="text" className='input-box-todo' placeholder='enter your task' value={inputText}
         onChange={e=>{ SetinputText(e.target.value)}}
          />
        <button className='add-btn' 
        onClick={()=>{
            props.addList(inputText)
            SetinputText("");  //search clear
        }}>+</button>

    </div>

  )
}
