import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTasks } from '../features/tasksSlice';
import { TextField } from '@mui/material';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(filterTasks(e.target.value));
  };

  return (
    <TextField
      label="Search Tasks"
      onChange={handleSearch}
      fullWidth
      style={{ marginBottom: '1rem' }}
    />
  );
};

export default SearchBar;