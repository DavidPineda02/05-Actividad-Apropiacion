// Ejercicio 3 – Función con ciclos
// • Crea una función llamada contarHasta que reciba un número y, utilizando un ciclo, imprima todos los números desde 1 hasta el valor recibido.
// • Convierte luego esta función a función flecha.

// Importamos la funcion ContarHasta desde el archivo contador.js ubicado en la carpeta modulos
import { ContarHasta } from "../modules/contador.js";

export const contador = function(){
    // Pedimos al usuario que ingrese un numero y lo convertimos a entero con parseInt
    let n = parseInt(prompt("Ingrese el numero: "));

    // Llamamos la funcion ContarHasta pasando el numero ingresado como argumento
    ContarHasta(n);
}