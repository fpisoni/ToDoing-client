import React from "react";
import { TaskModel } from "../../models/task.model";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'
import Tag from "../tag/tag";
import { TagModel } from "../../models/tag.model";

interface Props {
    data: TaskModel,
    onDelete: (id: string) => void,
    setEdit: (data: TaskModel) => void,
    onSelect: (tag: TagModel) => void,
    onDeselect: (tag: TagModel) => void,
}


const Task = ( {data, onDelete, setEdit, onSelect, onDeselect}: Props ) => {
    
    const deleteTask = () => onDelete(data.id);
    const editTask = () => setEdit(data);

    return(
        <Card className="mb-2">
            <Card.Body style={{ fontSize:'70%' }}>
                <Card.Title className="task-title">{data.title}</Card.Title>
                <Card.Text className="task-text" style={{ color:'#9F9F9F'}}>{data.note}</Card.Text>
                <Button data-testid='delete-button' variant="outline-dark" onClick={deleteTask} size='sm' >Delete</Button>
                <Button data-testid='edit-button' variant="outline-secondary" onClick={editTask} size='sm' style={{ marginLeft: '5px' }}>Edit</Button>
            </Card.Body>
            <Card.Footer style={{display: data.tags ? "block" : "none"}}>
                {data.tags?.map(tag => <Tag key={tag.id} data={tag} onSelect={onSelect} onDeselect={onDeselect} />)}
            </Card.Footer>
        </Card>
    )
}


export default Task;