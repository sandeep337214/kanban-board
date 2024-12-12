import React, { useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import SearchBar from './components/SearchBar';
import AddTaskModal from './components/AddTaskModal';
import { Button } from '@mui/material';
import './App.css';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ padding: '1rem' }}>
      <SearchBar />
      <KanbanBoard />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setModalOpen(true)}
        style={{ position: 'fixed', bottom: '1rem', right: '1rem' }}
      >
        + Add Task
      </Button>
      <AddTaskModal isOpen={isModalOpen} handleClose={() => setModalOpen(false)} />
    </div>
  );
};

export default App;