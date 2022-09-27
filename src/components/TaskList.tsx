import { Trash } from "phosphor-react";
import styles from "./TaskList.module.css";

interface TaskListProps {
  isCompleted?: boolean;
  title: string;
  id: string;
  handleDeleteTask:(id: string) => void;
  handleAddTask:(id: string) => void;
}

export function TaskList ({
  isCompleted = false,
  title, 
  handleDeleteTask, 
  handleAddTask, 
  id,
}: TaskListProps){
  return(
    <div className={styles.tasklist}>
          <span onClick={() => handleAddTask(id)}>
          </span>
          <Trash size={24} onClick={() => handleDeleteTask(id)}/>
    </div>
  );
}