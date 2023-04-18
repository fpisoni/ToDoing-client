import React, { useContext } from "react";
import './task-details.css';
import { Priority, TaskModel } from "../../models/task.model";
import { TasksContext } from "../../utils/contexts/tasksContext";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, Chip, IconButton, Tooltip, Typography } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const TaskDetail = () => {

    const { id } = useParams();
    const redirect = useNavigate();
    const { tasks, setTasks } = useContext(TasksContext);
    const deleteConfirmationMessage = "This will delete the task, you can't undo this. Are you sure?";

    const editHandler = () => redirect('../../edit/' + id);
    const deleteHandler = () => {
        if (window.confirm(deleteConfirmationMessage)) {
            setTasks(tasks.filter(task => task.id !== id));
            redirect('/');
        }
    }

    let data: TaskModel | undefined = 
        useContext(TasksContext).tasks.find(task => task.id === id);

    return (
        data? 
        <Card className='task__container--details'>
            <Link to={'/'}>
                <IconButton className="return__button">
                    <ArrowBackIosNewIcon />
                </IconButton>
            </Link>
            <CardHeader 
                avatar={
                    <Tooltip title={ (data?.priority === Priority.None ? 'No' : data?.priority) + ' Priority' } placement='bottom' arrow>
                        <span className={'dot__details dot--' + data.priority}></span>
                    </Tooltip>
                }
                title={data.title}
                titleTypographyProps={{variant:'h3' }}
                subheader={data.dueDate?.toLocaleDateString()}
                action={
                    <div className='actions__container-details'>
                    <Chip
                        className="chip-action"
                        label='Edit' 
                        variant="outlined"
                        onDelete={editHandler}
                        onClick={editHandler}
                        deleteIcon={<EditIcon />}
                        clickable />
                    <Chip
                        className="chip-action"
                        label='Delete' 
                        variant="outlined"
                        onDelete={ deleteHandler }
                        onClick={ deleteHandler }
                        deleteIcon={<DeleteIcon />}
                        clickable
                        color='error'/>
                    <Chip
                        className="chip-action"
                        label='Done' 
                        variant="outlined"
                        onDelete={ () => {} }
                        onClick={ () => {} }
                        deleteIcon={<DoneIcon />}
                        clickable
                        color="success" />
                </div>
                }
            />
            <CardContent>
                {data.note ?
                    <div className="note__section">
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
        : <Navigate to={'/error'} />
    )

}

export default TaskDetail;