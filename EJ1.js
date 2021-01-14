/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

{ const str = "Uno dos tres";

try {
    if(typeof str === "string") {
        console.log(str.length)
    } else {
        throw new Error(`"${str}" No es un string`)
    }
} catch (error) {
    console.log(`Se ha encontrado un ${error}`);
}

}
{
const recortador = function(str,indice) {
    console.log(`${str}`.substring(null,`${indice}`))
}

const str = "Hola Mundo",
indice = 4;
recortador(str,indice);
}