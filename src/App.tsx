import { Header } from './components/Header';
import styles from "./App.module.css";
import { TaskCounter } from "./components/TaskCounter";
import { NewTaskForm } from './components/NewTaskForm';



export function App() {
  return (
    <div> 
      <Header />
      <TaskCounter /> 
      
      <div className={styles.wrapper}>
        <NewTaskForm/>
      </div>
    </div>
  )
}