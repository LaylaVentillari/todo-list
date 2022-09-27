import styles from "./TaskCounter.module.css";

interface TaskCounterProps {
  tasks:{
    id: number;
    title: string;
    isComplete: boolean;
  }[];
  completeTasks:() => void;
}


export function TaskCounter({tasks, completeTasks} : TaskCounterProps) {
  return (
    <div className={styles.counter}>
      <div className={styles.header}>
        <div className={styles.created}>
            <p>
              Tarefas criadas <span>{tasks.length}</span>
            </p>
        </div>
          <div className={styles.doneTasks}>
            <p>
              Concluidas{" "}
              <span>
                {completeTasks.length} de 
                {tasks.length}</span>
            </p> 
          </div> 
      </div>
   </div> 
  );
  }