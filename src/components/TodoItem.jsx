import React from 'react';
import { ListItem, Checkbox, IconButton, ListItemText, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <ListItem>
        <Checkbox checked={todo.completed} />  
        <ListItemText primary={todo.text} />
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label='Delete' onClick={onDelete}>
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  )
}

export default TodoItem
