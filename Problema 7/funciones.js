let semana = prompt("Por favor, ingrese un día de la semana (La primera letra en mayuscula)");

switch(semana){
    case "Domingo":
        alert("Domingo: día de comida para llevar, manta, peli y sofá");
        break;

    case "Lunes":
        alert("No temas los lunes, ¡que te teman a ti! ");
        break;

    case "Martes":
        alert("El martes es ideal para terminar todo lo que no hiciste el lunes");
        break;

    case "Miercoles":
        alert("Este miércoles no haré el vago… solo me pondré en modo ahorro de energía ");
        break;

    case "Jueves":
        alert("¡Feliz jueves!");
        break;

    case "Viernes":
        alert("Hoy no podía haber amanecido mejor… ¡amaneció viernes!");
        break;

    case "Sabado":
        alert("Los sábados deberían tener, al menos, 48 horas");
        break;

    default:
        alert("Por favor, ingrese lo que se le pidio!")
        break;
}