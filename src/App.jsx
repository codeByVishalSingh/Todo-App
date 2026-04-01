import TodoItems from "./Component/TodoItems";
import AppName from "./Component/AppName"
import AppTodo from "./Component/AddTodo"
import WelcomeMessage from "./Component/WelcomeMessage";
import { TodoItemContext } from "./Store/todo-items-store";

import "./App.css";
import { useReducer, useState } from "react";
const todoItemReducer = (currentTodoItems ,action)=>{

     let newTodoItems = currentTodoItems;
     if(action.type === "NEW_ITEM"){
          newTodoItems = [...currentTodoItems,
               { name : action.payload.itemName,
            dueDate: action.payload.itemDueDate},
          ];
        
     }  else if(action.type==="DELETE_ITEM"){
                newTodoItems= currentTodoItems.filter((item )=> item.name !== action.payload.itemName);
             
          }

     return newTodoItems;
}

function App() {

const [todoItems,dispatchTodoItems] = useReducer(todoItemReducer,[]);
const addNewItem = (itemName,itemDueDate) =>{
const newItemAction ={
     type: "NEW_ITEM",
     payload: {
          itemName,
          itemDueDate

     }
};
dispatchTodoItems(newItemAction);
      
};
const deleteItem =(todoItemName)=>{

const deleteItemAction ={
     type: "DELETE_ITEM",
     payload: {
          itemName: todoItemName,
      

     }
}
            
    dispatchTodoItems(deleteItemAction);
};

 return (
      <TodoItemContext.Provider value={{
         todoItems:todoItems,
          addNewItem: addNewItem,
          deleteItem:deleteItem,
          }}>
  <center className="toto-container">
        <AppName></AppName>
        <AppTodo></AppTodo>
         <WelcomeMessage ></WelcomeMessage>
       <TodoItems ></TodoItems>
  
  </center>
  </TodoItemContext.Provider>
 )
}

export default App
