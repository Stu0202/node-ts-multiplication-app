//import { argv } from "process"
import { ServerApp } from "./presentation/server-app"


describe('Test App.ts', () => {
    test('should call Server with custom values', async() => {

        const serverRunMock = jest.fn()
        ServerApp.run = serverRunMock
        
        process.argv = ['node','app.ts','-b','10','-l','5','-s','true','-n','test.txt','-d','outputs']
        console.log(process.argv)

        await import('./app');
        expect(serverRunMock).toHaveBeenCalledWith({
            base: 10,
            limit: 5,
            showTable: true,
            fileName: 'test.txt',
            fileDestination: 'outputs'
        })

    })
})
