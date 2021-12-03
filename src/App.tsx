import React, {useEffect} from 'react';
import {useState, useRef} from 'react'
import {Todo} from "./types/Todo"
import TodoList from "./components/TodoList";

const App: React.FC = () => {

    const [value, setValue] = useState("");
    const [todos, setTodos] = useState<Todo[]>([])
    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') addTodo()
    }

    const addTodo = () => {
        if (value) {
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

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus()

    }, [])

    return (
        <div className="flex justify-center items-center h-screen bg-pink-50 font-mono">
            <div className="">
                <div>
                    <input className="
                    h-8 tracking-wide px-5 text-purple-900
                    bg-gradient-to-r from-purple-400 via-pink-400 to-red-300
                    focus:from-pink-400 focus:to-yellow-300
                    focus:outline-none
                    border border-red-200
                    focus:border-yellow-500
                    focus:text-pink-700" type="text" onChange={handleChange} value={value} ref={inputRef} onKeyDown={handleKeyDown}/>
                    <button className="
                    ml-6 bg-blue-300 w-20 h-8 tracking-wide text-black
                    hover:bg-red-400
                    hover:text-red-100
                    transition duration-300" onClick={addTodo}> Add</button>
                </div>
                <TodoList items={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/></div>
        </div>
    );
};

export default App;