export const getUsers= async()=>{
    try{
        const urlApi= 'https://playground.4geeks.com/todo/users'
        const options= {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response= await fetch(urlApi, options)
        const responseJson = await response.json()
        console.log(responseJson)

        /* todavía no tengo datos para guardar en el estado. Solo estoy comprobando que:
            1- Estoy importando bien mi función para ser ejecutada en mi componente padre con UseEffect
            2- Que mi fetch está funcionando apuntando al host y al path.
           hasta el día viernes la url utilizada contiene un array con 18 elementos. Chequear el lunes 
        */

    }catch(error){
        console.log(error.msg)
    }    
}

export const createdUser= ()=>{

}