import fs from 'fs'

export interface SaveFileUseCase{
    execute:(options: Options) => boolean
}

export interface Options{
    fileContent : string;
    fileDestination?: string;
    fileName?   : string;
}

export class SaveFile implements SaveFileUseCase{
    constructor(){}

    execute({
        fileContent, 
        fileDestination = 'outputs',
        fileName = 'table'
    }: Options):boolean{
        
        try {
        //recursive: true → crea toda la ruta si es necesario
        fs.mkdirSync(fileDestination,{recursive: true})
        
        fs.writeFileSync(`${fileDestination}/${fileName}.txt`,fileContent)
        
        


        return true
        } catch (error) {
            console.error(error)
            return false
        }
        
    }
}