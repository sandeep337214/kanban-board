import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice';
import { Modal, TextField, Button } from '@mui/material';

const AddTaskModal = ({ isOpen, handleClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(
      addTask({ id: Date.now().toString(), title, description, status: 'To Do' })
    );
    handleClose();
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <div style={{ padding: '1rem', background: 'white', margin: 'auto', marginTop: '15%' }}>
        <TextField
          label="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
        <br/>
        <TextField
          label="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
        />
        <Button onClick={handleAddTask} variant="contained" color="primary">
          Add Task
        </Button>
      </div>
    </Modal>
  );
};

export default AddTaskModal;

