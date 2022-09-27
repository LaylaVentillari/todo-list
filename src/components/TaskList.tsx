import { Trash } from "phosphor-react";
import styles from "./TaskList.module.css";
import checkIcon from "../assets/checkbox.svg";
import checkComplete from "../assets/check-complete.svg"


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
          {isCompleted ? (
          <img src={checkComplete} alt="" />
        ) : (
          <img src={checkIcon} />
        )}
        <p style={ isCompleted ? { textDecoration:'line-through', color: '#808080'} : {textDecoration : 'none'} }>{title}</p>
          </span>
          <Trash size={20} onClick={() => handleDeleteTask(id)}/>
    </div>
  );
}