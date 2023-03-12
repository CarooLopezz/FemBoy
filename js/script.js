//--------------------- poner todos los productos en un objeto class constructor----------------------//

class Prenda { // armo modelo único
    constructor(nombre, talle, color, precio) {
        this.nombre = nombre;
        this.talle = talle;
        this.color = color;
        this.precio = precio;
    }
}

//---------------------guardar los precios de la ropa en un arrays------------------------------------//

const prendas = [
    new Prenda("Bruzo ", "L", "marrón", 14000),
    new Prenda("Buzo", "M", "gris", 16150), 
    new Prenda ("Buzo", "X", "rosado",11640)
]
prendas.push("En oferta")

console.log(prendas.length)

console.log(prendas);


//--------------------- pedir al usuario su nombre y preguntar si desea comprar ---------------------//

unidad = 0;
colorElegido = 0;

let elegirProducto = prompt("¿Desea comprar?");

if (elegirProducto === "si" || elegirProducto === "Si") {

    let producto = prompt("Elige un producto: \n1- Buzo marron. \n2 - Buzo gris. \n3 - Buzo rosado. \n4- Presiona N para abandonar.");

    //-----preguntar al usuario qué desea comprar y sumar otra unidad en que caso de que lo desee---------//

    while (elegirProducto != "N" && elegirProducto != "n") {

        switch (producto) {
            case "1":
                alert("El precio es de $ " + Prenda);
                totalProductos = prompt("¿Desea más de una unidad: \n1- Si. \n2- No.");
                if (totalProductos != "No" && totalProductos != "no") {
                    let unidad = parseInt(prompt("¿Cuánto unidades? Se tiene como límite 5 unidades de cada producto"));
                    alert(unidad)
                    Prenda = (unidad * Prenda);
                    alert("Su precio total sería " + Prenda);
                    finalizar = "";
                    finalizar = alert("Gracias por confiar!");

// -------------------- reduce para sumar en caso de que quiera más de una unidad------------------------------//

                const total = Prenda.reduce((acumulador, elemento) => acumulador + elemento, 0)
                console.log(total) 

                    break;

                } else {

                    alert("Gracias por visitarnos");
                }
                break;


            case "2":
                alert("El precio es de $ " + Prenda);
                totalProductos = prompt("¿Desea más de una unidad: \n1- Si. \n2- No.");
                if (totalProductos != "No" && totalProductos != "no") {
                    let unidad = parseInt(prompt("¿Cuánto unidades? Se tiene como límite 5 unidades de cada producto"));
                    alert(unidad)
                    Prenda = (unidad * Prenda);
                    alert("Su precio total sería " + Prenda);
                    finalizar = "";
                    finalizar = alert("Gracias por confiar!");

                    break;
                } else {

                    alert("Gracias por visitarnos");
                }
                break;


            case "3":
                alert("El precio es de $ " + Prenda);
                totalProductos = prompt("¿Desea más de una unidad: \n1- Si. \n2- No.");
                if (totalProductos != "No" && totalProductos != "no") {
                    let unidad = parseInt(prompt("¿Cuánto unidades? Se tiene como límite 5 unidades de cada producto"));
                    alert(unidad)
                    Prenda = (unidad * Prenda);
                    alert("Su precio total sería " + Prenda);
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