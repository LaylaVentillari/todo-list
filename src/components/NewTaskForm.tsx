import styles from "./NewTask.module.css"
import { PlusCircle } from 'phosphor-react';


export function NewTaskForm(){
  return(
    <div>
      
      <form className={styles.newTasks}>
          <input type="text"
          name="comment"
          placeholder="Adicione uma tarefa"
          />
          <button 
          type="submit" 
          title="Criar Tarefa"
          >
          Criar
          <PlusCircle size={20}/>
        </button>
      </form>
    </div>
    )
  }