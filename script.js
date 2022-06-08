// Mensaje de bienvenida
// Mostrar destinos y preguntar cual quiere 
// mostrar costo por viaje con escala y sin escala. dar a elegir 
// preguntar cuantos pasajeros y calcular el costo con impuestos
// mostrar detalle del pedido con el desglose


let impuesto = 15;
let eleccion;
let cantidadPasajes = 0;
let Bienvenida = "Mensaje de bienvenida"

function elegirDestino() 
{
    let edad = prompt("Por favor, para ingresar al sitio debemos validar tu edad. Por favor ingresa tu edad");
    
    if(edad < 18) {

        alert("Para poder comprar pasajes, debes ser mayor de 18 años");
    
    } else 
        {
        Bienvenida = alert("Bievenido a tu aerolínea de confianza!");
        eleccion = prompt("Elija su destino: \n 1 - Roma ($1000) \n 2 - Milan ($2000) \n 3 - Venezia ($3000)")
        
            switch(eleccion) 
            {
                case "1":
                    alert("Usted eligió Roma");
                    break;
                case "2":
                    alert("Usted eligió Milan")  
                    break;  
                case "3":
                    alert("Usted eligió Venezia")
                    break;
                default:
                    alert("Debe elegir uno de los 3 destinos")
            }    
    return eleccion
    }
}

elegirDestino() 

function calcularCosto() {
    do(edad > 18)
    while(cantidadPasajes > 0) {
        cantidadPasajes = prompt("Ingrese la cantidad de pasajes que quiere comprar. Tenga en cuenta que a los mismos se le aplicará un impuesto de 15% sobre el valor total");
        let costoCiudad = 1000 * eleccion;
        let costo = cantidadPasajes * costoCiudad;
        let impuestoDestino = costo * impuesto / 100;
        let costoTotal = impuestoDestino + costo;
        
        alert("El valor total de los pasajes CON impuestos es de: "+costoTotal);
        cantidadPasajes = 0;
    }
}

calcularCosto()