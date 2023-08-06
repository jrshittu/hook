import React from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}/>
      ))}
    </List>
  )
}

export default TodoList
