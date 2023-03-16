import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { TagModel } from "../../models/tag.model";
import './main.css';
import { v4 as generateUUID } from 'uuid';
import { TaskModel } from "../../models/task.model";
import { TasksContext } from "../../utils/contexts/tasksContext";
import { TagsContext } from "../../utils/contexts/tagsContext";

const Main = () => {

    const [tasks, setTasks] = useState<TaskModel[]>([
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
            <TasksContext.Provider value={{tasks, setTasks}}>
                <TagsContext.Provider value={{tags, setTags}}>
                    <Outlet /> 
                </TagsContext.Provider>
            </TasksContext.Provider>
        </div>
    )
}

export default Main;
