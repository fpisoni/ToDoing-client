// import React from "react";
// import { env } from 'process';
// import axios from "axios";
// import { TaskModel } from "../../models/task.model";

const TaskService = () => {

    // const baseUrl = `${env.BACKEND_BASE_URL}`;

    // const createTask = (title: string) => {
    //     axios.post( `${baseUrl + '/tasks'}`, title).then(task => {
    //         console.log(task);
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }

    // const getTasks: TaskModel[] = () => {
    //     return axios.get<TaskModel[]>(`${baseUrl + '/tasks'}`)
    //     .then(res => res.data)
    //     .catch(err => console.log(err));            
    // }

    // const editTask = (id: number) => {
    //     axios.put(`${baseUrl + '/task' + id}`).then(task => {
    //         console.log(task);
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }

    // return { createTask, getTasks, editTask }

}

export default TaskService;