import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './components/task';
import { TaskModel } from './models/task.model';
import TaskCreate from './pages/tasks/taskCreate';
import Tasks from './pages/tasks/tasks';
import TaskService from './utils/taskService';

function App() {

  const {getTasks,editTask,createTask} = TaskService()

  const taskArray: TaskModel[] = [];

  const [tasks, setTasks] = useState([])
  getTasks().then(tasks => setTasks(tasks))

  const creationHandler = (title: string) => setTasks([ ...tasks, {id: tasks[tasks.length-1].id+1, title:title} ]);
  const deleteHandler = (id: number) => console.log(tasks.find(task => task.id === id));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='App-body'>
        <Tasks tasks={tasks} onDelete={deleteHandler}/>
        <TaskCreate creationHandler={creationHandler} />
      </div>
    </div>
  );
}

export default App;
