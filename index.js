import readLineSync from 'readline-sync'
import ck from 'chalk'

const valores = []
let input = ""

//laço while

console.log(ck.bgMagentaBright(ck.bold('PROGRAMA DE PROPRIEDADES DO CSS')))
while(input != "sair")
{
    valores.push(input)
    input = readLineSync.question(ck.bgWhite (ck.bold (ck.magenta ("Digite as propriedades de CSS:").toLocaleLowerCase()
)))}

//mostrar o conteúdo presente no array

console.log(ck.magenta.underline(valores.sort().join("\n")));