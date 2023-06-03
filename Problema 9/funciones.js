alert("¡Bievenido a Dairy Queen!");
let helado = parseInt(prompt("Poseemos los siguientes helados (coloque el numero del helado que desea): \n 1. El helado sin topping \n 2. El topping de oreo \n 3. El topping de KitKat \n 4. El topping de brownie"));

switch(helado){
    case 1:
        alert("En total el helado sin topping le cuesta: 50 MXN");
        break;

    case 2:
        alert("En total el topping de oreo le cuesta: 10 MXN");
        break;

    case 3:
        alert("En total el topping de KitKat le cuesta: 15 MXN");
        break;

    case 4:
        alert("En total el topping de brownie le cuesta: 20 MXN");
        break;

    default:
        alert("No poseemos de ese topping, pero tenemos el helado sin topping en 50 MXN");
        break;
}