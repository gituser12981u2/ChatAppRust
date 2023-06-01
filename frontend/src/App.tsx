// src/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <Routes>
      <Route Component={TodoList} path="/" />
    </Routes>
  );
}
