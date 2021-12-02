import React from 'react';
import {Todo} from '../types/Todo'

interface TodoItem extends Todo {
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItem> = (props) => {
    const {id, title, complete, deleteTodo, toggleTodo } = props;
    return (
        <div>
            <input type="checkbox" checked={complete} onChange={ () => toggleTodo(id) } />
            <span>{title}</span>
            <button onClick={ () => deleteTodo(id) }>X</button>
        </div>
    );
};

export default TodoItem;