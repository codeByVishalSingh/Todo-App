import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { TodoItemContext } from "../Store/todo-items-store";
const WelcomeMessage = ({})=>{
   const {todoItems} = useContext(TodoItemContext);
    return(
     
             todoItems.length === 0 &&   <p className={styles.welcome}>Enjoy Your Day </p>
        
    )
}
export default  WelcomeMessage;