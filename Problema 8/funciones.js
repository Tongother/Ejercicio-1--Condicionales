let calificacion = parseInt(prompt("Por favor, ingrese la ultima calificacion que obtuvo en su vida actualmente (0-10)"));

if(calificacion>10 || calificacion <0){
    alert("No manches, esa calificación no existe")
}else if(calificacion<6){
    alert("No le fue muy bien, esta reprobado");
}else if(calificacion>=6 && calificacion <=8){
    alert("Pues, le fue mas o menos, esta regular");
}else if(calificacion === 9){
    alert("Le fue bien :)");
}else if(calificacion === 10){
    alert("¡Wow, muchas felicidades, te fue excelente!");
}