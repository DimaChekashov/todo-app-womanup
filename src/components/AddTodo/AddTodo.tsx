import React from 'react';
import './AddTodo.less';

const AddTodo: React.FC = () => {
    return (
        <div className="add-todo">
            <input type="text" placeholder="Todo name" className="add-todo__input" />
            <textarea name="describe" placeholder="Todo description" className="add-todo__textarea" />
            <div className="dropzone">
                <span>Pin a document</span>
            </div>
            <input type="date" placeholder="Todo name" className="add-todo__date" />
            <button className="add-todo__btn">Create Todo</button>
        </div>
    )
}

export default AddTodo;