// src/components/TodoList.tsx
import { Add as AddIcon, MoreVert as MoreVertIcon } from '@mui/icons-material';
import {
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TodoDetails from './dialogs/TodoDetails';
import { Todo } from './types';

function TodoList() {
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [checked, setChecked] = useState<Array<number>>([]);

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/todos').then((response) => {
      setTodos(response.data);
    });
  }, []);

  const handleClickOpenDetails = (todo: Todo) => {
    setSelectedTodo(todo);
    setOpenDetails(true);
  };
  const handleCloseDetails = () => setOpenDetails(false);
  const handleMoreClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => setAnchorEl(null);

  const handleToggle = (value: number) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleAddTodo = () => {
    const newTodo: Todo = {
      description: 'New Todo Description',
      id: todos.length + 1,
      title: 'New Todo',
    };
    axios.post('http://localhost:5000/todos', newTodo).then((response) => {
      setTodos((prevTodos) => [...prevTodos, response.data]);
    });
  };

  return (
    <div className="min-h-screen min-w-full overflow-y-auto bg-gray-800 text-white">
      <div className="sticky top-0 flex items-center justify-between bg-blue-600 p-4 text-white">
        <input
          className="rounded-lg bg-gray-200 p-2"
          placeholder="Search"
          type="text"
        />
        <IconButton color="inherit" edge="end" onClick={handleAddTodo}>
          <AddIcon />
        </IconButton>
      </div>
      <List>
        {todos.map((todo) => (
          <ListItemButton
            className="m-2 rounded bg-gray-700 p-4 text-white shadow-md hover:shadow-lg active:bg-gray-600"
            key={todo.id}
            onClick={() => handleClickOpenDetails(todo)}
          >
            <ListItemIcon>
              <Checkbox
                checked={checked.indexOf(todo.id) !== -1}
                disableRipple
                edge="start"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  event.stopPropagation();
                  handleToggle(todo.id);
                }}
                tabIndex={-1}
              />
            </ListItemIcon>
            <ListItemText primary={todo.title} />
            <IconButton
              aria-haspopup="true"
              color="inherit"
              edge="end"
              onClick={handleMoreClick}
            >
              <MoreVertIcon />
            </IconButton>
          </ListItemButton>
        ))}
        <Menu
          anchorEl={anchorEl}
          keepMounted
          onClose={handleCloseMenu}
          open={Boolean(anchorEl)}
        >
          <MenuItem onClick={handleCloseMenu}>Delete</MenuItem>
        </Menu>
      </List>
      <Dialog onClose={handleCloseDetails} open={openDetails}>
        <DialogTitle>Todo Details</DialogTitle>
        <DialogContent>
          <TodoDetails onClose={handleCloseDetails} todo={selectedTodo} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TodoList;
