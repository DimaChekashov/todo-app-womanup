import dayjs from 'dayjs';
import React from 'react';
import './TodoItem.less';

interface Props {
    title: string;
    endDate: number;
}

const TodoItem: React.FC<Props> = ({title, endDate}) => {
    return (
        <div className="todo-item">
            <div className="todo-item__name">
                {title}
            </div>
            <div className="todo-item__date">
                {dayjs(endDate).startOf('day').format('YYYY-MM-DD')}
            </div>
        </div>
    )
}

export default TodoItem;