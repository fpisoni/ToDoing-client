import React, { useState } from 'react';
import Button from "react-bootstrap/Button"
import { TaskModel } from '../../models/task.model';


interface Props {
    isEdit: boolean,
    hideModal: () => void,
    onAction: (task: TaskModel) => void,
    taskData?: TaskModel,
    nextTaskId: string
}

const TaskForm = ({isEdit, onAction, hideModal, taskData, nextTaskId}: Props) => {

    const [ title, setTitle ] = useState(taskData ? taskData.title : '' );
    const [ note, setNote ] = useState(taskData ? taskData.note : '' );

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
        hideModal();
    }

    return(
        <form onSubmit={ submitHandler }>
            <div>
                <div>
                    <label htmlFor='titleInput'>Title </label>
                </div>
                <div>
                    <input required id='titleInput' type='text' onChange={ titleChangeHandler } placeholder= 'Title' value={ title } />
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor='noteInput'>Note</label>
                </div>
                <div>
                    <textarea id='noteInput' onChange={ noteChangeHandler } placeholder= 'Notes for the task' value={ note } />
                </div>
            </div>
            <div>
                <span>
                    <Button variant="light" onClick={hideModal}>Cancel</Button>
                </span>
                <span>
                    <Button data-testid='action-button' variant="secondary" type='submit'>{ isEdit ? 'Update' : 'Create' } Task</Button>
                </span>
            </div>
        </form>
    )
}

export default TaskForm;