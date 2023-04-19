
//----------------------- traer del DOM-----------------------------------------------------------------/
const $btnAgregar = document.getElementById("agregar");
const $btnVerCarrito = document.querySelector("#verCarrito");
const $btnEliminarCarrito = document.getElementById('eliminarCarrito');
const $btnVaciarCarrito = document.getElementById("vaciarCarrito");
const $btnComprar = document.getElementById("comprar");
const containerProds = document.getElementById("contenedor");
const carritoHTML =document.getElementById("carrito");
let carritoItems = [];

// traigo  los productos JSON y los relaciono con el carrito
fetch('data.json')
  .then(response => response.json())
  .then(data => {
  renderizarProductos(data)
    carritoItems = JSON.parse(localStorage.getItem('carrito')) || [];
    renderizarCarrito();
  });
     // Agregar los productos al carrito
function renderizarProductos(data) {
  data.forEach(prenda => {
    const prendaElement = document.createElement('div');
    prendaElement.innerHTML = `
        <img src="${prenda.imagen}" class=" tarjetas img-fluid w-40 h-80 " alt="${prenda.apodo}">
          <p>${prenda.nombre} - $${prenda.precio}</p>
          <p>${prenda.talle}<p>
          <button id="${prenda.id}">Agregar al carrito</button>
        `;
        const btnCarrito = prendaElement.querySelector('button');
        btnCarrito.addEventListener('click', () => {
          addToCart(data,prenda.id);
        });
        containerProds.appendChild(prendaElement);
      });
    }
  
  // Función para agregar un producto al carrito
  function addToCart(data,id) {
    const productoEncontrado = data.find((producto) => producto.id = id);
    carritoItems.push(productoEncontrado);
    localStorage.setItem('carrito', JSON.stringify(carritoItems))
    console.log(carritoItems)
    renderizarCarrito();
  
  }
  
  //------------------función para eliminar un producto-----------//
  function renderizarCarrito(){
    carritoHTML.innerHTML = ""
    carritoItems.forEach((prenda)=> {
      const items = document.createElement("div");
      items.innerHTML += `
      <div class="card col-xl-3 col-md-6 col-sm-12">
        <div class="card-body">
          <h3 class="card-title">${prenda.nombre}</h3>
          <p class="card-text">${prenda.precio}</p>
          <button id="button-${prenda.id}" class="btn btn-primary"> Eliminar del carrito </button>
        </div>
      </div>
    `;
    carritoHTML.appendChild(items)
  
const btnEliminar =document.getElementById(`button-${prenda.id}`)

btnEliminar.addEventListener("click", () => eliminarProducto(prenda.id))
  })
};
 const eliminarProducto =(id) => {
  const producto = carritoItems.find((producto)  => producto.id === id);
 carritoItems.splice(carritoItems.indexOf(producto), 1);
 console.log(carritoItems)
 localStorage.setItem('carrito', JSON.stringify(carritoItems));
 renderizarCarrito();
}
// funcion para vaciar carrito

function vaciarCarrito() {
  carritoItems = [];
  renderizarCarrito();
}
$btnVaciarCarrito.addEventListener('click', () => {
  vaciarCarrito();
});


//guardar en el localstorage y borrrar cuando se aprete el comprar
function guardarDatos(carritoItems, storage) {
  
storage.setItem('usuario', JSON.stringify(carritoItems));
}

// Asignar evento de clic al botón de comprar
$btnComprar.addEventListener('click', () => {
  Toastify({
    text: "Tu compra es exitosa",
    duration: 3000,
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
  }).showToast();
});


 
  
  
  