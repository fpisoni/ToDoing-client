import React from "react";
import Task from "../../components/task";
import { TaskModel } from '../../models/task.model';

interface Props {
    tasks: TaskModel[],
    onDelete: (id: number) => void,
}

const Tasks = ({tasks, onDelete}: Props) => {
   return(
        <div>
            { tasks.map((task) => 
                task.deleted
                    ? <span></span>
                    : <Task key={task.id} data={task} onDelete={onDelete} /> )
            }
        </div>
   ) 
}

export default Tasks;