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

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if(e.key === 'Enter') addTodo()
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

    const deleteTodo = (id: number): void => {
       setTodos(todos.filter((todo) => todo.id !== id))
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    useEffect( () => {
        if(inputRef.current) inputRef.current.focus()

    }, [])

    return (
        <div>
            <div>
                <input type="text" onChange={handleChange} value={value} ref={inputRef} onKeyDown={handleKeyDown}/>
                <button onClick={addTodo}> Add </button>
            </div>
            <TodoList items={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        </div>
    );
};

export default App;