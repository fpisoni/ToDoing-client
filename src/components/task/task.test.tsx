import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import Task from "./task";
import { TaskModel } from "../../models/task.model";
import { TagModel } from "../../models/tag.model";

const expectedTask: TaskModel = { id:'1' , title:'Expected title', note: 'An expected note' };
let deleted = false;
let edit: TaskModel;
const testEdit = (task: TaskModel) => edit = task;
const testDelete = (id: string = '1') => deleted = true;
const testOnSelect = (tag: TagModel) => console.log;
const testOnDeselect = (tag: TagModel) => console.log;

describe('Task test', () => {
    beforeEach(() => {
        render(<Task data={ expectedTask } onDelete={ testDelete } setEdit={ testEdit } onSelect={testOnSelect} onDeselect={testOnDeselect} />);
    });

    test('Renders the task component', () => {
        expect(screen.getByText(/Expected title/)).toBeInTheDocument();
        expect(screen.getByText(/An expected note/)).toBeInTheDocument();
    });

    test('Delete button works correctly', () => {
        fireEvent.click(
            screen.getByTestId('delete-button'),
            {target:{id: 1}}
        );
        expect(deleted).toBeTruthy();
    })

    test('Edit button works correctly', () => {
        fireEvent.click(
            screen.getByTestId('edit-button'),
            {target:{task: expectedTask}}
        );
        expect(edit).toEqual(expectedTask);
    })
})