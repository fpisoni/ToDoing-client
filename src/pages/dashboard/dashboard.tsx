import React, { useContext } from 'react';
import './dashboard.css';
import Tasks from '../tasks/tasks';
import Container from 'react-bootstrap/Container'
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { TasksContext } from '../../utils/contexts/tasksContext';

const Dashboard = () => {

  const {tasks, setTasks} = useContext(TasksContext)

  const deleteConfirmationMessage = "This will delete the task, you can't undo this. Are you sure?";

  const deleteHandler = (id: string) => {
    const tempTasks = tasks.filter(task => task.id !== id);
    if (window.confirm(deleteConfirmationMessage)){
      setTasks(tempTasks);
    }
  }

  const StyledButton = styled(IconButton)({
    position:'fixed',
    left: '93vw',
    color: 'green',
    bottom: '5vh',
    transform: 'scale(2)',
  })

  return (
    <div>
      <Container className='app__body'>
        <Tasks tasks={tasks} onDelete={deleteHandler} />
      </Container>
      <Tooltip title='Add task'>
          <StyledButton className='button-create'>
            <AddCircleIcon fontSize='large' />
          </StyledButton>
      </Tooltip>
    </div>
  );
}

export default Dashboard;
