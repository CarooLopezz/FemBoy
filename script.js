

const btnAgregar = document.getElementById('agregar');
const btnCarrito= document.getElementById('carrito');
const btnVerCarrito= document.getElementById('verCarrito');
const eliminarCarrito= document.getElementById('eliminarCarrito');
const vaciarCarrito = document.getElementById('vaciarCarrito');
const comprar= document.getElementById('comprar');
//--------------------------realizar el boton de carrito------------------------------------------------//
btnCarrito.addEventListener('click', function() {
    // Hacer una petición al archivo JSON utilizando fetch
    fetch('datos.json')
      .then(response => response.json())
      .then(data => {
        // Manipular la data de alguna manera
        console.log(data);
      })
      .catch(error => {
        console.log('Error al cargar la data:', error);
      });
  });

//--------------------------Agregar un evento al boton de agregar uno mas-------------------------------//
let contadorProductos = 3;

btnAgregar.addEventListener("click", function() {
  contadorProductos++;
  const nuevoProducto = "";
  nuevoProducto.innerText = "Producto " + contadorProductos;
  btnAgregar.appendChild(nuevoProducto);
});
//---------------------- agregar evento al boton ver carrito------------------------------------------//
btnVerCarrito.addEventListener("click", function() {
    // Obtener los elementos del carrito
    const carrito = JSON.parse(localStorage.getItem("carrito"));
  
    // Mostrar los elementos del carrito en la consola
    console.log(carrito);
  });

  //-----------------agregar  prenda al carrito con json
  //agregar otra unidad
  // ver el carrito
  // eliminar 1 elemento
// vaciar el carrito
// comprar
//eiminar la lista del carrito
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


//---------------------------Una vez apretado el boton finalizar la compra---------------------------------//
//---------------------------guardar en el localstorage el DOM-------------------------------------------//
carrito.addEventListener('click',()=>{
    localStorage.setItem(prenda1.value);
    localStorage.setItem(prenda2.value);
    localStorage.setItem(prenda3.value);
    localStorage.setItem(prenda4.value);
})
//----------------------- cantidad de claves guardadas-------------------------------------------------//
console.log(carrito.length); 

const usarJson = async function () {
    let response = await fetch('./js/data.json');
    let productos = await response.json();
    console.log(prendas);
    crearTarjeta(prendas);
}