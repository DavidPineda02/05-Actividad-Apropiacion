// Ejercicio 3 – Función con ciclos
// • Crea una función llamada contarHasta que reciba un número y, utilizando un ciclo, imprima todos los números desde 1 hasta el valor recibido.
// • Convierte luego esta función a función flecha.

// Importamos la funcion ContarHasta desde el archivo contador.js ubicado en la carpeta modulos
import { ContarHasta } from "../modules/contador.js";

export const contador = function(){
    let opcion = 0;
    while(true)
    {
        let bandera = false;
        opcion = parseInt(prompt(`Bienvenido al sistema
            1. Contar hasta X número
            2. Salir
            Ingrese una opción:
            `));
        switch(opcion)
        {
            case 1:
                let numero = parseInt(prompt("Ingrese un número positivo"));
                let contador = ContarHasta(numero);
                if (contador)
                {
                    alert(`Conteo hasta ${numero} finalizado`)
                }
                else{
                    alert(`Opcion no valida`)
                }
                break;
            case 2: 
                alert("Gracias por usar el programa.")
                bandera = true;
                break;
            default:
                alert("Opcion no valida")
                break;
        }
        if( bandera)
        {
            break;
        }
    }
}