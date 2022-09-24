import { v4 as uuidv4 } from 'uuid';
import { NewTaskForm } from './NewTaskForm';
import { TaskList } from './TaskList';


interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

let tasks: ITask[]=[
  {
  id: uuidv4(),
  title: 'Terminar o desafio',
  isCompleted: false
},
{
  id: uuidv4(),
  title: 'Estudar Typescript',
  isCompleted: false
}

];


export function Card (title: string){

  const newTask ={
    id: uuidv4(),
    title,
    isCompleted: false,
  };
  tasks = [newTask, ...tasks]
}

function handleDeleleTask(taskId: string){
tasks = tasks.filter(task => task.id !==taskId)
}

function taskComplete(taskId: string){
  tasks = tasks.map(task =>{
    if(task.id === taskId){
      task.isCompleted =!task.isCompleted
    }
    return task
  }) 
  

}
 


