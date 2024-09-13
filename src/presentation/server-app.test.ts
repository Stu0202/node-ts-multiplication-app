import { ServerApp } from "./server-app"

describe('Pruebas en server-app', () => { 
    test('should create ServerApp instance', () => { 
        
        const serverApp = new ServerApp();
        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp).toBe('function')
     })
 })