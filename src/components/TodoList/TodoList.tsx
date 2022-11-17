import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.less';

const TodoList: React.FC = () => {
    return (
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default TodoList;