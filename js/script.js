
//----------------------- traer del DOM-----------------------------------------------------------------/
const $btnAgregar = document.getElementById("agregar");
const $btnVerCarrito = document.querySelector("#verCarrito");
const $btnEliminarCarrito = document.getElementById('eliminarCarrito');
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
  //funcion para quitar un producto

    function removeFromCarrito(prendaId) {
        carritoItems = carritoItems.filter(item => item.id !== prendaId);
        renderCarritoItems();
      }

      function clearCarrito() {
        carritoItems = [];
        renderCarritoItems();
      }

      function renderCarritoItems() {
        carrito.innerHTML = '';
        if (carritoItems.length === 0) {
          carrito.innerHTML = '<p>Carrito vacío</p>';
        } else {
          carritoItems.forEach(prenda => {
            const carritoItems = document.createElement('div');
            carrito.innerHTML = `
              <p>${prenda.nombre} - $${prenda.precio}</p>
              <button data-id="${prenda.id}">Eliminar un producto</button>
            `;
            const removeButton = document.getElementById('eliminarCarrito');
            removeButton.addEventListener('click', () => {
              removeFromCarrito(prenda.id);
            });
            carrito.appendChild(carritoItems);
          });
        }
      }
     
      $btnEliminarCarrito.addEventListener('click', () => {
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

  

 
       
  
  
  