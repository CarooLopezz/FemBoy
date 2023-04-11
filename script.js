

const btnAgregar = document.getElementById('agregar');
const btnCarrito= document.getElementById('carrito');
const btnVerCarrito= document.getElementById('verCarrito');
const eliminarCarrito= document.getElementById('eliminarCarrito');
const vaciarCarrito = document.getElementById('vaciarCarrito');
const totalCarrito = document.getElementById('totalCarrito');
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

//------------------eliminar 1 elemento del carrito--------------------------------------------------//
eliminarCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    eliminarCarrito();
  };





 //--------------------------creo una función para vaciar todo el carrito por completo---------------------//

vaciarCarrito.addEventListener('click', () => {
carrito.splice(0, carrito.length);
actualizarCarrito();
});

//---------------------------guardar en el localstorage el DOM-------------------------------------------//
carrito.addEventListener('click',()=>{
    localStorage.setItem(producto.value);
    localStorage.setItem(producto.value);
    localStorage.setItem(producto.value);
    localStorage.setItem(producto.value);
})
//----------------------- cantidad de claves guardadas-------------------------------------------------//
console.log(carrito.length); 

const usarJson = async function () {
    let response = await fetch('./js/data.json');
    let producto = await response.json();
    console.log(producto);

}
//------------------------mostrar que realizo la compra con un tostify---------------------------------//
function comprar() {
    // Creo un mensaje de éxito
    toastr.success('Compra exitosa!');
  }
  const botonComprar = document.getElementById('boton-comprar');
  botonComprar.addEventListener('click', comprar);
  