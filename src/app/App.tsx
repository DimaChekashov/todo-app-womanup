import React, { useState } from 'react';
import AddTodo from '../components/AddTodo/AddTodo';
import TodoList from '../components/TodoList/TodoList';
import TodoPage from '../components/TodoPage/TodoPage';
import { Todo } from '../types/types';
import './App.less';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>();

  const addTodo = (title: string, description: string, endDate: number, file: File) => {
    
  }
  
  const removeTodo = () => {
    
  }

  const updateTodo = () => {
    
  }

  return (
    <div className="app">
      <div className="app__sidebar">
        <AddTodo />
        <TodoList />
      </div>
      <div className="app__content">
        <TodoPage />
      </div>
    </div>
  );
}

export default App;
