// Creamos una funcion llamada ContarHasta que recibe un parametro 'n'
export function ContarHasta(n)
{
    // Usamos un ciclo for para contar desde 1 hasta el numero ingresado
    for(let i =1;i <=n;i++)
    {
        // Mostramos cada numero en una ventana emergente
        console.log(`Numero: ${i}`);
    }
}
// Ejecutamos la funciun
// ContarHasta()

// // funcion flecha

// // Se crea una funcion flecha llamada ContarHasta
// const ContarHasta = () => {

//     // Se pide al usuario que ingrese un numero y se convierte a entero con parseInt
//     let n = parseInt(prompt("Ingrese el número: "));

//     // Se usa un ciclo for para contar desde 1 hasta n - 1
//     for (let i = 1; i < n; i++) {
//         // Se muestra cada numero en una ventana emergente
//         alert(`Número: ${i}`);
//     }
// };

// // Se llama a la funciun para que se ejecute
// ContarHasta();