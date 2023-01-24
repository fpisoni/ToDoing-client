import React from "react";
import { render, screen } from '@testing-library/react';
import FormModal from './taskFormModal';
import { TaskModel } from "../../models/task.model";

let testTask;
let hidden = false;
const expectedTask: TaskModel = { id: '000' , title:'Expected title', note: 'An expected note' };

const hide = () => hidden = true;
const action = (task: TaskModel) => testTask = task; 

describe('TaskFormModal test', () => {
    test('Renders the modal', () => {
        const modal = render(<FormModal show={true} action={action} onHide={hide} nextTaskId={'333'}/>);
        expect(modal).toBeDefined();
        expect(modal.getByRole('term')).toBeInTheDocument();
    })

    test('Changes the form when editing', () => {
        render(<FormModal show={true} action={action} onHide={hide} taskData={expectedTask} nextTaskId={'333'}/>);
        expect(screen.getByText(/Edit Task/)).toBeInTheDocument();
        expect(screen.getByDisplayValue(/Expected title/)).toBeInTheDocument();
        expect(screen.getByText(/An expected note/)).toBeInTheDocument();
    })
})
