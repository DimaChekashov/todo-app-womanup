import dayjs from 'dayjs';
import React, { useContext, useState } from 'react';
import { Context } from '../..';
import { Todo } from '../../types/types';
import './AddTodo.less';

interface Props {
    createTodo(todo: Todo): void;
}

const AddTodo: React.FC<Props> = ({createTodo}) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [endDate, setEndDate] = useState<number>(Date.now());
    const [file, setFile] = useState<File>();
    const { storageRef } = useContext(Context);

    const fileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;

        if (!file) return;

        console.log(file);
        setFile(file[0]);
    }

    const uploadFile = () => {
        if(file) {
            // storageRef.child(`files/${file?.name}`).put(file).then((snapshot: any) => {
            //     console.log(snapshot);
            // });
        }
        // createTodo({
        //     title,
        //     description,
        //     fileUrl: file ? `files/${file?.name}` : "",
        //     endDate
        // });
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
                type="file" 
                className="add-todo__file" 
                onChange={fileOnChange} 
            />
            <input 
                type="date" 
                placeholder="Todo name" 
                className="add-todo__date" 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEndDate(new Date(e.target.value).getTime())}
            />
            <button className="add-todo__btn" onClick={uploadFile}>Create Todo</button>
        </div>
    )
}

export default AddTodo;