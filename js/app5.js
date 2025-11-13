// Ejercicio 5 – Desafío de aplicación
// • Diseña un algoritmo que permita determinar si un número es primo, usando modularización.
// • Divide la solución en varias funciones (por ejemplo: una para validar el número, otra para contar divisores y otra para mostrar el resultado final).
// • Aplica buenas prácticas de nombrado y claridad en el código.

// Importamos la funcion mostrar_mensaje desde el archivo validar_numero.js ubicado en la carpeta modulos
import { mostrar_mensaje } from "../modules/validarnumero.js";

export const validarNumero = function() {
    // Pedimos al usuario que ingrese un numero y lo guardamos como texto
    let numero = prompt("Ingrese un numero:");

    // Convertimos el valor ingresado a numero entero usando parseInt
    numero = parseInt(numero);

    // Llamamos la funcion mostrar_mensaje pasando el numero como argumento
    mostrar_mensaje(numero);
}