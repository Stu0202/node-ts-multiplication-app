import { CreateTable } from "./create-table.use.case";

describe('Create table use case', () => { 
    test('should create table with default values', () => { 
        
        
        const createTable = new CreateTable();
        const table = createTable.execute({base: 5});
        const rows = table.split('\n').length;

        console.log(table)
        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('5 x 1 = 5')
        expect(table).toContain('5 x 10 = 50')
        expect(rows).toBe(10)
    
     })

     test('should create table with custom values', () => { 
        
        const option = {
            base:3,
            limit:20
        }

        const createTable= new CreateTable();
        const table = createTable.execute(option);
        const rows = table.split('\n').length

        expect(table).toContain('3 x 20 = 60')
        expect(table).toContain('3 x 10 = 30')
        expect(table).toContain('3 x 1 = 3')
        expect(rows).toBe(20)

      })

 })