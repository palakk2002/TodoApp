
import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { TodoItemsContext } from "./components/store/todo-items-store";
import {useState,useReducer} from "react";


const todoItemsReducer=(currTodoItems,action)=>{
  let newTodoItems=currTodoItems;
  if (action.type==='NEW_ITEM'){
      newTodoItems=[
        ...currTodoItems,
        {name:action.payload.itemName,dueDate:action.payload.itemdueDate},
            ];
            
  }else if(action.type==='DELETE_ITEM'){
   newTodoItems=currTodoItems.filter((item)=>item.name!==action.payload.itemName);
  }
       return newTodoItems;
}
function App(){


// const [todoItems,setTodoItems]=useState([]);

const defaultTodoItems=[{name:'Buy Today',duedate:'Today'}];

}
export default App;