//--------------------- poner todos los productos en un objeto class constructor----------------------//

class Prenda { // armo modelo único
    constructor( nombre, talle, color, precio) {
        this.nombre = nombre;
        this.talle = talle;
        this.color = color;
        this.precio = precio;
    }
}

//---------------------guardar los precios de la ropa en un arrays------------------------------------//

const prendas = [
    new Prenda(1,"Buzo ", "L", "marrón", 14000),
    new Prenda(2,"Buzo", "M", "gris", 16150), 
    new Prenda (3,"Buzo", "X", "rosado",11640)
]


    console.log(prendas);
    carrito = [];

    // carrito de compra


//--------------------- pedir al usuario su nombre y preguntar si desea comprar ---------------------//
let unidad = 0;

let elegirProducto = prompt("¿Desea comprar?");


if (elegirProducto === "si" || elegirProducto === "Si") {
    
    let producto = parseInt(prompt("Elige un producto, ingrese el número: \n1- Buzo marron. \n2 - Buzo gris. \n3 - Buzo rosado. \n4- Presiona N para abandonar."));

    alert(producto);

    if(producto > 3 || producto < 1){
        alert("ingrese un número válido");
        
    }else {
        const productoElegido = prendas.find( p => p.id === producto);
        carrito.push(productoElegido);
        let unidad = parseInt(prompt("¿Cuántos quiere?"));
        unidad = (productoElegido * unidad);
        console.log(unidad) 
        alert("Su precio total sería " + unidad);
        gitfinalizar = "";
        finalizar = alert("Gracias por confiar!");
        
        
        
    }
    const continuarCompra = confirm("¿desea seguir comprando?")
    if (continuarCompra){
    
        const Prenda= prendas.map( (el) =>  el.precio)
    console.log(Prenda);

    }else{
        alert("Gracias por visitarnos");
    }

    }



