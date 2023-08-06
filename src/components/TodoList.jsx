import React from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItem';

const TodoList = ({todos, onDelete}) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete = {() => onDelete(todo.id)} />
      ))}
    </List>
  )
}

export default TodoList
