import React from "react";
import { createTodo } from "../functions";


const AddTodo = ({ inputTodo, setInputTodo, todos, setTodos, lessTodo, setLessTodo }) => {

    const handleKeyEnter = (e) => {
        if (e.keyCode === 13) {
            const tareApi={
                label: inputTodo,
                is_done: false
            }
            const tarea= [...todos, {
                label: inputTodo,
                is_done: false
            }]
            setTodos(tarea)
            createTodo(tareApi)
        }
    }

    return (
        <>  
           
            <div className='container d-flex justify-content-start col-3 bg-light'>
                <input type='texto' placeholder='What need to be done?' onChange={(e) => { setInputTodo(e.target.value) }} value={inputTodo} onKeyDown={handleKeyEnter}></input>
            </div>

            <div className="container d-flex justify-content-start col-3 bg-light">
                <ul>
                    {
                        todos && todos.map((task, index) => (
                            <li key={index}  onMouseOver={() => setLessTodo(true)} onMouseOut={() => setLessTodo(false)}>
                                {task.label} {lessTodo && (<button onClick={() => {
                                    setTodos(
                                        todos.filter(a => a.id !== task.id)
                                    )
                                }}>X</button>)}
                            </li>
                        ))
                    }
                </ul>
            </div>

        </>
    )
}

export default AddTodo