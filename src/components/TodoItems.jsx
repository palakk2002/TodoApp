import {TodoItemsContext} from "../store/todo-items-store"
import {useContext} from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

;
const TodoItems=()=>{
const {todoItems}=useContext(TodoItemsContext);

  
return (
  <div className={styles.itemContainer}>
    {todoItems.map((item)=>(
      <TodoItem
    
      todoDate={item.dueDate}
       todoName={item.name}
       >

        </TodoItem>
    ))}

  </div>
);
};

export default TodoItems;