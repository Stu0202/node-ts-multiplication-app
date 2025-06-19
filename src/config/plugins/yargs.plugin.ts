//El paquete yargs sirve para que tu programa en Node.js pueda leer y entender argumentos desde la línea de comandos de forma fácil.
//Soporta alias (-n en lugar de --nombre)

import yargs, { options } from 'yargs'
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(process.argv)

//El option me permite decirle que hacer a node cuando le mando la bandera 'b'
    .option('b',{
        alias: 'base', 
        type: 'number', //tipo de valor
        demandOption: true, // es obligatorio mandar la base si no, no ejecuta la consola
        describe:' Multiplication table base '
    })
    .option('l',{
        alias: 'limit',
        type:'number',
        default:10, //Por defecto si no se lo manda por consola
        describe:'Multiplication table limit'
    })
    .option('s',{
        alias:'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table'
    })
    .parseSync() // hace que yargs lea y devuelva los argumentos de la terminal ya validados y convertidos. Sin él