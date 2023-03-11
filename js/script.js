//--------------------- poner todos los productos en un objeto class constructor----------------------//
unidad = 0;
class listaRopa{

    constructor(buzoMarron, buzoGris, buzoRosado){

    this.buzoMarron = parseInt(buzoMarron);
    this.buzoGris= parseInt(buzoGris);
    this.buzoRosado= parseInt(buzoRosado);
    this.vendido = false;
}
    sumaIva(){
    this.precio = this.precio * 1.21;
}
    vender(){
    this.vendido = true;
}
}
listaRopa.sumaIva();
listaRopa.vender();
//---------------------guardar los precios de la ropa en un arrays------------------------------------//

const listasRopa = [
    new listaRopa (15750,17230,13230),
    new listaRopa (14000,16150,11640),
]

console.log(listaRopa);



//--------------------- pedir al usuario su nombre y preguntar si desea comprar ---------------------//

let nombre = prompt("Ingrese su nombre , por favor");

function saludarConNombre(nombre) {
    alert('Buenos días, ' + nombre);
}
saludarConNombre(nombre)

let elegirProducto = prompt("¿Desea comprar?");

if (elegirProducto === "si" || elegirProducto === "Si") {

    let producto = prompt("Elige un producto: \n1- Buzo marron. \n2 - Buzo gris. \n3 - Buzo rosado. \n4- Presiona N para abandonar.");

    //-----preguntar al usuario qué desea comprar y sumar otra unidad en que caso de que lo desee---------//

    while (elegirProducto != "N" && elegirProducto != "n") {

        switch (producto) {
            case "1":
                alert("El precio es de $ " + precioBuzoMarron);
                totalProductos = prompt("¿Desea más de una unidad: \n1- Si. \n2- No.");
                if (totalProductos != "No" && totalProductos != "no") {
                    let unidad = parseInt(prompt("¿Cuánto unidades? Se tiene como límite 5 unidades de cada producto"));
                    alert(unidad)
                    precioBuzoMarron = (unidad * precioBuzoMarron);
                    alert("Su precio total sería " + precioBuzoMarron);
                    finalizar = "";
                    finalizar = alert("Gracias por confiar!");

                    break;

                } else {

                    alert("Gracias por visitarnos");
                }
                break;


            case "2":
                alert("El precio es de $ " + precioBuzoGris);
                totalProductos = prompt("¿Desea más de una unidad: \n1- Si. \n2- No.");
                if (totalProductos != "No" && totalProductos != "no") {
                    let unidad = parseInt(prompt("¿Cuánto unidades? Se tiene como límite 5 unidades de cada producto"));
                    alert(unidad)
                    precioBuzoGris = (unidad * precioBuzoGris);
                    alert("Su precio total sería " + precioBuzoGris);
                    finalizar = "";
                    finalizar = alert("Gracias por confiar!");

                    break;
                } else {

                    alert("Gracias por visitarnos");
                }
                break;


            case "3":
                alert("El precio es de $ " + precioBuzoRosado);
                totalProductos = prompt("¿Desea más de una unidad: \n1- Si. \n2- No.");
                if (totalProductos != "No" && totalProductos != "no") {
                    let unidad = parseInt(prompt("¿Cuánto unidades? Se tiene como límite 5 unidades de cada producto"));
                    alert(unidad)
                    precioBuzoRosado = (unidad * precioBuzoRosado);
                    alert("Su precio total sería " + precioBuzoRosado);
                    finalizar = "";
                    finalizar = alert("Gracias por confiar!");
                    break;
                } else {

                    alert("Gracias por visitarnos");
                }
                break;


            default:
                alert("Gracias por el tiempo. Te esperamos");
                break;

        }
    
    
    producto = prompt("Elige un producto: \n1- Buzo marron. \n2 - Buzo gris. \n3 - Buzo rosado. \n4- Presiona N para abandonar.");
    }
} else {
    alert("Adiós, gracias por tu tiempo!");
}
//----------------------------- pedir al usuario el método de pago-----------------------------------------//

let elegirIngreso = prompt("Los métodos de pago: n1\- Tarjeta de crédito. n2\-Tarjeta de débito n3\-Mercado Pago. n4\-X Para cancelar el pago")

while (elegirIngreso != "x" && elegirIngreso!= "X") {

    switch (elegirIngreso) {
        case "1": alert( "Elegió +  " + elegirIngreso)
    listaRopa.push(elegirIngreso);

    console.log(elegirIngreso)
} 
}
