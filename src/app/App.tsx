import React, { useContext } from 'react';
import { Context } from '..';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase';
import AddTodo from '../components/AddTodo/AddTodo';
import TodoList from '../components/TodoList/TodoList';
import TodoPage from '../components/TodoPage/TodoPage';
import { Todo } from '../types/types';
import './App.less';

const App: React.FC = () => {
  const { firestore } = useContext(Context);
  const [todos, loading] = useCollectionData(
    firestore.collection('todos').orderBy('createdAt')
  );

  const createTodo = ({title, description, fileUrl, endDate}: Todo) => {
    firestore.collection("todos").add({
      title,
      description,
      fileUrl,
      endDate,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
  
  const removeTodo = () => {
    
  }

  const updateTodo = () => {
    
  }

  return (
    <div className="app">
      <div className="app__sidebar">
        <AddTodo createTodo={createTodo} />
        <TodoList todos={todos as Todo[]} />
      </div>
      <div className="app__content">
        <TodoPage />
      </div>
    </div>
  );
}

export default App;
