import React, {useEffect} from 'react';
import {useState, useRef} from 'react'
import { Todo } from "./types/Todo"
import TodoList from "./components/TodoList";
const App: React.FC = () => {

    const [value, setValue] = useState("");
    const [todos, setTodos] = useState<Todo[]>([])
    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const addTodo = () => {
        if(value){
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }])
            setValue('')
        }
    }

    useEffect( () => {
        if(inputRef.current) inputRef.current.focus()

    }, [])

    return (
        <div>
            <div>
                <input type="text" onChange={handleChange} value={value} ref={inputRef}/>
                <button onClick={addTodo}> Add </button>
            </div>
            <TodoList items={todos} />
        </div>
    );
};

export default App;