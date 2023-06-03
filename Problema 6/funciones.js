let numero1 = prompt("Por favor, ingrese un número");
let numero2 = prompt("Por favor, ingrese un segundo número");
let numero3 = prompt("Por favor, ingrese un tercer número");

if(numero1 > numero2 && numero1>numero3){
    if(numero2 == numero3){
        alert(`¡El ${numero1} es el mayor! Pero los numeros ${numero2} y ${numero3} son iguales`);
    }else{
        alert(`¡El ${numero1} es el mayor!`);
    }
}else if(numero2 > numero1 && numero2> numero3){
    alert(`¡El ${numero2} es el mayor!`);
    if(numero1 == numero3){
        alert(`¡El ${numero2} es el mayor! Pero los numeros ${numero1} y ${numero3} son iguales`);
    }else{
        alert(`¡El ${numero2} es el mayor!`);
    }
}else if(numero3> numero1 && numero3> numero2){
    if(numero1 == numero2){
        alert(`¡El ${numero3} es el mayor! Pero los numeros ${numero1} y ${numero2} son iguales`);
    }else{
        alert(`¡El ${numero3} es el mayor!`);
    }
}else if(numero1==numero2){
    alert(`¡El ${numero1} y el ${numero2} son los mayores y son iguales`);
}else if(numero2==numero3){
    alert(`¡El ${numero2} y el ${numero3} son los mayores y son iguales`);
}else if(numero1==numero3){
    alert(`¡El ${numero1} y el ${numero3} son los mayores y son iguales`);
}