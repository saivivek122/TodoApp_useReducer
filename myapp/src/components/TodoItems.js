import React from "react";
import "./TodoItem.css"
const TodItems = ({todo,updateTask,deleteTask}) => {
  return <li className="todo-item">
    <span>{todo.title}</span>
    <span className={`status ${todo.status ?"DONE":"NOT DONE"}`}>-{todo.status ? "DONE":"NOT DONE"}</span>
    <button className="complete-btn" onClick={()=>updateTask(todo.id)}>{todo.status ?"undo":"complete"}</button>
    <button className="delete-btn" onClick={()=>deleteTask(todo.id)}>delete</button>
  </li>
   
 
};

export default TodItems;
