// Ejercicio 2 – Función con parámetros y retorno
// • Diseña una función llamada calcularPromedio que reciba tres notas y retorne el promedio final del estudiante.
// • Si el promedio es mayor o igual a 3.0, muestra un mensaje indicando que aprobó; de lo contrario, que reprobó.
// • Aplica operadores lógicos y condicionales.

// Función con parámetros y retorno
import { calcularPromedio } from '../modules/calcularpromedio.js';


export const promedio = function() {
    // se piden las notas al usuario
    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
    // se llama la función calcularPromedio
    let promedioFinal = calcularPromedio(nota1, nota2, nota3);
    // se muestra el resultado
    alert("El promedio final es: " + promedioFinal);

    // se verifica si el estudiante aprobó o reprobó
    if (promedioFinal >= 3.0) {
        alert("El estudiante aprobó.");
    } else {
        alert("El estudiante reprobó.");
    }
}
