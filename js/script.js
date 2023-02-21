/* carrito de compras
1-Elegir uno o más productos
2-Si elige uno que queda seleccionado con su precio 
3-Si elige más productos que se sumen , se multiplica si elige mas de una unidad del producto(máximo 5)
4-Precio final*/
let precioBuzoMarron = 14000;
let precioBuzoGris = 16150;
let precioBuzoRosado = 11640;
let totalProductos = 0;
unidad = 0;


let nombre = prompt("Ingrese su nombre , por favor");

function saludarConNombre(nombre) {
    alert('Buenos días, ' + nombre);
}
saludarConNombre(nombre)

let elegirProducto = prompt("¿Desea comprar?");

if (elegirProducto === "si" || elegirProducto === "Si") {

    let producto = prompt("Elige un producto: \n1- Buzo marron. \n2 - Buzo gris. \n3 - Buzo rosado. \n4- Presiona N para abandonar.");

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

