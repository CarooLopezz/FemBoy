//--------------------- todos los elementos del DOM que voy a necesitar------------------------------//
const btnCard = document.querySelectorAll(".card");
const btncarrito = document.querySelectorAll("#carrito")
let modal = document.getElementById("modal");





//--------------------- poner todos los productos en un objeto class constructor----------------------//

class Prenda { // armo modelo único
    constructor(id, nombre, talle, color, precio) {
        this.id = id;
        this.nombre = nombre;
        this.talle = talle;
        this.color = color;
        this.precio = precio;
    }
}

//---------------------guardar los precios de la ropa en un arrays------------------------------------//

const prendas = [
    new Prenda(1, "Buzo ", "L", "marrón", 14000),
    new Prenda(2, "Buzo", "M", "gris", 16150),
    new Prenda(3, "Buzo", "X", "rosado", 11640)
];

console.log(prendas);
//-------------- --para inicar el modal ---------------------------------------------------------------//
const myModalEl = document.getElementById('myModal')
myModalEl.addEventListener('show.bs.modal',() => {
  


//------------cuando el usuario desee hacer click en el boton de carrito(conectar js con html)---------//

document.getElementById("carrito").addEventListener("click", hacerPregunta);
let elegirProducto = 0;

function hacerPregunta() {
    //--------------------- pedir al usuario su nombre y preguntar si desea comprar ---------------------//
    elegirProducto = ("¿Desea comprar?");
    console.log(elegirProducto);

}

if (elegirProducto === "si" || elegirProducto === "Si") {

    let producto = parseInt(prompt("Elige un producto, ingrese el número: \n1- Buzo marron. \n2 - Buzo gris. \n3 - Buzo rosado. \n4- Presiona N para abandonar."));
    if(producto <= 3 || producto >= 1){
        const productoElegido = prendas.find(p => p.id === producto);
        carrito.push(productoElegido);

    }
    if (producto > 3 || producto < 1) {
        console.log("ingrese un número válido");

        //----- actualizar el numero de los productos-------------------//
        for (let i = 0; i < producto.length; i++) {
            producto[i].cantidad += 1;

            return producto;
        }

    } else {
        

        letprecioTotal = (productoElegido.precio * unidad);
        alert("Su precio total es de ${precioTotal}");
        console.log("Unidades: ${unidad}, Producto:${productoElegido.nombre}, Precio total: ${precioTotal}");

    }
    const continuarCompra = confirm("¿desea seguir comprando?");
    if (continuarCompra) {

        const preciosPrendas = prendas.map(el => el.precio);
        console.log(preciosPrendas);

    } else {
        alert("Gracias por visitarnos");
    }

}


})


modal(hidden.bs.modal);


