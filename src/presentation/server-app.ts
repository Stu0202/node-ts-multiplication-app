//Reglas para la clase

interface RunOptions{
    base: number;
    limit: number;
    showTable: boolean;
}


//Creamos esta clase para tener estructurada la logica del servidor



export class ServerApp{

    static run(options: RunOptions){
        console.log('Server running...')
        console.log(options)
    }
}