

export const createUser= async ()=>{
    try{
        const raw= JSON.stringify()
        const urlUser= 'https://playground.4geeks.com/todo/users/john'
        const options= {
            method: 'POST',
            body: raw,
            headers: {
                "Content-Type": "Application/json"
            }
        }
        const response= await fetch(urlUser, options)
        console.log('Respuesta', response)
        const data= await response.json()
        console.log('Usuario creado', data)
        if(data.detail){
            getUserAndTask()
        }
    }
    catch(detail){
        console.log()
    }
}

export const getUserAndTask= async ()=>{
    /* EL FETCH PARA EL SIGUIENTE HOST Y URL ME PERMITE CONSULTAR LOS TODOS DE MI USUARIO */
    try{
        const urlUser= 'https://playground.4geeks.com/todo/users/john'
        const response= await fetch(urlUser)
        console.log('Respuesta:', response)
        const data= await response.json()
        if(data){
            console.log(data.name, 'debe hacer:', data.todos)
        }
    }
    catch(error){
        console.log(error.detail)
    }
}

export const createTodo= async (tarea)=>{
    try{
        const raw= JSON.stringify({tarea: tarea})
        const urlTodo= 'https://playground.4geeks.com/todo/todos/john'
        const options= {
            method: 'POST',
            body: raw,
            headers: {
                "Content-Type": "Application/json"
            }
        }
        const response= await fetch(urlTodo, options)
        if(response.status >= 200 && response.status < 300){
            console.log('Tarea agregada')
        }else{
            console.log(`No se pudo agregar ${response.status}`)
        }
        const data= await response.json()
        if(data.detail){
            console.log('Error en agregar tarea ')
        }else{
            console.log('todo agregado')
        }
    }
    catch(detail){
        console.log()
    }
}

