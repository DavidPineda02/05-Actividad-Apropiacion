// Exportamos la funcion Calcularpromedio para que pueda usarse en otros archivos
export function calcularPromedio(nota1, nota2, nota3) {
    // se calcula el promedio
    let promedio = (nota1 + nota2 + nota3) / 3;
    // se retorna el promedio
    return promedio;
}