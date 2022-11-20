import dayjs from 'dayjs';
import React from 'react';
import { Todo } from '../../types/types';
import './TodoItem.less';

interface Props {
    todo: Todo;
}

const TodoItem: React.FC<Props> = ({todo}) => {
    const isFailed: boolean = dayjs(todo.endDate).format('YYYY-MM-DD') > dayjs().format('YYYY-MM-DD');

    return (
        <div className={`todo-item ${!isFailed ? "failed" : ""}`}>
            <div className="todo-item__name">
                {todo.title}
            </div>
            <div className="todo-item__date">
                {dayjs(todo.endDate).format('YYYY-MM-DD')}
            </div>
        </div>
    )
}

export default TodoItem;