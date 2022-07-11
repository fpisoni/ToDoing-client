import React from "react";
import TaskForm from "../../components/taskForm";
 

interface Props {
    creationHandler: (title:any) => void,
}

const TaskCreate = ({creationHandler}:Props) => {

    return (
        <div>
            <TaskForm onAction={creationHandler}/>
        </div>
    )
}

export default TaskCreate;