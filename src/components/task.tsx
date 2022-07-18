import React from "react";
import { TaskModel } from "../models/task.model";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'

interface Props {
    data: TaskModel,
    onDelete: (id: number) => void,
    setEdit: () => void,
}


const Task = ( {data, onDelete, setEdit}: Props ) => {
    
    const deleteTask = () => onDelete(data.id);

    return(
        <Card>
            <Card.Header>{data.title}</Card.Header>
            <Card.Body>
                <Card.Text>{data.note}</Card.Text>
                <Button variant="danger" onClick={deleteTask}>Delete</Button>
                <Button variant="warning" onClick={setEdit}>Edit</Button>
            </Card.Body>
        </Card>
    )
}


export default Task;