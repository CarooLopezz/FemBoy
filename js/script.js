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
    new Prenda(1,"Bruzo ", "L", "marrón", 14000),
    new Prenda(2,"Buzo", "M", "gris", 16150), 
    new Prenda (3,"Buzo", "X", "rosado",11640)
]
    prendas.push("En oferta")

    console.log(prendas.length)

    console.log(prendas);

    // carrito de compra

    const carrito =[];

//--------------------- pedir al usuario su nombre y preguntar si desea comprar ---------------------//
unidad= 0; 
let elegirProducto = prompt("¿Desea comprar?");

if (elegirProducto === "si" || elegirProducto === "Si") {
    function mostrarProductos(){
    let producto = parseInt(prompt("Elige un producto, ingrese el número: \n1- Buzo marron. \n2 - Buzo gris. \n3 - Buzo rosado. \n4- Presiona N para abandonar."));
    console.log(producto);

    if(producto > 3 || producto < 1){
        alert("ingrese un número válido");
        mostrarProductos();
    }else {
        const productoElegido = prendas.find( p => p.id === producto);
        carrito.push(productoElegido);
        const cantidad = parseInt(prompt("¿Cuántos quiere?"));
        productoElegido.cantidad = cantidad;

        productoElegido.precio = productoElegido.precio * unidad

        console.log(productoElegido);

        carrito.push(productoElegido);
    }
    const continuarCompra = confirm("¿desea seguir comprando?")

    if (continuarCompra){
        mostrarProductos();
    }else{
        calcularTotal();
    }
}
function calcularTotal(){
    const total = carrito.reduce( (acc,el) => acc += el.precio)
}

}