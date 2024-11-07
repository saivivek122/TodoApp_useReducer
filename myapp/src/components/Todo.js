import React, { useReducer } from "react";
import AddTodoItem from "./AddTodoItem";
import TodoItems from "./TodoItems";
const initialTodos = [
  { id: 1, title: "Finish React project", status: false },
  { id: 2, title: "Read DSA chapter", status: true },
  { id: 3, title: "Workout for 30 mins", status: false },
  { id: 4, title: "Prepare dinner", status: true },
  { id: 5, title: "Plan weekend trip", status: false },
];

const todoReducerFunction = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: Date.now(), title: action.payload }];

    case "UPDATE_TASK":
        return state.map(task=>
            (task.id===action.payload ?{...task,status:!task.status}:task
        ) )

    case "DELETE_TASK":
        return state.filter(task=>task.id!==action.payload)  
        
    default:
        return state    
  }
   

};
const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducerFunction, initialTodos);
  const updateTask = (id) => {
    dispatch({type:"UPDATE_TASK",payload:id})
  };
  const deleteTask = (id) => {
    dispatch({type:"DELETE_TASK",payload:id})
  };
  const addTask = (title) => {
    dispatch({ type: "ADD_TASK", payload: title, status: false });
  };

  // const Todo = () => {
  //     const[todos,dispatch]=useReducer(todoReducerFunction,initialTodos)
  return (
    <div>
      <h1>Todo</h1>
      <AddTodoItem addTask={addTask} />

      <ul>
        {todos.map((todo) => {
          return (
            <TodoItems
              key={todo.id}
              todo={todo}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
