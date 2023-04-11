//------------creo la clase prenda, con las propiedades id, nombre, talle ,color y precio-------------//

class Prenda { // armo modelo único
    constructor(id, nombre, talle, color, precio) {
        this.id = id;
        this.nombre = nombre;
        this.talle = talle;
        this.color = color;
        this.precio = precio;
    }
}
//--------------Creo productos y los almaceno en un array-------------------------------------------//

    const prenda1 = new Prenda(1, "Buzo ", "L", "marrón", 14000);
    const prenda2 = new Prenda(2, "Buzo", "M", "gris", 16150);
    const prenda3 = new Prenda(3, "Buzo", "X", "rosado", 11640);
    const prenda4 = new Prenda(3, "Remera", "X", "blanca", 7050);


    const prendas = [prenda1, prenda2, prenda3, prenda4];


//--------------------- elemento del DOM que voy a necesitar------------------------------//

const contenedorPrendas = document.getElementById('contenedorPrendas');


//---------------- modifico el DOM --------------------------------------------------------//
prendas.forEach((prenda) => {
    const divPrenda = document.createElement('div');
    divPrenda.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12');
    divPrenda.innerHTML = `
                            <div>
                                <img src="img/${prenda.id}.jpg" class="card-img-top img-fluid py-3">
                                <div class="card-body">
                                    <h3 class="card-title"> ${prenda.nombre} </h3>
                                    <p class="card-text"> ${prenda.precio} </p>
                                    <button id="boton${prenda.id}" class="btn btn-primary"> Agregar al Carrito </button>
                                </div>
                            </div>`;
    contenedorPrendas.appendChild(divPrenda);
//--------------------------Agregar un evento al boton de añadir al carrito-------------------------------//
const boton = document.getElementById(`boton${prenda.id}`);
    boton.addEventListener('click', () => {
    agregarAlCarrito(prenda.id);
});
});
//-------------------------creo el carrito de compras ---------------------------------------------------//

const carrito = [];

//------------------creo una función que busque el producto por id y lo añada al carrito-----------------//
const agregarAlCarrito = (id) => {
    const prenda = prendas.find((prenda) => prenda.id === id);
    const prendaEnCarrito = carrito.find((prenda) => prenda.id === id);
    if (prendaEnCarrito) {
        prendaEnCarrito.cantidad++;
    } else {
        carrito.push(prenda);
    }
    actualizarCarrito();
};
//-------------------muestro el carrito de compras modificando el DOM------------------------------------//

const contenedorCarrito = document.getElementById('contenedorCarrito');
const verCarrito = document.getElementById('verCarrito');

verCarrito.addEventListener('click', actualizarCarrito);

function actualizarCarrito() {
let aux = '';
carrito.forEach((prenda) => {
    aux += `
            <div class="card col-xl-3 col-md-6 col-sm-12">
                <img src="img/${prenda.id}.jpg" class="card-img-top img-fluid py-3">
                <div class="card-body">
                    <h3 class="card-title"> ${prenda.nombre} </h3>
                    <p class="card-text"> ${prenda.precio} </p>
                    <button onClick = "eliminarDelCarrito(${prenda.id})" class="btn btn-primary"> Eliminar del Carrito </button>
                </div>
            </div>
            `;
});

contenedorCarrito.innerHTML = aux;
calcularTotalCompra();
}
//----------------------------agrego una función que elimine el producto del carrito----------------------//

const eliminarDelCarrito = (id) => {
    const prenda = carrito.find((prenda) => prenda.id === id);
    carrito.splice(carrito.indexOf(prenda), 1);
    actualizarCarrito();
};
 //--------------------------creo una función para vaciar todo el carrito por completo---------------------//

const vaciarCarrito = document.getElementById('vaciarCarrito');
vaciarCarrito.addEventListener('click', () => {
carrito.splice(0, carrito.length);
actualizarCarrito();
});

//----------------------------creo una función que me calcule el total del carrito------------------------//

const totalCompra = document.getElementById('totalCompra');

const calcularTotalCompra = () => {
let total = 0;
carrito.forEach((prenda) => {
    total += prenda.precio * prenda.cantidad;
});
totalCompra.innerHTML = total;
};



//---------------------------guardar en el localstorage el DOM-------------------------------------------//
carrito.addEventListener('click',()=>{
    localStorage.setItem(prenda1.value);
    localStorage.setItem(prenda2.value);
    localStorage.setItem(prenda3.value);
    localStorage.setItem(prenda4.value);
})
//----------------------- cantidad de claves guardadas-------------------------------------------------//
console.log(carrito.length); 



