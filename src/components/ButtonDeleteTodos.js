import React from "react";
import { getUserAndTask, deleteAllTodos } from "../functions";

/* ESTE COMPONENTE ELIMINA EL USUARIO DE LA API PORQUE EL USUARIO ES UN OBJETO CON CON LA 
   PROPIEDAD TODOS */
const ButtonDeleteTodos = ({ setTodos }) => {
    return (
        <>
            <div className='container d-flex justify-content-center col-3 bg-light'>
                <button onClick={async () => {
                    await deleteAllTodos()
                    const dataApi = await getUserAndTask()
                    setTodos(dataApi)
                }}>BORRAR TODAS MIS TAREAS</button>
            </div>

        </>
    )
}

export default ButtonDeleteTodos