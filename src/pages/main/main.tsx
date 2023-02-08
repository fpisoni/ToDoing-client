import React, { useState } from 'react';
import { v4 as generateUUID } from 'uuid';
import './main.css';
import TaskFormModal from '../../components/taskFormModal/taskFormModal';
import { TaskModel } from '../../models/task.model';
import Tasks from '../tasks/tasks';
import Container from 'react-bootstrap/Container'
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

function Main() {

  const [tasks, setTasks] = useState<TaskModel[]>([
    { title: 'Water Plants', note: "Don't overwater the cactus", id: generateUUID(),
      tags: [
        { id: 'tag1' , title:'House duties', selected: false },
        { id: 'tag3' , title:'Urgent', selected: false }
      ]
    },
    { title: 'Finish app', note:'Add dates!', id: generateUUID() },
    { title: 'Have a meal', note:'', id: generateUUID() },
    { title: 'Deal with the ants', note:'', id: generateUUID(),
      tags: [
        { id: 'tag3' , title:'Urgent', selected: false }
      ]
    },
  ]);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<TaskModel>();
  const deleteConfirmationMessage = "This will delete the task, you can't undo this. Are you sure?";

  const handleHideModal = () => {
    setShowModal(false);
    setIsEdit(undefined);
  }
  
  const handleShowModal = () => setShowModal(true);
  const setEdit = (task: TaskModel) => {
    setIsEdit(task);
    handleShowModal();
  }
  
  const creationHandler = (newTask: TaskModel) => {
    if (isEdit){
      setTasks(tasks.map(task => task.id === newTask.id ? newTask : task));
      return;
    } 
    setTasks([...tasks, newTask]);
  }

  const deleteHandler = (id: string) => {
    const tempTasks = tasks.filter(task => task.id !== id);
    if (window.confirm(deleteConfirmationMessage)){
      setTasks(tempTasks);
    }
  }

  const StyledButton = styled(IconButton)({
    marginBottom: '15px',
    marginLeft: '15px',
  })

  return (
    <div className="app">
      <header className="app__header">
        <h1>Welcome back!</h1>
      </header>
      <div className='container-hidden'>
        <TaskFormModal
          show={showModal}
          onHide={handleHideModal}
          taskData={isEdit}
          action={creationHandler}
          nextTaskId={generateUUID()}
        />
        <Container className='app__body'>
          <Tasks tasks={tasks} onDelete={deleteHandler} setEdit={setEdit} />
          <Tooltip title='Add task'>
            <StyledButton className='button-create' onClick={handleShowModal}>
              <AddCircleIcon />
            </StyledButton>
          </Tooltip>
        </Container>
      </div>
    </div>
  );
}

export default Main;
