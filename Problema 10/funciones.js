alert("¡Bievenido a Campus Def, somos una empresa de tecnología que está ofreciendo programas para aprender a desarrollar aplicaciones. El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: \n Course: $4999 MXN \n Carrera $3999 MXN \n Master: $2999 MXN");
let curso = parseInt(prompt("Por favor, si esta interesado coloque el numero del curso que desea: \n 1. Course \n 2. Carrera \n 3. Master"));
let beca = parseInt(prompt("¿Cuenta con alguna de estas becas? (colocar el numero) \n 1. Beca Facebook: 20% de descuento \n 2. Beca Google: 15% de descuento \n 3. Beca Jesua: 50% de descuento \n 4. No cuento con beca"));
let precioTotal=0;

function cantidadBeca(becaDescuento){
    switch(becaDescuento){
        case 1:
            beca = .20;
            break;
        
        case 2:
            beca = .15;
            break;

        case 3: 
            beca = .50;
            break;

        case 4: 
            beca = 1;
            break;

        default:
            alert("Lamentamos el numero no valido, pero, se le contara como si no tuviera beca");
            beca = 1;
            break;
    }
}

function procedimientoDeCostosTotal(){

    if(curso === 4999){
        curso = curso * beca;
        precioTotal = curso * 2;
    }else if(curso === 3999){
        curso = curso * beca;
        precioTotal = curso * 6;
    }else if(curso === 2999){
        curso = curso * beca;
        precioTotal = curso * 12;
    }
}

switch(curso){
    case 1:
        cantidadBeca(beca);
        curso = 4999;
        procedimientoDeCostosTotal();
        alert(`Debido a que el curso "Course" dura 2 meses el total de los gastos sería: $${precioTotal}`);

        break;
        
    case 2:
        cantidadBeca(beca);
        curso = 3999;
        procedimientoDeCostosTotal();
        alert(`Debido a que el curso "Carrera" dura 6 meses el total de los gastos sería: $${precioTotal}`);
        break;

    case 3:
        cantidadBeca(beca);
        curso = 2999;
        procedimientoDeCostosTotal();
        alert(`Debido a que el curso "Master" dura 12 meses el total de los gastos sería: $${precioTotal}`);
        break;

    default:
        alert("No poseemos ese curso, una disculpa");
        break;
}