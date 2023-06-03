let bellisimo;
function preguntar(){
    bellisimo = prompt("¿Eres bellisimo? (Responde si o no)");
}
preguntar();

while(true){
    if(bellisimo==="si"){
        alert("Ciertamente");
        break;
    }else if(bellisimo === "no"){
        alert("No te creo");
        break;
    }else{
        alert("Por favor, ingrese bien los datos");
        preguntar();
    }
}