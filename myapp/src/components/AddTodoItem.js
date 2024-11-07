import React, { useState } from 'react'
import "./AddTodoItem.css"

const AddTodoItem = ({addTask}) => {
  const[title,setTitle]=useState("")
  const handleAdd=()=>{
    addTask(title)
    setTitle("")
  }
  return (
    <div className='add-todo-container'>
      <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default AddTodoItem
