import styles from "./EmptyList.module.css";
import clipboard  from "../assets/clipboard.svg";

export function EmptyList() {
  return ( 
    <div className={styles.emptyList}>
      <div className={styles.newList}> 
        <img src={clipboard}alt="" />
        <span className={styles.textList}>
          <strong>Você ainda não tem tarefas cadastradas</strong> 
        </span>
        <span className={styles.textList}>
          Crie tarefas e organize seus itens a fazer
        </span>
      </div>
    </div>
    )
}  










