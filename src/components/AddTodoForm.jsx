import React, {useState} from 'react';
import { TextField, Button } from '@mui/material';


const AddTodoForm = ({ onAdd }) => {

    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === '') return;
        onAdd(task);
        setTask('');
    };

  return (
    <form onSubmit={handleSubmit}>
        <TextField 
            label="New Task"
            variant='outlined'
            value={task}
            onChange={(e) => setTask(e.target.value)}
        />
        <Button type='submit' variant='contained' color='primary' sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', mt: "20px"}}>
            Add new Task
        </Button>
      
    </form>
  )
}

export default AddTodoForm
