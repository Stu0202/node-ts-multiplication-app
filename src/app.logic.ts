import fs from 'fs'
import {yarg} from './config/plugins/yargs.plugin'

let outputMessage = '';

const {b:base, l:limit ,s:showTable } = yarg

const headerMessage = `
================================
        Tabla del ${base}
================================
`;

for (let i = 1; i <= limit; i++) {
outputMessage += `${base} x ${i} = ${base*i}\n`;

}
outputMessage = headerMessage + outputMessage;

if(showTable){
    console.log(outputMessage)
}

const outputPath = `outputs`
//recursive: true → crea toda la ruta si es necesario
fs.mkdirSync(outputPath,{recursive: true})

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`,outputMessage)


console.log('File Created!')
