import React from 'react';
import AddTodo from '../components/AddTodo/AddTodo';
import TodoList from '../components/TodoList/TodoList';
import TodoPage from '../components/TodoPage/TodoPage';
import './App.less';


const App: React.FC = () => {
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
