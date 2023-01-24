import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import { TaskModel } from "../../models/task.model";
import TaskForm from "./taskForm";

const expectedTask = { id: '000', title: 'Expected task' };
const tasks: TaskModel[] = [expectedTask];
const createAction = (task: TaskModel) => tasks.push(task); 
const editAction = (task: TaskModel) => tasks[tasks.findIndex(t => t.id === task.id)] = task;

describe('Tests TaskForm', () => {
    test('Renders the component', () => {
        const form = render(<TaskForm isEdit={false} hideModal={() => {  } } onAction={ createAction } nextTaskId={'333'}/>)
        expect(form).toBeDefined();
    });

    test('Renders create form', () => {
        render(<TaskForm isEdit={false} hideModal={() => {  } } onAction={ createAction } nextTaskId={'333'}/>);
        expect(screen.getByText(/Create/)).toBeInTheDocument();
        fireEvent.click(
            screen.getByTestId('action-button')
        )
    })

    test('Renders edit form', () => {
        render(<TaskForm isEdit={true} hideModal={() => {  } } onAction={ editAction } taskData={expectedTask} nextTaskId={'333'} />)
        expect(screen.getByText(/Update Task/)).toBeInTheDocument();
        fireEvent.click(
            screen.getByTestId('action-button')
        )
    })
})