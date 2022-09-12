import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import React, { useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function NewTaskForm(){
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  
  function handleCreateNewTask(){
    if (!newTaskTitle) return;
    const newTask = {
      id: uuidv4(),
      title: 'Terminar o desafio',
      isComplete: false
   },
   {
      id: uuidv4(),
      title: 'Terminar o desafio',
      isComplete: true

 }
}

   setTasks(oldState => [...oldState, newTask])
  }

  function handleToogleTaskComplete(id: number){

  }

  function handleRemoveTask(id: number){

  }

  return(
    <section className={styles.newTasks}>
        <div className="input-group">
        <input 
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange ={(e) => setNewTaskTitle(e.target.value)}
          value = {newTaskTitle}
         />
          <button 
            type="submit"
            onClick={handleCreateNewTask}
          >
            Criar
              <PlusCircle size={20}/>
          </button>
        </div>
       
    </section>
  )
}