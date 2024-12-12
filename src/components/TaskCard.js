import React from 'react';
import { Typography } from '@mui/material';

const TaskCard = ({ task }) => (
  <div className="task-card">
    <Typography variant="h6">{task.title}</Typography>
    <Typography variant="body2" className="task-description">
      {task.description}
    </Typography>
  </div>
);

export default TaskCard;

