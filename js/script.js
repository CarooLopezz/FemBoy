/* carrito de compras
1-Elegir uno o más productos
2-Si elige uno que queda seleccionado con su precio 
3-Si elige más productos que se sumen , se multiplica si elige mas de una unidad del producto(máximo 5)
4-Precio final*/
let precioBuzoMarron = 14.000;
let precioBuzoGris = 16.150;
let precioBuzoRosado = 11.640;
let precioRemeraBlanca = 7.050;

let elegirProducto = prompt("Elige un producto: \n1- Buzo marron. \n2 - Buzo gris. \n3 - Buzo rosado. \n4- Remera Blanca. \n5- Presiona N para abandonar.");

while (elegirProducto != "N" && elegirProducto != "n") {
    switch (elegirProducto) {
        case "1":
            alert("Tu saldo es $ " + precioBuzoMarron);
            let unidad;
            for (let i = 0; i <= 5; i++) {
                unidad = prompt("¿Desea más de una unidad \n1- Si. n2\-No.");
                if (unidad != "No" && unidad != "no") {
                    elegirProducto += unidad;
                    alert("Se sumo a tu compra:" + unidad + " unidad/es");
                    elegirProducto = precioBuzoMarron * unidad;
                    alert("Su precio total sería" + elegirProducto);
                    break;
                }
            alert("Gracias por comprar")
                
            }
        case "2":
            alert("Tu saldo es $ " + precioBuzoGris);
            let unidad1;
            for (let i = 0; i <= 5; i++) {
                unidad1 = prompt("¿Desea más de una unidad \n1- Si. n2\-No.");
                if (unidad1 != "No" && unidad1 != "no") {
                    elegirProducto += unidad1;
                    alert("Se sumo a tu compra:" + unidad1 + " unidad/es");
                    elegirProducto = precioBuzoGris * unidad1;
                    alert("Su precio total sería" + elegirProducto);
                    break;
            }
            alert("Gracias por comprar")
                
            }
        case "3":
            alert("Tu saldo es $ " + precioBuzoGris);
            let unidad2;
            for (let i = 0; i <= 5; i++) {
                unidad3 = prompt("¿Desea más de una unidad \n1- Si. n2\-No.");
                if (unidad2 != "No" && unidad3 != "no") {
                    elegirProducto += unidad2;
                    alert("Se sumo a tu compra:" + unidad2 + " unidad/es");
                    elegirProducto = precioBuzoGris * unidad2;
                    alert("Su precio total sería" + elegirProducto);
                    break;
            }
            alert("Gracias por comprar")
                
        }
        case "4":
            alert("Tu saldo es $ " + precioBuzoGris);
            let unidad3;
            for (let i = 0; i <= 5; i++) {
                unidad3 = prompt("¿Desea más de una unidad \n1- Si. n2\-No.");
                if (unidad3 != "No" && unidad3 != "no") {
                    elegirProducto += unidad3;
                    alert("Se sumo a tu compra:" + unidad3 + " unidad/es");
                    elegirProducto = precioBuzoGris * unidad3;
                    alert("Su precio total sería" + elegirProducto);
                    break;
            }
            alert("Gracias por comprar")
                
        }
            
        default:
            alert("Gracias por el tiempo. Te esperamos");
            break;
    }

    

let elegirProducto = prompt("Elige un producto: \n1- Buzo marron. \n2 - Buzo gris. \n3 - Buzo rosado. \n4- Remera Blanca. \n5- Presiona N para abandonar.");}