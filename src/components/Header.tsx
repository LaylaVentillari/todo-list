import styles from './Header.module.css';
import rocket from '../assets/rocket.svg';
import todo from '../assets/todo.svg'

export function Header(){
    return(
        <header className={styles.header}>
          
          <div className={styles.container}>
            <div>
              <img className={styles.rocket}src={rocket} alt="Logotipo do Ignite"/>
            </div>  
            <div>
              <img className={styles.todo}src={todo} alt="Logotipo do Ignite"/>
            </div>
              
         
        </div>
        </header>
    );
} 