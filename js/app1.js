// Ejercicio 1 – Creación de funciones básicas
// • Crea una función llamada saludoPersonalizado que reciba un nombre como parámetro y retorne un mensaje de bienvenida.

//se importa la funcion que esta dentro de la carpeta modulos y el archivo
import { saludoPersonalizado } from '../modules/saludo.js';

export const saludar = function() {
    //se piden los datos al usuario
    let nomb = prompt("Ingrese su nombre: ");
    let edad = prompt("Ingrese su edad: ");
    let ficha= prompt ("Ingrese su ficha: ");

    //se muestran los datos, llamando la funcion con los argumentos que recibio
    alert(saludoPersonalizado(nomb,edad,ficha));
}
