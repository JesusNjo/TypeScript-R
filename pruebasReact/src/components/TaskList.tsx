import { Task } from "./Task";

type Props = {
    taskList: string[];
    deleteTask : (index: number) => void;
}

export const TaskList = ({taskList,deleteTask}:Props) => {
  return (
    <div className='taskList'>
    {taskList.map((task, index) => {
        return <Task key={index} task={task} deleteTask={()=>deleteTask(index)}></Task>;
    })}
</div>
  )
}