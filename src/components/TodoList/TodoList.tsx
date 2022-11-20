import React from 'react';
import { Todo } from '../../types/types';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.less';

interface Props {
    todos?: Todo[];
}

const TodoList: React.FC<Props> = ({todos}) => {
    return (
        <div className="todo-list">
            {todos?.map((todo: Todo, index) => <TodoItem 
                key={index} 
                title={todo.title} 
                endDate={todo.endDate} 
            />)}
        </div>
    )
}

export default TodoList;