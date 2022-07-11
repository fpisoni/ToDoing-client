import React, { useState } from 'react';

interface Props {
    onAction: (title: any) => void,
}

const TaskForm = ({onAction}: Props) => {

    const [ title, setTitle ] = useState('');

    const changeHandler = (e:any ) => {
        setTitle(e.target.value);
    }
 
    const submitHandler = (e: any) => {
        console.log(e);
        e.preventDefault();
        e.target.reset();
        onAction(title);
    }

    return(
        <form onSubmit={ submitHandler }>
            <label htmlFor='titleInput'>Title: </label>
            <input id='titleInput' type='text' onChange={ changeHandler } />
            <button type='submit'>Create Task</button>
        </form>
    )
}

export default TaskForm;