import React from "react";
import { render, screen } from '@testing-library/react';
import Tasks from './tasks';
import { TaskModel } from "../../models/task.model";
import { TagModel } from "../../models/tag.model";

const expectedTasks: TaskModel[] = [
    { id: '1' , title:'Expected title', note: 'An expected note' },
    { id: '2' , title:'Another title', note: 'Another expected note' },
    { id: '3' , title:'Third title' },
    { id: '5' , title:'Last title', note: 'An unexpected note' },
]; 
const testOnSelect = (tag: TagModel) => console.log;
const testOnDeselect = (tag: TagModel) => console.log;

const action = (task: TaskModel) => console.log; 

describe('Tasks test', () => {
    
    beforeEach(() => {
        render(<Tasks tasks={expectedTasks} onDelete={(id: string) => console.log} setEdit={action}/>);
    })

    test("it renders the component and all it's tasks", () => {
        expect(screen.getAllByText(/title/).length).toEqual(4);
        expect(screen.getAllByText(/note/).length).toEqual(3);
    })
})