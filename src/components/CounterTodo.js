import React from "react";


const CounterTodo = ({ numberTodos }) => {
    return (
        <>
            <div className="container d-flex justify-content-start col-3 bg-light">
                <h5>
                    {numberTodos} tareas pendientes.
                </h5>
            </div>
        </>
    )
}

export default CounterTodo
