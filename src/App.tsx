import React, { useState } from 'react';
import './App.css';
import FormModal from './components/formModal/formModal';
import { TaskModel } from './models/task.model';
import Tasks from './pages/tasks/tasks';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';



function App() {

  const [tasks, setTasks] = useState<TaskModel[]>([
    { title: 'Water Plants', note: "Don't overwater the cactus", id: 1 },
    { title: 'Finish app', note:'Add dates!', id: 2 },
    { title: 'Have a meal', note:'', id: 3 },
  ]);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const deleteConfirmationMessage = "This will delete the task, you can't undo this. Are you sure?";

  const handleHideModal = () => setShowModal(false)
  const handleShowModal = () => setShowModal(true);
  const setEdit = () => {
    setIsEdit(true);
    handleShowModal();
  }
  const setCreate = () => {
    setIsEdit(false);
    handleShowModal();
  }
  
  const getNextTaskId = () => (tasks[tasks.length - 1]?.id || 0) + 1
  const creationHandler = (title: string, id: number = getNextTaskId()) => setTasks(
      [ ...tasks,
        { id, title }
      ]
    );
  const deleteHandler = (id: number) => { 
    if (window.confirm(deleteConfirmationMessage))
      setTasks(tasks.filter(task => task.id !== id))
  }
  const editHandler = (title: string, id: number) => tasks[tasks.findIndex(task => task.id === id)].title = title;


  return (
    <Container className="App">
      <header className="App-header">
        <h1>Welcome back!</h1>
      </header>
      <div className='App-body'>
        <Tasks tasks={tasks} onDelete={deleteHandler} setEdit={setEdit} />
        <div>
          <Button variant="secondary" onClick={setCreate}> Add Task </Button>
          <FormModal 
            show={showModal} 
            onHide={handleHideModal} 
            isEdit={isEdit} 
            action={isEdit ? editHandler : creationHandler} 
          />
        </div>
      </div>
    </Container>
  );
}

export default App;
