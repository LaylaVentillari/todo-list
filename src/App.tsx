import { Header } from './components/Header';
import styles from "./App.module.css";
import { TaskList } from "./components/TaskList";
import { NewTaskForm } from "./components/NewTaskForm";
import { TaskCounter } from "./components/TaskCounter";

export function App() {
 
  return (
    <div> 
      
      <Header/>
      <NewTaskForm/>
      <TaskCounter/> 
      <TaskList/>
      
      <div className={styles.wrapper}></div>


     
    </div>
  )
}


