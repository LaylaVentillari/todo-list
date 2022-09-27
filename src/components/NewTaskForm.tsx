import styles from "./NewTask.module.css"
import { PlusCircle } from 'phosphor-react';
import { TaskList } from "./TaskList";
import {v4 as uuidv4} from "uuid";
import { ChangeEvent, FormEvent, InvalidEvent, InputHTMLAttributes, useEffect, useState } from "react";
import { TaskCounter} from "./TaskCounter";
import { EmptyList } from "./EmptyList";

interface NewTaskProps {
  isCompleted: boolean;
  title: string;
  id: string;
}

export function NewTaskForm(){
  const [tasks, setTasks] = useState<NewTaskProps[]>([]);
  const [newTask, setNewTask] =useState("");
  
  function handleChangeNewTask(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }
  useEffect(() => {
    const values = localStorage.getItem("@tasks");
    if (values){
      setTasks(JSON.parse(values));
    }
  }, []);

function handleAddNewTask(event: FormEvent) {
  event.preventDefault();

  const newTaskList = {
    title: 'Estudar',
    id: uuidv4(),
    isCompleted: false,
  };

  const newValue =[...tasks, newTaskList];
  setTasks(newValue);
  setNewTask("");
  localStorage.setItem("@tasks", JSON.stringify(newValue));
}

 function handleRemoveTask(id: string) {
  const lastTasks = [...tasks];
  const filterTasks = lastTasks.filter((task) => task.id !== id);
  setTasks(filterTasks);
  localStorage.setItem("@tasks", JSON.stringify(filterTasks));
 }

 function handleCompleteTask(id: string){
  const newTasks = tasks.map((task) => 
  task.id === id ? { ...task, isCompleted: !task.isCompleted } : task);
  setTasks(newTasks);
  localStorage.setItem("@tasks", JSON.stringify(newTasks)); 
}

 function handleInvalidTask(event: InvalidEvent<HTMLInputElement>){
  event.target.setCustomValidity("Este campo é obrigatório");
 }

 const completeTask = tasks.filter((task) => task.isCompleted === true);

  return(
    <div>
      <form className={styles.newTasks} onSubmit={handleAddNewTask}>
          <input 
          type="text"
          placeholder="Adicione uma tarefa"
          onChange={handleChangeNewTask}
          value={newTask}
          onInvalid={handleInvalidTask}
          required
          />
          <button 
          type="submit" 
          title="Criar Tarefa"
          >
          Criar<PlusCircle size={20}/>
        </button>
      </form>
      <div>
        <TaskCounter/>
      </div>
      
      {tasks.length === 0 && (
        <div>
          <EmptyList/>
        </div>
      )}
      {tasks.map(({ id, title, isCompleted }) => (
        <TaskList
          key={id}
          title={title}
          isCompleted={isCompleted}
          id={id}
          handleDeleteTask={handleRemoveTask}
          handleAddTask={handleCompleteTask}
        />
      ))}
    </div>
  );
  }