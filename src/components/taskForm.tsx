import React, { useState } from 'react';
import Button from "react-bootstrap/Button"


interface Props {
    isEdit: boolean,
    hideModal: () => void,
    onAction: (title: string, id: number) => void,
    inId: number,
    inTitle?: string,
}

const TaskForm = ({isEdit, onAction, hideModal, inTitle, inId}: Props) => {

    const [ title, setTitle ] = useState('');

    const changeHandler = (e:any ) => {
        setTitle(e.target.value);
    }
 
    const submitHandler = (e: any) => {
        e.preventDefault();
        if (title.trim().length === 0 || title === inTitle) return;
        
        e.target.reset();
        onAction(title, inId);
        hideModal();
    }

    return(
        <form onSubmit={ submitHandler }>
            <label htmlFor='titleInput'>Title: </label>
            <input id='titleInput' type='text' onChange={ changeHandler } />
            <input id='noteInput' type='text' onChange={ changeHandler } />
            <div>
                <span>
                    <Button variant="danger" onClick={hideModal}>Cancel</Button>
                </span>
                <span>
                    <Button variant="primary" type='submit'>{ isEdit ? 'Update' : 'Create' } Task</Button>
                </span>
            </div>
        </form>
    )
}

export default TaskForm;