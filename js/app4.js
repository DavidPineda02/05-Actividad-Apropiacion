// Ejercicio 4 – Función con estructura modular
// • Crea un pequeño programa que calcule el valor total de una compra.
// • Debes usar al menos tres funciones:
//     o Una función para calcular el subtotal (cantidad × precio).
//     o Otra función para calcular el IVA (19%).
//     o Una tercera función que retorne el total a pagar.
// • Usa retornos de valor y combina los resultados entre funciones.


// Importamos las funciones CalcularSubtotal, CalcularIva y CalcularTotal desde el archivo valortotal.js ubicado en la carpeta modulos
import { calcularSubtotal, calcularIVA, calcularTotal } from '../modules/valortotal.js';

export const valorTotal = function() {
    // Pedir datos por teclado
    let cantidad = parseFloat(prompt("Ingresa la cantidad de productos: "));
    let precio = parseFloat(prompt("Ingresa el precio unitario: "));

    // Validar que los datos sean numeros
    if (isNaN(cantidad) || isNaN(precio)) {
        alert("Por favor, ingresa valores numéricos válidos.");
    } else {
        // Calcular subtotal
        let subtotal = calcularSubtotal(cantidad, precio);

        // Calcular IVA
        let iva = calcularIVA(subtotal);

        // Calcular total
        let total = calcularTotal(subtotal, iva);
        
        // Mostrar en alertas también si quieres
        alert("Subtotal: $" + subtotal);
        alert("IVA (19%): $" + iva);
        alert("Total a pagar: $" + total);
    }
}
