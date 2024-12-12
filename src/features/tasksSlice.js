import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: '1', title: 'Task 1', description: 'Description of Task 1', status: 'To Do' },
    { id: '2', title: 'Task 2', description: 'Description of Task 2', status: 'In Progress' },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) task.status = status;
    },
    filterTasks: (state, action) => {
      state.filterText = action.payload;
    },
  },
});

export const { addTask, updateTaskStatus, filterTasks } = tasksSlice.actions;
export default tasksSlice.reducer;

