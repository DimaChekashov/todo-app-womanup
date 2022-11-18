import dayjs from 'dayjs';
import React from 'react';
import './TodoPage.less';

const TodoPage: React.FC = () => {
    return (
        <div className="todo">
            <h2 className="todo__title">Title</h2>
            <p className="todo__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae odio quibusdam non, dignissimos accusantium itaque expedita odit animi obcaecati at possimus unde ratione aspernatur eaque suscipit? Obcaecati aspernatur reprehenderit distinctio!</p>
            <div className="todo__date">
                {dayjs().startOf('day').format('YYYY-MM-DD')}
            </div>
            <div className="todo__controls">
                <button type="button" className="todo__controls-btn">
                    Completed
                </button>
                <button type="button" className="todo__controls-btn todo__controls-btn_update">
                    Update
                </button>
                <button type="button" className="todo__controls-btn todo__controls-btn_download">
                    Download File
                </button>
                <button type="button" className="todo__controls-btn todo__controls-btn_delete">
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TodoPage;