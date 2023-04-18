import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import { Priority, TaskModel } from "../../models/task.model";
import TaskForm from "./taskForm";

const expectedTask = { id: '000', title: 'Expected task', priority: Priority.Low };
const tasks: TaskModel[] = [expectedTask];
const createAction = (task: TaskModel) => tasks.push(task); 
const editAction = (task: TaskModel) => tasks[tasks.findIndex(t => t.id === task.id)] = task;

describe('Tests TaskForm', () => {
    test('Renders the component', () => {
        const view = render(<TaskForm isEdit={false} onAction={ createAction } nextTaskId={'333'}/>);
        expect(view).toBeDefined();
    });

    test('Renders create form', () => {
        render(<TaskForm isEdit={false} onAction={ createAction } nextTaskId={'333'}/>);
        expect(screen.getByText(/Create/)).toBeInTheDocument();
        fireEvent.click(
            screen.getByTestId('action-button')
        )
    })

    test('Renders edit form', () => {
        render(<TaskForm isEdit={true} onAction={ editAction } taskData={expectedTask} nextTaskId={'333'} />)
        expect(screen.getByText(/Update Task/)).toBeInTheDocument();
        fireEvent.click(
            screen.getByTestId('action-button')
        )
    })
})