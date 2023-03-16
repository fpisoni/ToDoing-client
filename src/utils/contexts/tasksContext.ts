import { createContext, Dispatch, SetStateAction } from "react";
import { v4 as generateUUID } from 'uuid';
import { TaskModel } from "../../models/task.model";

const tasks: TaskModel[] = [
  { title: 'Water Plants', note: "Don't overwater the cactus", id: generateUUID(), dueDate: new Date(),
    tags: [
      { id: 'tag1' , title:'House duties', selected: false },
      { id: 'tag3' , title:'Urgent', selected: false }
    ]
  },
  { title: 'Finish app', note:'Add dates!', id: generateUUID() },
  { title: 'Have a meal', note:'', id: generateUUID(), dueDate: new Date() },
  { title: 'Deal with the ants', note:'', id: generateUUID(),
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
