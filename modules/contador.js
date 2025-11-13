// Creamos una funcion llamada ContarHasta que recibe un parametro 'n'
export const ContarHasta = (numero) =>{
    if(numero > 0)
    {
        for(let i = 1; i <= numero; i++)
        {
            alert(`numero ${i}`);
        }
        return true;
    }
    else{
        return false;
    }
}
