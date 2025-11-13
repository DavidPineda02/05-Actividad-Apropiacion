//Importaciones de los modulos 

import { saludar } from "./js/app1.js";
import { promedio } from "./js/app2.js";
import { contador } from "./js/app3.js";
import { valorTotal } from "./js/app4.js";
import { validarNumero } from "./js/app5.js";

const continuar = true

while (continuar){
    let opcion = Number(prompt(`Digite la opcion del ejercicio que deseas: 
        1. Ejercicio 1 – Creación de funciones básicas.
        2. Ejercicio 2 – Función con parámetros y retorno.
        3. Ejercicio 3 – Función con ciclos.
        4. Ejercicio 4 – Función con estructura modular.
        5. Ejercicio 5 – Desafío de aplicación.
        0. Salir.`));

    switch (opcion) {
        case 1:
            saludar();
            break;

        case 2:
            promedio();
            break;

        case 3:
            contador();
            break;

        case 4:
            valorTotal();
            break;

        case 5:
            validarNumero();
            break;

        case 0:
            alert("Gracias...");
            continuar = false;
            break;
            
        default:
            alert("Opcion no valida. ingresa un numero entre 1 o 0");
    }
}