import { log } from "console";
import { CreateTable } from "../domain/use-cases/create-table.use.case";
import { SaveFile } from "../domain/use-cases/save-file.use.case";
import { ServerApp } from "./server-app"

describe('Pruebas en server-app', () => { 

    const options = {
        base: 2,
        limit: 10,
        showTable: false,
        fileDestination: 'test-destination',
        fileName: 'test-file-name'
    }

    test('should create ServerApp instance', () => { 
        
        const serverApp = new ServerApp();
        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp).toBe('function')
     })


     test('should run ServerApp with options', () => { 
        const logSpy = jest.spyOn(console, 'log');
        const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');
        
        
      

        ServerApp.run(options);

        expect( logSpy).toHaveBeenCalledTimes(2)
        expect( logSpy).toHaveBeenCalledWith('Server running...')
        expect( logSpy).toHaveBeenLastCalledWith('File created!')

        expect( createTableSpy).toHaveBeenCalledTimes(1)
        expect( createTableSpy).toHaveBeenCalledWith({base:options.base, limit:options.limit})
        
        expect(saveFileSpy).toHaveBeenCalledTimes(1)
        expect(saveFileSpy).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            fileDestination: options.fileDestination,
            fileName: options.fileName
        })
      })


      test('should run with custom values mocked', () => { 
    
          const logMock = jest.fn()
          const createMock = jest.fn()
          const saveFileMock = jest.fn()

          console.log =logMock
          CreateTable.prototype.execute = createMock.mockReturnValue(' 2 x 1 = 2')
          SaveFile.prototype.execute = saveFileMock.mockReturnValue(true)




          ServerApp.run(options);

          expect( logMock).toHaveBeenCalledWith('Server running...');
          expect( createMock).toHaveBeenCalledWith({base:options.base, limit:options.limit})
          expect( saveFileMock).toHaveBeenCalledWith({
            fileContent:  ' 2 x 1 = 2',
            fileDestination: options.fileDestination,
            fileName: options.fileName
          })

          expect(logMock).toHaveBeenLastCalledWith('File created!')
        

       })
 })