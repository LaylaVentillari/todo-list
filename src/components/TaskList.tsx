import { Trash } from "phosphor-react";
import styles from "./TaskList.module.css";

export function TaskList () {
  return(
    <div className={styles.tasklist}>
    <div className={styles.list}>
          <input type="checkbox" id="checkList"/>
            <label htmlFor="checkList">
              <span> Read a book</span>
              <button title="excluir tarefa">
                  <Trash size={18} className={styles.trashIcon}/>
              </button>
            </label> 
       </div>

       <div className={styles.list}>
          <input type="checkbox" id="checkList"/>
            <label htmlFor="checkList">
              <span>Codingfor12hoursbbbbbbbfffffffffffffffffffffffffffffffffffffff</span>
              <button title="excluir tarefa">
                    <Trash size={18} className={styles.trashIcon}/>
                </button>
            </label> 
       </div>
    </div>
  )
}