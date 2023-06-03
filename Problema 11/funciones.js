let kilometrajePrecio = parseInt(prompt("Por favor, ingrese el tipo de vehiculo que tiene: \n 1. Coche \n 2. Moto \n 3. Autobús"));
let litrosGas = parseInt(prompt("Por favor, ingrese la cantidad de litros que ha consumido"));
let kilometrosRecorridos = parseInt(prompt("Por favor, ingrese los kilometros recorridos"));
let totalAPagar;

function calcularPrecioLitrosGas(litrosGas){
    if(litrosGas>= 0 && litrosGas <=100){
        litrosGas = 5;
    }else if(litrosGas >100){
        litrosGas = 10;
    }else{
        alert("Valor incorrecto, se tomara como si hubiera sobrepasado la cantidad");
        litrosGas=10;
    }
}

function calcularTotalAPagar(){
    totalAPagar = (kilometrajePrecio * kilometrosRecorridos) + litrosGas;
}

switch(kilometrajePrecio){
    case 1: 
        kilometrajePrecio = .2;
        calcularPrecioLitrosGas(litrosGas);
        calcularTotalAPagar();
        alert(`El total a pagar es: $${totalAPagar}`);
        break;
        
    case 2: 
        kilometrajePrecio = .1;
        calcularPrecioLitrosGas(litrosGas);
        calcularTotalAPagar();
        alert(`El total a pagar es: $${totalAPagar}`);
        break;

    case 3:
        kilometrajePrecio = .5; 
        calcularPrecioLitrosGas(litrosGas);
        calcularTotalAPagar();
        alert(`El total a pagar es: $${totalAPagar}`);
        break;

    default:
        alert("Valor incorrecto o fuera del rango solicitado");
        break;
}