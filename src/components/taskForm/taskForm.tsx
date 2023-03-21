import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TaskModel } from '../../models/task.model';
import './taskForm.css';


interface Props {
    isEdit: boolean,
    onAction: (task: TaskModel) => void,
    taskData?: TaskModel,
    nextTaskId: string
}

const TaskForm = ({isEdit, onAction, taskData, nextTaskId}: Props) => {

    const [ title, setTitle ] = useState(taskData ? taskData.title : '' );
    const [ note, setNote ] = useState(taskData ? taskData.note : '' );
    const redirect = useNavigate();

    const titleChangeHandler = (e:any ) => {
        setTitle(e.target.value);
    }

    const noteChangeHandler = (e:any ) => {
        setNote(e.target.value);
    }

    const submitHandler = (e: any) => {
        e.preventDefault();

        const newTask: TaskModel = {
            title,
            note,
            id: taskData?.id || nextTaskId,
            tags: taskData?.tags
        }
        onAction(newTask);
        redirect('/');
    }

    return(
        <form className='form__body' onSubmit={ submitHandler }>
            <div className='form-inputs__container'>
                <div className='label'>
                    <label htmlFor='titleInput'>Title </label>
                </div>
                <div className='input__container'>
                    <input className='input' required id='titleInput' type='text' onChange={ titleChangeHandler } placeholder= 'Title' value={ title } />
                </div>
            </div>
            <div className='form-inputs__container'>
                <div className='label'>
                    <label htmlFor='noteInput'>Note</label>
                </div>
                <div className='input__container'>
                    <textarea className='input' id='noteInput' onChange={ noteChangeHandler } placeholder= 'Notes for the task' value={ note } />
                </div>
            </div>
            <div>
                <div className='form-actions__container'>
                    <span className='button-cancel'>
                        <Link to={'/'}>
                            <Button variant="outlined">Cancel</Button>
                        </Link>
                    </span>
                    <span className='button-submit'>
                        <Button data-testid='action-button' variant="outlined" type='submit'>{ isEdit ? 'Update' : 'Create' } Task</Button>
                    </span>
                </div>
            </div>
        </form>
    )
}

export default TaskForm;