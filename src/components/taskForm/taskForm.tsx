import { Button, MenuItem, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Priority, TaskModel } from '../../models/task.model';
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
    const [ dueDate, setDueDate ] = useState(taskData && taskData.dueDate ? dayjs(taskData.dueDate) : null)
    const [ priority, setPriority ] = useState(taskData ? taskData.priority : Priority.None);
    const redirect = useNavigate();

    const titleChangeHandler = (e: any) => {
        setTitle(e.target.value);
    }

    const noteChangeHandler = (e: any) => {
        setNote(e.target.value);
    }

    const dateChangeHandler = (e: any) => {
        setDueDate(e);
    }

    const priorityChangeHandler = (e: any) => {
        setPriority(e.target.value);
    }

    const submitHandler = (e: any) => {
        e.preventDefault();

        const newTask: TaskModel = {
            title,
            note,
            priority,
            dueDate: dueDate?.toDate(),
            id: taskData?.id || nextTaskId,
            tags: taskData?.tags
        }
        onAction(newTask);
        redirect('/');
    }

    return(
        <form className='form__body' onSubmit={ submitHandler }>
            <div className='form-inputs__container'>
                <div className='input__container'>
                    <TextField label='Title' value={ title } onChange={ titleChangeHandler } required helperText={title === '' ? 'Required' : undefined} />
                </div>
                <div className='input__container'>
                    <DatePicker label='Due Date' value={ dueDate } onChange={ dateChangeHandler }/>
                </div>
                <div className='input__container'>
                    <TextField label='Priority' className='select' onChange={ priorityChangeHandler } select value={ priority } >
                        <MenuItem value={Priority.None} >{Priority.None}</MenuItem>
                        <MenuItem value={Priority.Low} >{Priority.Low}</MenuItem>
                        <MenuItem value={Priority.Medium} >{Priority.Medium}</MenuItem>
                        <MenuItem value={Priority.High} >{Priority.High}</MenuItem>
                        <MenuItem value={Priority.Urgent} >{Priority.Urgent}</MenuItem>
                    </TextField>
                </div>
            </div>
            <div className='form-inputs__container'>
                <div className='input__container'>
                    <TextField label='Note' placeholder='Notes for the task' value={ note } onChange={ noteChangeHandler } multiline />
                </div>
            </div>
            <div>
                <div className='form-actions__container'>
                    <span className='button-cancel'>
                        <Link to={'/task/'+ taskData?.id}>
                            <Button variant="outlined" color='error'>Cancel</Button>
                        </Link>
                    </span>
                    <span className='button-submit'>
                        <Button data-testid='action-button' variant="outlined" type='submit' color='success'>{ isEdit ? 'Update' : 'Create' }</Button>
                    </span>
                </div>
            </div>
        </form>
    )
}

export default TaskForm;