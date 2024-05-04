
/* FUNCIÓN HARD-CODE PARA CREAR EL USUARIO */
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
        if(response.status >= 200 && response.status <= 299){
            console.log('Codigo de respuesta:', response.status, 'Usuario creado')
        }else{
            console.log('Codigo de respuesta:', response.status, 'Fallo creacion.')
        }
        const data= await response.json()
        /* CADA VEZ QUE SE CARGA LA PÁGINA  EL USEEFFECT LLAMA A LA FUNCIÓN CREAR USUARIO. POR LO TANTO,
        APARTIR DE LA SEGUNDA CARGA LLEGA UN MENSAJE CON LA PROPIEDAD DETAILS DE LA API QUE DICE USUARIO EXISTE
        POR LO TANTO, VALIDO SI EXISTE PARA MOSTRAR EL USUARIO Y LAS TAREAS ACCEDIENDO A LA PROPIEDAD DETAIL DE 
        Y LLAMO A LA FUNCIÓN QUE OBTIENE EL GET DE USARIO Y TAREA LA REPSUESTA.
        DE TAL MANERA, SI BORRAN LOS USUARIOS, ASI PODRÉ CREARLO AUTOMATICAMENTE SINO CAMBIAN LAS INSTRUCCIONES
        DE LA API*/
        if(data.detail){
            console.log(data.detail) 
            return getUserAndTask()
        }
        
    }
    catch(detail){
        console.log()
    }
}


export const createTodo= async (tarea)=>{/* El parámetro pasado va a hacer lo que le pase desde el 
                                            componente AddTodo. El parámetro es la info de las propiedades
                                            del obejeto para que los datos puedan ser creados en la API */
    try{
        const raw= JSON.stringify(tarea)
        const urlTodo= 'https://playground.4geeks.com/todo/todos/john'
        const options= {
            method: 'POST',
            body: raw,
            headers: {
                "Content-Type": "Application/json"
            }
        }
        const response= await fetch(urlTodo, options)
        if(response.status){
            if(response.status >= 200 && response.status <= 299){
                console.log('Codigo Respuesta:', response.status, 'tarea agregada')
            }else{
                console.log('Codigo de Respuesta:', response.status, 'no se puedo agregar tarea')
            }
        }
        const data= await response.json()
        console.log(data)
    }
    catch(detail){
        console.log()
    }
}


export const deleteTodo= async (todo_id)=>{
    try{
        const urlIdTodo=  `https://playground.4geeks.com/todo/todos/${todo_id}`
        const options={
            method: 'DELETE',
            headers: {
                "Content-Type": "Application/json"
            }
        }
        const response= await fetch(urlIdTodo, options)
        if(response.status){
            console.log('Codigo de respuetsa:', response.status)
            return createUser()
        }
    }catch(detail){
        console.log()
    }
}


export const getUserAndTask= async ()=>{
    /* EL FETCH PARA EL SIGUIENTE HOST Y URL ME PERMITE CONSULTAR LOS TODOS DE MI USUARIO */
    try{
        const urlUser= 'https://playground.4geeks.com/todo/users/john'
        const response= await fetch(urlUser)
        if(response.status >= 200 && response.status <= 299){
            console.log('Codigo de respuesta:', response.status, 'Solicitud de usuario aprobada')
        }else{
            console.log('Solicitud rechazada')
        }    
        const data= await response.json()
        if(data){
            console.log('Tareas de',data.name, data.todos)
            return (data.todos)
        }    

    }    
    catch(error){
        console.log(error.detail)
    }    
}        

