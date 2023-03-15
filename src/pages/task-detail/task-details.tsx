import { Card, CardContent, Chip, Typography } from "@mui/material";
import React from "react";
import { TaskModel } from "../../models/task.model";
import CheckIcon from '@mui/icons-material/Check';
import './task-details.css';

interface Props {
    data?: TaskModel;
}

const TaskDetail = (props: Props) => {

    const data: TaskModel = {
        id: '34',
        title: 'test',
        dueDate: new Date(),
        note: 'asdasdasd',
        tags: [
            { id: 'tag1' , title:'House duties', selected: false },
            { id: 'tag3' , title:'Urgent', selected: false }
          ],
    }

    return (
        <Card className='task__container--details'>
            <CardContent>
                <div className='title-dot__container'>
                    <span className='dot'></span>
                    <Typography variant='h3' component='div'>
                        {data.title}
                    </Typography>
                    <CheckIcon className='check' color='disabled'></CheckIcon>
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
    )

}

export default TaskDetail;