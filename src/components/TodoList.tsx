import React from 'react';
import {Todo} from "../types/Todo"
import TodoItem from "./TodoItem";

interface TodoListProps {
    items: Todo[]
}

const TodoList: React.FC<TodoListProps> = (props) => {
    return (
        <div>
            {props.items.map((todo) => {
                return <TodoItem key={todo.id} {...todo}/>
            })}
        </div>
    );
};

export default TodoList;