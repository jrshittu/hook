import React, { useState, useEffect } from 'react';
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

  // put useEffect here
  
  
  return (
    <Container maxWidth='sm' sx={{backgroundColor: "yellow", }}>
      <Typography variant='h4' align='center' gutterBottom mt= '24px' color="red" paddingTop="10px">
        Hook App
      </Typography>
      <TodoList todos={todos} />
    </Container>
  )
}

export default App;
