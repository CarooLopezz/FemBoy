//--------------------- creo las clavas para el localstorage----------------------------------------//
localStorage.setItem(1, "Buzo ", "L", "marrón", 14000);
localStorage.setItem(2, "Buzo", "M", "gris", 16150);
sessionStorage.setItem(3, "Buzo", "X", "rosado", 11640);
sessionStorage.setItem(4, "Remera", "S", "blanca", 7050);


//--------------------- todos los elementos del DOM que voy a necesitar------------------------------//
const btncarrito1 = document.getElementById("carrito1");
const btncarrito2 = document.getElementById("carrito2");
const btncarrito3 = document.getElementById("carrito3");
const btncarrito4 = document.getElementById("carrito4");

//-------------- --para iniciar el carrito ---------------------------------------------------------------//
btncarrito.onclick=(evento) => {
    
    console.log('Se agregó exitosamente')
}

//---------------------------guardar en el localstorage el DOM-------------------------------------------//
btncarrito.addEventListener('click',()=>{
    localStorage.setItem("buzo marron",btncarrito1.value);
    localStorage.setItem("buzo gris",btncarrito2.value);
    localStorage.setItem("buzo rosado",btncarrito3.value);
    localStorage.setItem("remera blanca",btncarrito4.value);
})
//----------------------- cantidad de claves guardadas-------------------------------------------------//
console.log(sessionStorage.length); 



//------------cuando el usuario desee hacer click en el boton de carrito(conectar js con html)---------//

document.getElementById("carrito1").addEventListener("click", hacerPregunta);
document.getElementById("carrito2").addEventListener("click", hacerPregunta);
document.getElementById("carrito3").addEventListener("click", hacerPregunta);
document.getElementById("carrito4").addEventListener("click", hacerPregunta);
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

            console.log(producto) ;
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
localStorage.clear()



