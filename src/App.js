import React, { useState } from 'react';
import './App.css';
import { Container, Typography } from '@mui/material';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
// import axios from 'axios';

const App = () => {

  const [ todos, setTodos ] = useState([]);

  const handleAddTodo = (task) => {
    const newTodo = { id:Date.now(), text: task, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  
  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' align='center' gutterBottom mt= '24px' color="red" paddingTop="10px" sx={{fontFamily: "monospace"}}>
        Hook Todo App
      </Typography>
      <TodoList todos={todos} onDelete={handleDeleteTodo}/>
      <AddTodoForm todos={todos} onAdd={handleAddTodo}/>
    </Container>
  )
}

export default App;
