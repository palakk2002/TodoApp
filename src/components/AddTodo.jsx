import {useRef} from "react";
import { BiMessageAdd } from "react-icons/bi";
function AddTodo(){
const {addTodoItem}=useContext(TodoItemsContext);
const [todoName,setTodoName]=useState();
const [dueDate,setDueDate]=useState();

const handleNameChange=(event)=>{
  setTodoName(event.target.value);
};
const handleDateChange=(event)=>{
setDueDate(event.target.value);
}

const handleAddButtonClicked=(event)=>{
addNewItem(todoName,dueDate);
setDueDate("");
setTodoName("");
};
  return <div className="container-text-center">
       <form className="row kg-row"
        onSubmit={handleAddButtonClicked}>
   
    <div class="col-6">
      <input type="text"
      ref={todoNameElement}
       placeholder="Enter Todo here"
       />
    </div>
       <div className="col-4">
        <input type="date"
        ref={dueDateElement}
          />
       </div>
    <div className="col-2">
<button 
  type="submit"
 className="btn btn-success kg-button">

<BiMessageAdd/></button>

    </div>
    </form>
  </div>
 
}

export default AddTodo;