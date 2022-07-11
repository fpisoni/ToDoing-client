import React from "react";
import { env } from 'process';
import axios from "axios";
import { TaskModel } from "../models/task.model";

const TaskService = () => {

    const baseUrl = `${env.BACKEND_BASE_URL}`;

    const createTask = (title: string) => {
        axios.post( `${baseUrl + '/tasks'}`, title).then(task => {
            console.log(task);
        }).catch(err => {
            console.log(err);
        })
    }

    const getTasks = () => {
        const res = axios.get(`${baseUrl + '/tasks'}`).then(tasks => {
            return tasks
        }).catch(err =>{
            console.log(err);
        })

        return res;
    }

    const editTask = (id: number) => {
        axios.put(`${baseUrl + '/task' + id}`).then(task => {
            console.log(task);
        }).catch(err => {
            console.log(err);
        })
    }

    return { createTask, getTasks, editTask }

}

export default TaskService;