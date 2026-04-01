import { useState,useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { useContext } from "react";
import { TodoItemContext } from "../Store/todo-items-store";
function AppTodo(){
   const {addNewItem} = useContext(TodoItemContext);
   const todoNmaeElement = useRef();
   const dueDtaeElement = useRef();

   const handleAddButton = () =>{
    const todoName = todoNmaeElement.current.value;
    const dueDate = dueDtaeElement.current.value;
    todoNmaeElement.current.value="";
    dueDtaeElement.current.value="";
    addNewItem(todoName,dueDate);
  
 
   }
    return (
        <div className="container text-centre">
         <div className="row kg-row">
        <div className="col-6">
          <input type="text"
          ref={todoNmaeElement}
          placeholder="Enter Todo Here" />
        </div>
         <div className="col-4">
          <input type="date" 
          ref={dueDtaeElement}
            />
         </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button1"
            onClick={handleAddButton}
            > <BiMessageAdd/></button>
          </div>
      </div>
      </div>
    );
}
export default AppTodo;