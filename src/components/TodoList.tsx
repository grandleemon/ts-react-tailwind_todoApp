import React from 'react';
import {Todo} from "../types/Todo"
import TodoItem from "./TodoItem";

interface TodoListProps {
    items: Todo[];
    deleteTodo: (id: number) => void;
    toggleTodo: (id:number) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
    const {items, deleteTodo, toggleTodo} = props;
    return (
        <div>
            {items.map((todo) => {
                return <TodoItem
                    key={todo.id}
                    {...todo}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo} />
            })}
        </div>
    );
};

export default TodoList;