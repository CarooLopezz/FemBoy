
//----------------------- traer del DOM-----------------------------------------------------------------/
const $btnAgregar = document.getElementById("agregar");
const $btnVerCarrito = document.querySelector("#verCarrito");
const $btnEliminarCarrito = document.getElementById('eliminarCarrito');
const $btnVaciarCarrito = document.getElementById("vaciarCarrito");
const $btnComprar = document.getElementById("comprar");
let carritoItems=[];

// traigo  los productos JSON y los relaciono con el carrito
fetch('data.json')
  .then(response => response.json())
  .then(data => {
     // Agregar los productos al carrito
     data.forEach(prenda => {
        const prendaElement = document.createElement('div');
        prendaElement.innerHTML = `
        <img src="${prenda.imagen}" class="img-fluid w-40 h-80 " alt="${prenda.apodo}">
          <p>${prenda.nombre} - $${prenda.precio}</p>
          <p>${prenda.talle}<p>
          <button data-id="${prenda.id}">Agregar al carrito</button>
        `;
        const btnCarrito = prendaElement.querySelector('button');
        btnCarrito.addEventListener('click', () => {
          addToCart(prenda);
        });
        carrito.appendChild(prendaElement);
      });
    });
  
  // Función para agregar un producto al carrito
  function addToCart(prenda) {
    const carritoItems = document.createElement('div');
    carritoItems.innerHTML = `
      <p>${prenda.nombre} - ${prenda.precio}</p>
    `;
    carrito.appendChild(carritoItems);
  }
  //------------------función para eliminar ultimo producto-----------//
  function eliminarUltimoProducto() {
    carrito.pop();
    renderizarCarrito();
  }
  
document.getElementById("vaciarCarrito").addEventListener("click", () => {
  eliminarUltimoProducto();
});

//----------------- Función para vaciar un producto-------------------//
function vaciarCarrito() {
  carrito = [];
  renderizarCarrito();
}

function renderizarCarrito() {
  const carritoElement = document.getElementById('vaciarCarrito');
  if (carrito.length === 0) {
    carritoElement.innerHTML = '<p>El carrito está vacío</p>';}
 else {
    splice.data(6)
  }};
    
    
  
  
  


// Asignar evento de clic al botón de eliminar
$btnVaciarCarrito.addEventListener('click', vaciarCarrito);




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


 
       
  
  
  