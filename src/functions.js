export const getUser= ()=>{
    /* EL FETCH PARA LA SIGUINTE URL ME PERMITE CONSULTAR LOS TODOS DE MI USUARIO */
        const urlApi= 'https://playground.4geeks.com/todo/users/johnblanco'
        const options= {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(urlApi, options)
            .then((response)=>{
                console.log(response)
                return response.json()
            })
            .then((datos)=>{
                console.log(datos)
            })
            .catch((error)=>{
                console.log(error.message)
            })

        /* todavía no tengo datos para guardar en el estado. Solo estoy comprobando que:
            1- Estoy importando bien mi función para ser ejecutada en mi componente padre con UseEffect
            2- Que mi fetch está funcionando apuntando al host y al path.
           hasta el día viernes la url utilizada contiene un array con 18 elementos. Chequear el lunes 
        */    
}

