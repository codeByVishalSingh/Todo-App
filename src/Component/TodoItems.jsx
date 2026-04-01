import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./Todoitems.module.css"
import { TodoItemContext } from "../Store/todo-items-store";

const TodoItems =({onDeleteItem}) =>{
 const {todoItems} = useContext(TodoItemContext);
    return (
        <>
         <div className={styles.itemscontainer}>
           
         {todoItems.map(item => <TodoItem key={item.name} todoDate={item.dueDate} todoName={item.name} onDeleteItem={onDeleteItem}></TodoItem>
        )}  
        
       </div>
        </>
    )
}
export default TodoItems;