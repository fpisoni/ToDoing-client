import React from "react";
import Container from "react-bootstrap/Container";
import Task from "../../components/task";
import { TaskModel } from '../../models/task.model';

interface Props {
    tasks: TaskModel[],
    onDelete: (id: number) => void,
    setEdit: () => void,
}

const Tasks = ({tasks, onDelete, setEdit}: Props) => {
   return(
        <Container>
            { tasks.map((task) => 
                <Task key={task.id} data={task} onDelete={onDelete} setEdit={setEdit}/> )
            }
        </Container>
   ) 
}

export default Tasks;