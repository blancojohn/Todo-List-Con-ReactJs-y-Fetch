import React, { useEffect, useState, useRef } from "react";
import AddTodo from "./AddTodo";
import CounterTodo from "./CounterTodo"
import { createUser } from "../functions";

let initialCounter = [0]

const TodoList = () => {
    const [inputTodo, setInputTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [numberTodos, setNumberTodos] = useState(initialCounter)
    const [lessTodo, setLessTodo] = useState(false)

    const ref= useRef('')

    useEffect(() => {
        setNumberTodos(todos.length)
    }, [todos])

    useEffect(()=>{
        createUser(ref.current)
    },[])

return (
    <>
        <div className='container d-flex justify-content-center col-3 mt-5 bg-light'>
            <h1>TODO-LIST</h1>
        </div>
        <AddTodo setInputTodo={setInputTodo} inputTodo={inputTodo} todos={todos} setTodos={setTodos} lessTodo={lessTodo} setLessTodo={setLessTodo} />
        <CounterTodo numberTodos={numberTodos} setNumberTodos={setNumberTodos} />
    </>
)
}

export default TodoList


