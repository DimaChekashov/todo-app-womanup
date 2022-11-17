import React from 'react';
import './TodoItem.less';

const TodoItem: React.FC = () => {
    return (
        <div className="todo-item">
            <div className="todo-item__name">Test</div>
            <div className="todo-item__date">20.20.2022</div>
        </div>
    )
}

export default TodoItem;