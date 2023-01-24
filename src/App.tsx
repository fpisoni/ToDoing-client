import React, { useState } from 'react';
import { v4 as generateUUID } from 'uuid';
import './App.css';
import TaskFormModal from './components/taskFormModal/taskFormModal';
import { TaskModel } from './models/task.model';
import Tasks from './pages/tasks/tasks';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';

function App() {

  const [tasks, setTasks] = useState<TaskModel[]>([
  { title: 'Water Plants', note: "Don't overwater the cactus", id: generateUUID(), tags: [
    { id: 'tag1' , title:'House duties', selected: false },
    { id: 'tag3' , title:'Urgent', selected: false }]},
    { title: 'Finish app', note:'Add dates!', id: generateUUID() },
    { title: 'Have a meal', note:'', id: generateUUID() },
    { title: 'Deal with the ants', note:'', id: generateUUID(), tags: [
      { id: 'tag3' , title:'Urgent', selected: false }
    ]},
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome back!</h1>
      </header>
      <div>
        <TaskFormModal
          show={showModal}
          onHide={handleHideModal}
          taskData={isEdit}
          action={creationHandler}
          nextTaskId={generateUUID()}
        />
        <Container className='App-body'>
          <Tasks tasks={tasks} onDelete={deleteHandler} setEdit={setEdit} />
          <Button variant="secondary" onClick={handleShowModal} style={{marginBottom:'15px', marginLeft: '15px'}}> Add Task </Button>
        </Container>
      </div>
    </div>
  );
}

export default App;
