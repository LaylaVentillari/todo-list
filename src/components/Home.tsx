import styles from './Home.module.css';
import plus from '../assets/plus.svg';

export function Home(){
  return(
    <div className={styles.home}>
        <input type="text"
         placeholder="Adicione uma nova tarefa" 
         />
        <button type="submit">
          Criar
          <img src={plus}/>
          
        </button>
    </div>
  );
}