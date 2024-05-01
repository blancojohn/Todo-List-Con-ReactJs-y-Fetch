
export const createUser= async ()=>{
    try{
        const raw= JSON.stringify({})
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
        console.log('Usuario y tareas:', data)
    }
    catch(error){
        console.log(error.message)
    }
}

