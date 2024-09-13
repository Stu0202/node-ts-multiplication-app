
import fs from 'fs'
import { SaveFile } from "./save-file.use.case"

describe('SaveFileUseCase', () => { 

    

    afterEach( () => {
        fs.rmSync('outputs', {recursive: true})
    })


    test('should save file with default values', () => { 
        
        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt'
        const options = {
            fileContent:'test content'
        }
        const result = saveFile.execute(options)
        
        const checkFile =  fs.existsSync(filePath)
        const fileContent =fs.readFileSync(filePath, 'utf-8')
        
        expect(result).toBe(true)
        expect(checkFile).toBe(true)
        expect(fileContent).toBe(options.fileContent)
    

     })
 })