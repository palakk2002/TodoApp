import {createContext} from "react";

export const TodoItemsContext=createContext({
    todoItems:[],
    addNewItem:()=>{},
    deleteItem:()=>{},
  });

  const TodoItemsContextProvider=(children)=>{
    const [newTodoItems,dispatchedTodoItems]=useReducer(todoItemsReducer);
const addNewItem=(itemName,itemDueDate)=>{
 
  const newItemAction={
    type:"NEW_ITEM",
    payload:{
      itemName,
      itemDueDate
    }
  };
dispatchedTodoItems(newItemAction);

//   setTodoItems((currValue)=>[
//     ...currValue,
//     {name:itemName,dueDate:itemDueDate},
//   ]);
};

const deleteItem=(todoItemName)=>{

const deleteItemAction={
  type:'DELETE_ITEM',
  payload:{
    itemName:todoItemName,

  },
}
    
dispatchedTodoItems(deleteItemAction);
  };
 return (
  <TodoItemsContext.Provider value={{
    todoItems,
    addNewItem,
    deleteItem,
  }}>
  <center className='todo-container'>
 <AppName></AppName>
  <AddTodo ></AddTodo>
 <WelcomeMessage ></WelcomeMessage>
 
  <TodoItems  ></TodoItems>

 
</center>
</TodoItemsContext.Provider>
 )  ;
}
  
  export default TodoItemsContextProvider;