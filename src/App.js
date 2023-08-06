import React, { useState } from 'react';
import './App.css';
import { Container, Typography } from '@mui/material';
import TodoList from './components/TodoList';
// import axios from 'axios';

const App = () => {

  const [ todos, setTodos ] = useState([
    {id: 1, text: 'Buy Groceries', completed: false},
    {id: 2, text: 'Clean the house', completed: false},
    {id: 3, text: 'Do dishes', completed: false},
    {id: 4, text: 'Do Laundry', completed: false}
  ]);
  
  
  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' align='center' gutterBottom mt= '24px' color="red">
        Hook App
      </Typography>
      <TodoList todos={todos} />
    </Container>
  )
}

export default App;
