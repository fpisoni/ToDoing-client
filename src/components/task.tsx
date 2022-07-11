import React from "react";
import { TaskModel } from "../models/task.model";

interface Props {
    data: TaskModel,
    onDelete: (id:number) => void,
}


const Task = ( {data, onDelete}:Props ) => {
    
    const deleteTask = () => onDelete(data.id);

    return(
        <div>
            <div>
                <p>Id: {data.id}</p>
                <p>Title: {data.title}</p>
            </div>
            <button onClick={deleteTask}>Delete</button>
        </div>
    )
}


export default Task;