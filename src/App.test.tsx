import React from 'react';
import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import App from './App';

describe('App test', () => {
  let app: RenderResult;

  beforeEach(() => {
    app = render(<App />);
  });

  test('renders the base component', () => {
    const addTaskButton = screen.getByText(/Add task/i);
    const tasks = screen.getAllByText(/Delete/);

    expect(app).toBeDefined();
    expect(tasks.length).toEqual(3);
    expect(addTaskButton).toBeInTheDocument();
  });

  test('Updates tasks on creation with correct title and note', () => {
    expect(screen.getAllByText(/Delete/).length).toEqual(3);
    fireEvent.click(screen.getByText(/Add Task/));

    const titleInput = screen.getByPlaceholderText(/Title/);
    fireEvent.change(titleInput, { target: { value: 'Testing task' }});
    const noteInput = screen.getByPlaceholderText(/Notes for the task/);
    fireEvent.change(noteInput, { target: { value: 'Testing note' }});

    fireEvent.click(screen.getByTestId('action-button'));
    expect(screen.getAllByText(/Delete/).length).toEqual(4);
    expect(screen.getByText(/Testing task/)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Testing note/)).toBeInTheDocument();
  });

  test('Deletes tasks correctly', () => {
    jest.spyOn(window, 'confirm').mockReturnValueOnce(true);
    const taskButtons = screen.getAllByText(/Delete/);
    expect(taskButtons.length).toEqual(3);
    fireEvent.click(taskButtons[0]);
    expect(screen.getAllByText(/Delete/).length).toEqual(2);
  });

  test('Updates the note when editing', () => {
    expect(screen.getAllByText(/Delete/).length).toEqual(3);

    fireEvent.click(screen.getAllByText(/Edit/)[0]);
    const updateButton = screen.getByText(/Update Task/);
    expect(screen.getByText(/Edit Task/)).toBeInTheDocument();
    expect(updateButton).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/Title/), { target: { value: 'Testing task' }});
    fireEvent.change(screen.getByLabelText(/Note/), { target: { value: 'Testing note' }});
    fireEvent.click(updateButton);

    expect(screen.getAllByText(/Delete/).length).toEqual(3);
    expect(screen.getByText(/Testing task/)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Testing note/)).toBeInTheDocument();
  })
})
