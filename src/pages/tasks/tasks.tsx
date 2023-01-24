import React from "react";
import Container from "react-bootstrap/Container";
import Task from "../../components/task/task";
import { TaskModel } from '../../models/task.model';
import { TagModel } from '../../models/tag.model';

interface Props {
    tasks: TaskModel[],
    onDelete: (id: string) => void,
    setEdit: (data: TaskModel) => void,
    onSelect: (tag: TagModel) => void,
    onDeselect: (tag: TagModel) => void,
}

const Tasks = ({tasks, onDelete, setEdit, onSelect, onDeselect}: Props) => {
   return(
        <Container >
            { tasks.map((task) => 
                <Task key={task.id} data={task} onDelete={onDelete} setEdit={setEdit} onSelect={onSelect} onDeselect={onDeselect}/> )
            }
        </Container>
   ) 
}

export default Tasks;