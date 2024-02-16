import { useState } from "react"
import { TaskList } from "./TaskList";


export const TodoApp = () => {
    const [task,setTask] = useState<string>('');
    const [taskList,setTaskList] = useState<string[]>([]);
    const handleAddTask=()=>{
        if(task.trim() == "") return;
        setTaskList(t => [...t, task]);
        setTask('');
    }
    const handleDeleteTask = (index:number)=>{
        setTaskList(t => t.filter((_,i) => i!= index));
    }
  return (
    <>
    <h1>Lista de tareas</h1>
    <div>
        <input 
        type="text" 
        name="" 
        id=""
        value={task}
        onChange={(e)=> setTask(e.target.value)}
        placeholder="Nueva tarea" />
        <button onClick={handleAddTask}>Send task</button>
    </div>
    <TaskList taskList={taskList} deleteTask={handleDeleteTask}/>
    </>
    )
}