import { createContext, Dispatch, SetStateAction } from "react";
import { v4 as generateUUID } from 'uuid';
import { TaskModel, Priority } from "../../models/task.model";

const tasks: TaskModel[] = [
  { 
    title: 'Water Plants',
    note: "Don't overwater the cactus",
    id: generateUUID(),
    dueDate: new Date(),
    priority: Priority.Low,
    tags: [
      { id: 'tag1' , title:'House duties', selected: false },
      { id: 'tag3' , title:'Urgent', selected: false }
    ]
  },
  { 
    title: 'Finish app',
    note:'Add dates!',
    id: generateUUID(),
    priority: Priority.High,
  },
  { 
    title: 'Have a meal',
    note:'',
    id: generateUUID(),
    dueDate: new Date(),
    priority: Priority.Medium,
  },
  { 
    title: 'Deal with the ants',
    note:'',
    id: generateUUID(),
    priority: Priority.High,
    tags: [
      { id: 'tag3' , title:'Urgent', selected: false }
    ]
  },
];
  
interface TemplateContextProps {
  tasks: TaskModel[]
  setTasks: Dispatch<SetStateAction<TaskModel[]>>
}


export const TasksContext = createContext<TemplateContextProps>({
  tasks,
  setTasks: () => {}
});
