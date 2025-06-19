//Reglas para la clase

import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions{
    base: number;
    limit: number;
    showTable: boolean;
}


//Creamos esta clase para tener estructurada la logica del servidor



export class ServerApp{

    static run({base, limit, showTable}: RunOptions){
        console.log('Server running...')
        
        const table = new CreateTable().execute({base, limit})
        const wasCreated = new SaveFile().execute({
            fileContent: table,
            fileDestination: `outputs/table${base}`
        })


       if(showTable) console.log(table)

       if (wasCreated){
            console.log('File Created')
       }else{
        console.log('File not Created')
       }
    }
}