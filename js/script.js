
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
  
// Cargar los datos del archivo JSON
async function loadJSON() {
  const response = await fetch('data.json');
  const data = await response.json();
  return data;
}

// Función para generar la lista de productos
async function renderProducts() {
  const data = await loadJSON();
  data.productos.forEach((prenda) => {
    const li = document.createElement('li');
    li.textContent = prenda.nombre;
    prendaList.appendChild(li);
  });
}

// Función para eliminar un producto
async function deleteProduct() {
  const prendaName = document.getElementById("eliminarCarrito");
  const data = await loadJSON();
  const prendaIndex = data.prendas.findIndex((prenda) => prenda.nombre === prendaName);
  if (prendaIndex !== -1) {
    data.prendas.splice(prendaIndex, 1);
    const response = await fetch('data.json', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(`El producto ${prenda.nombre} fue eliminado.`);
    renderProducts();
  } else {
    console.log(`No se encontró el producto ${prenda.nombre}.`);
  }
}

// Asignar evento de clic al botón de eliminar
$btnEliminarCarrito.addEventListener('click', deleteProduct);

// Generar la lista de productos al cargar la página
renderProducts();
//funcion para vaciar el producto

function removeFromCarrito(prendaId) {
  carritoItems = carritoItems.find(item => item.id == prendaId);
  renderCarritoItems();

}

function clearCarrito() {
  carritoItems = [];
  renderCarritoItems();
}

function renderCarritoItems() {
carrito.innerHTML = '';
carritoItems.length === 0 {
carrito.innerHTML = '<p>Carrito vacío</p>';
  
const removeButton = document.getElementById('eliminarCarrito');
removeButton.addEventListener('click', () => {
removeFromCarrito(prenda.id);
});
carrito.appendChild(carritoItems);
};
}

$btnVaciarCarrito.addEventListener('click', () => {
clearCarrito();
});
   
// agregar al boton comprar un mensaje
function showConfirmationMessage(prenda) {
        const message = `${prenda.nombre} se ha realizado la compra con exito.`;
        toastr.success(message);
}
$btnComprar.addEventListener("click",()=> {
        showConfirmationMessage();
})

  

 
       
  
  
  