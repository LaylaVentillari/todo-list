import styles from "./TaskCounter.module.css";

export function TaskCounter() {
  return (
    <div className={styles.counter}>
      <div className={styles.header}>
        <div className={styles.created}>
            <p>
              Tarefas criadas <span>16</span>
            </p>
      </div>
      <div className={styles.doneTasks}>
        <p>
          Concluidas<span>0 de 0</span>
        </p> 
        </div>
      </div>
    </div>
  );
  }