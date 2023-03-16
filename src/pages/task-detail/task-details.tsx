import { Card, CardContent, CardHeader, Chip, Typography } from "@mui/material";
import React, { useContext } from "react";
import { TaskModel } from "../../models/task.model";
import './task-details.css';
import { TasksContext } from "../../utils/contexts/tasksContext";
import { Navigate, redirect, useParams } from "react-router-dom";

const TaskDetail = () => {

    const { id } = useParams()

    let data: TaskModel | undefined = 
        useContext(TasksContext).tasks.find(task => task.id === id);

    return (
        data? 
        <Card className='task__container--details'>
            <CardHeader>

            </CardHeader>
            <CardContent>
                <div className='title-dot__container'>
                    <span className='dot'></span>
                    <Typography variant='h3' component='div'>
                        {data.title}
                    </Typography>
                </div>
                <Typography variant='caption' className='date--details'>
                    {data.dueDate?.toLocaleDateString()}
                </Typography>
                {data.note ?
                    <div className="note__section">
                        <hr className="break"/>
                        <Typography variant="subtitle2">Comments:</Typography>
                        <Typography className='task__note' color='text.secondary' gutterBottom>
                            {data.note}
                        </Typography>
                    </div>
                :   ''}
                <div className="tags__section">
                    <hr className="break"/>
                    { 
                    data.tags?
                        <div>
                            <Typography variant="subtitle2">Tags:</Typography>
                            {data.tags.map(tag => <Chip className="tag--details" key={tag.id} label={tag.title} variant='outlined'/>)}
                        </div>
                        : <Typography>
                            This task currently has no Tags.
                        </Typography> 
                    }
                </div>
            </CardContent>
        </Card>
        : <Navigate to={'/'} />
    )

}

export default TaskDetail;