import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';

export function NewTaskForm(){
  return(
    <div>
      <form className={styles.newTask}>
        <input type="text"
         placeholder="Adicione uma nova tarefa" 
         />
        <button type="submit">
          Criar
          <PlusCircle size={20}/>
        </button>
      </form>
    </div>
  );
}