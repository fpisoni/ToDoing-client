import React, { useState } from 'react';
import { TaskModel } from '../../models/task.model';
import Tag from '../tag/tag';
import { TagModel } from '../../models/tag.model';
import './task.css'

import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card'
import { CardActions, CardContent, Collapse, IconButtonProps, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

interface Props {
    data: TaskModel,
    onDelete: (id: string) => void,
    setEdit: (data: TaskModel) => void,
    onSelect: (tag: TagModel) => void,
    onDeselect: (tag: TagModel) => void,
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


const Task = ( {data, onDelete, setEdit, onSelect, onDeselect}: Props ) => {


    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }
    
    const deleteTask = () => onDelete(data.id);
    const editTask = () => setEdit(data);

    return(
        <Card className='task__container'>
            <CardContent>
                <div className='title-dot__container'>
                    <span className='dot'></span>
                    <Typography variant='h5' component='div'>
                        {data.title}
                    </Typography>
                    <Typography variant='caption' className='date'>
                        {data.dueDate?.toLocaleDateString()}
                    </Typography>
                    <CheckIcon className='check' color='disabled'></CheckIcon>
                </div>
                <Typography className='task__note' color='text.secondary' gutterBottom>
                    {data.note}
                </Typography>
            </CardContent>
            <CardActions className='task__footer' disableSpacing>
                <div className='expand__container'>
                    <ExpandMore
                        sx={{display: data.tags ? '' : 'none'}}
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label='Show filters'>
                        <ExpandMoreIcon />
                    </ExpandMore>
                </div>
                <div className='actions__container'>
                    <Tooltip title='View'>
                        <Link to={'task/' + data.id}>
                            <IconButton className='button--edit'>
                                <RemoveRedEyeIcon />
                            </IconButton>
                        </Link>
                    </Tooltip>
                    <Tooltip title='Edit'>
                        <IconButton className='button--edit' data-testid='edit-button' onClick={editTask}>
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Delete'>
                        <IconButton className='button--delete' data-testid='delete_button' onClick={deleteTask}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </CardActions>
            <Collapse  in={expanded} timeout='auto' unmountOnExit>
                <div className='tags__container'>
                    {data.tags?.map(tag => <Tag key={tag.id} data={tag} onSelect={onSelect} onDeselect={onDeselect} />)}
                </div>
            </Collapse>
        </Card>
    )
}

export default Task;