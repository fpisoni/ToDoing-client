import React from "react";
import { render, screen } from '@testing-library/react';
import Tasks from './tasks';
import { Priority, TaskModel } from "../../models/task.model";
import { TagModel } from "../../models/tag.model";

const expectedTasks: TaskModel[] = [
    { id: '1' , title:'Expected title', note: 'An expected note', priority: Priority.Low },
    { id: '2' , title:'Another title', note: 'Another expected note', priority: Priority.Medium },
    { id: '3' , title:'Third title', priority: Priority.High },
    { id: '5' , title:'Last title', note: 'An unexpected note', priority: Priority.Urgent },
]; 
const testOnSelect = (tag: TagModel) => console.log;
const testOnDeselect = (tag: TagModel) => console.log;

const action = (task: TaskModel) => console.log; 

describe('Tasks test', () => {
    
    beforeEach(() => {
        render(<Tasks tasks={expectedTasks} onDelete={(id: string) => console.log}/>);
    })

    test("it renders the component and all it's tasks", () => {
        expect(screen.getAllByText(/title/).length).toEqual(4);
        expect(screen.getAllByText(/note/).length).toEqual(3);
    })
})