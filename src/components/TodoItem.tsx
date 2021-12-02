import React from 'react';
import {Todo} from '../types/Todo'

interface TodoItem extends Todo {}

const TodoItem: React.FC<TodoItem> = (props) => {
    const {id, title, complete } = props;
    return (
        <div>
            <input type="checkbox" checked={complete}/>
            <span>{title}</span>
            <button>X</button>
        </div>
    );
};

export default TodoItem;