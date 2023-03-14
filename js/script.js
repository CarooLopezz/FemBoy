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


//--------------------- pedir al usuario su nombre y preguntar si desea comprar ---------------------//
unidad= 0; 
let elegirProducto = prompt("¿Desea comprar?");


if (elegirProducto === "si" || elegirProducto === "Si") {
    
    let producto = parseInt(prompt("Elige un producto, ingrese el número: \n1- Buzo marron. \n2 - Buzo gris. \n3 - Buzo rosado. \n4- Presiona N para abandonar."));

    alert(producto);

    if(producto > 3 || producto < 1){
        alert("ingrese un número válido");
        
    }else {
        const productoElegido = prendas.find( p => p.id === producto);
        carrito.push(productoElegido);
        const unidad = parseInt(prompt("¿Cuántos quiere?"));
        alert(unidad)
        productoElegido.unidad = unidad;    
        productoElegido.precio = productoElegido.precio * unidad
        alert(productoElegido.precio);
        
    carrito.push(productoElegido);
    }
    const continuarCompra = confirm("¿desea seguir comprando?")
    function calcularTotal(){
        const total = carrito.reduce( (acc,el) => acc += el.precio)
    if (continuarCompra){
        mostrarProductos();
    }else{
        calcularTotal();
        alert("Gracias por visitarnos");
    }

    }
}


