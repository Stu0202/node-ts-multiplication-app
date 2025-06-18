//El paquete yargs sirve para que tu programa en Node.js pueda leer y entender argumentos desde la línea de comandos de forma fácil.
//Soporta alias (-n en lugar de --nombre)

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(process.argv)
    .parseSync()