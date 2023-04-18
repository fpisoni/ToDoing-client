import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { TagModel } from "../../models/tag.model";
import './main.css';
import { v4 as generateUUID } from 'uuid';
import { Priority, TaskModel } from "../../models/task.model";
import { TasksContext } from "../../utils/contexts/tasksContext";
import { TagsContext } from "../../utils/contexts/tagsContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/en-gb'

const Main = () => {

    const [tasks, setTasks] = useState<TaskModel[]>([
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
    ]);
    
    const [tags, setTags] = useState<TagModel[]>([
        { id: 'tag1' , title:'House duties', selected: false },
        { id: 'tag2' , title:'Job', selected: false },
        { id: 'tag3' , title:'Urgent', selected: false },
    ]);

    return (
        <div className="app">
            <Typography className='app__title' variant='subtitle2' fontSize='large' fontFamily=''>
                <Link to={'/'} className='link__home'>
                    ToDoing!
                </Link>
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TasksContext.Provider value={{tasks, setTasks}}>
                    <TagsContext.Provider value={{tags, setTags}}>
                        <Outlet /> 
                    </TagsContext.Provider>
                </TasksContext.Provider>
            </LocalizationProvider>
        </div>
    )
}

export default Main;
