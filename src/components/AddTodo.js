import React from "react";
import { createTodo, getUserAndTask } from "../functions";


const AddTodo = ({ inputTodo, setInputTodo, todos, setTodos/* , lessTodo, setLessTodo */ }) => {

    const handleKeyEnter = async (e) => {
        if (e.keyCode === 13 && inputTodo !== '') {
            const tareApi={ /* objeto que le paso a la función createTodo() */
                label: inputTodo,
                is_done: false
            }
            
            await createTodo(tareApi)
            const dataApi= await getUserAndTask()
           /*  const tarea= [...todos, {
                label: inputTodo,
                is_done: false
            }] */
            
            setTodos(dataApi)
        }
    }

    return (
        <>  
           
            <div className='container d-flex justify-content-start col-3 bg-light'>
                <input type='texto' placeholder='What need to be done?' onChange={(e) => { setInputTodo(e.target.value) }} value={inputTodo} onKeyDown={handleKeyEnter}></input>
            </div>

            <div className="container d-flex justify-content-start col-3 bg-light">
                {/* <ul>
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
                </ul> */}
                <ul>
                    {
                        todos && Array.isArray(todos) && todos.length > 0 &&
                        todos.map(({id, label})=> {
                           return <li key={id}>{label}</li>
})
                    }
                </ul>
            </div>

        </>
    )
}

export default AddTodo