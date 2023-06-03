let numero1 = prompt("Por favor, ingrese un número");

let numero2 = prompt("Por favor, ingrese otro número");

if(numero1 > numero2){
    alert(`¡El ${numero1} es el mayor!`);
}else if(numero2 > numero1){
    alert(`¡El ${numero2} es el mayor!`);
}else{
    alert(`¡El ${numero1} y el ${numero2} son iguales!`);
}