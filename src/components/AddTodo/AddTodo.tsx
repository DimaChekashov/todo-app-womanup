import React, { useContext, useRef, useState } from 'react';
import { Context } from '../..';
import { Todo } from '../../types/types';
import dayjs from 'dayjs';
import './AddTodo.less';

interface Props {
    createTodo(todo: Todo): void;
}

const AddTodo: React.FC<Props> = ({createTodo}) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [endDate, setEndDate] = useState<string>(dayjs().format('YYYY-MM-DD'));
    const [file, setFile] = useState<File>();

    const fileRef = useRef<HTMLInputElement>(null);

    const { storageRef } = useContext(Context);

    const fileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;

        if (!file) return;

        setFile(file[0]);
    }

    const addTodo = () => {
        if(file) {
            storageRef.child(`files/${file?.name}`).put(file);
        }
        createTodo({
            title,
            description,
            fileUrl: file ? `files/${file?.name}` : "",
            endDate: dayjs(endDate).valueOf()
        });
        
        clearFields();
    }

    const clearFields = () => {
        setTitle("");
        setDescription("");
        setEndDate(dayjs().format('YYYY-MM-DD'));
        
        if(fileRef.current) {
            fileRef.current.value = "";
        }
    }

    return (
        <div className="add-todo">
            <input 
                type="text" 
                placeholder="Todo name" 
                className="add-todo__input" 
                value={title}
                onChange={(e: React.FormEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)}
            />
            <textarea 
                name="describe" 
                placeholder="Todo description" 
                className="add-todo__textarea" 
                value={description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
            />
            <input 
                ref={fileRef}
                type="file" 
                className="add-todo__file" 
                onChange={fileOnChange} 
            />
            <input 
                type="date" 
                placeholder="Todo name" 
                className="add-todo__date"
                value={endDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEndDate(dayjs(new Date(e.target.value)).format('YYYY-MM-DD'))}
            />
            <button className="add-todo__btn" onClick={addTodo}>Create Todo</button>
        </div>
    )
}

export default AddTodo;