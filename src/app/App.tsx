import React, { useContext, useState } from 'react';
import { Context } from '..';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase';
import { v4 as uuid } from 'uuid';
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
  const [currentTodo, setCurrentTodo] = useState<Todo>();
  const [editMode, setEditMode] = useState<boolean>(false);

  const createTodo = ({title, description, fileUrl, endDate, success}: Todo) => {
    const id = uuid();

    firestore.collection("todos").doc(id).set({
      id,
      title,
      description,
      fileUrl,
      success,
      endDate,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
  }
  
  const deleteTodo = (id: string) => {
    firestore.collection("todos").doc(id).delete();
    setCurrentTodo(undefined);
  }

  return (
    <div className="app">
      <div className="app__sidebar">
        <AddTodo createTodo={createTodo} />
        <TodoList todos={todos as Todo[]} setCurrentTodo={setCurrentTodo} />
      </div>
      <div className="app__content">
        <TodoPage 
          todo={currentTodo} 
          deleteTodo={deleteTodo}
          editMode={editMode}
          setEditMode={setEditMode} 
          setCurrentTodo={setCurrentTodo}
        />
      </div>
    </div>
  );
}

export default App;
