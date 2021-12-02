import React from 'react';
import {useState} from 'react'
import { Todo } from "./types/data"
const App: React.FC = () => {

    const [value, setValue] = useState("");
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = () => {
        setTodos([...todos, {
            id: Date.now(),
            title: value,
            complete: false
        }])
        setValue('')
    }

    return (
        <div>
            <div>
                <input type="text" onChange={(e => setValue(e.target.value))} value={value}/>
                <button onClick={addTodo}> Add </button>
            </div>
            {todos.map((todo) => {
                return <div>{todo.title}</div>
            })}
        </div>
    );
};

export default App;