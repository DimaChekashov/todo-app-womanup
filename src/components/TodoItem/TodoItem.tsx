import dayjs from 'dayjs';
import React from 'react';
import './TodoItem.less';

const TodoItem: React.FC = () => {
    return (
        <div className="todo-item">
            <div className="todo-item__name">Test</div>
            <div className="todo-item__date">
                {dayjs().startOf('day').format('YYYY-MM-DD')}
            </div>
        </div>
    )
}

export default TodoItem;