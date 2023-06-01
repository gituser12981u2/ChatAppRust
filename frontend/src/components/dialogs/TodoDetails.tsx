// src/components/dialogs/TodoDetails.tsx
import {
  Button,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React from 'react';
import { Props } from '../types';

const TodoDetails: React.FC<Props> = ({ todo, onClose }) => {
  if (!todo) return null;

  const { title, description } = todo;

  return (
    <>
      <DialogTitle>{title}</DialogTitle>
      <DialogContentText>{description}</DialogContentText>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </>
  );
};

export default TodoDetails;
