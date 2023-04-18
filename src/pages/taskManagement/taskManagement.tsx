import React, { useContext } from "react";
import TaskForm from "../../components/taskForm/taskForm";
import { TaskModel } from "../../models/task.model";
import { v4 as generateUUID } from 'uuid';
import { Card, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { TasksContext } from "../../utils/contexts/tasksContext";

interface Props {
    action?: (task: TaskModel) => void, 
}

const TaskManagement = ({ action }: Props) => {

    const { id } = useParams();
    const { tasks, setTasks } = useContext(TasksContext);

    const taskData = tasks.find(task => task.id === id);
    const isEdit = !!taskData;

    const creationHandler = (newTask: TaskModel) => {
        if (isEdit){
            setTasks(tasks.map(task => task.id === newTask.id ? newTask : task));
            return;
        } 
        setTasks([...tasks, newTask]);
    }

    return(
        <Container className="form__container">
            <div className="form__header">
                <Typography className="form__title" variant="h3" >{taskData ? 'Edit' : 'Create'} Task</Typography>
            </div>
            <Card variant="outlined" className="form">
                <TaskForm isEdit={isEdit} onAction={creationHandler} taskData={taskData} nextTaskId={generateUUID()} />
            </Card>
        </Container>
    )
}

export default TaskManagement;