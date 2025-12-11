
//----------------------- traer del DOM-----------------------------------------------------------------/
 const $btnAgregar = document.getElementById("agregar");
const $btnVerCarrito = document.querySelector("#verCarrito");
const $btnEliminarCarrito = document.getElementById('eliminarCarrito');
const $btnVaciarCarrito = document.getElementById("vaciarCarrito");
const $btnComprar = document.getElementById("comprar");
const containerProds = document.getElementById("contenedor");

let carritoItems = [];

/* // traigo  los productos JSON y los relaciono con el carrito
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
          <div class="tarjetas">
            <img class="image_" src="${prenda.imagen}" alt="${prenda.apodo}">
            </div>
            <div class="tarjetas_2">
              <p class="nombre_">${prenda.nombre}  <p>
              <p id="number" class="blink">$${prenda.precio}</p>
              <p class="talle_"> ${prenda.talle}<p>
              <button class="boton_" id=" ${prenda.id}">Agregar al carrito</button>
              </div>
          </div>
            
        `;
        const btnCarrito = prendaElement.querySelector('button');
        btnCarrito.addEventListener('click', () => {
          addToCart(data,prenda.id);
        });
        containerProds.appendChild(prendaElement);
      });
    }
        
const crearTarjeta = (array) => {
    cardContainer.innerHTML = ''
    array.forEach(element => {
        let card =
            `<div class="card">
            <img src="${element.imagen}" class="card-img-top" alt="${element.nombre}">
            <div class="card-body ${element.categoria}">
                <h5 class="card-title">${element.nombre}</h5>
                <p class="card-text">Precio: $ ${element.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
            </div>
        </div>`
        cardContainer.innerHTML += card
    });

}

const usarJson = async function () {
    let response = await fetch('./js/data.json');
    let productos = await response.json();
    console.log(productos);
    crearTarjeta(productos);
}


btnMostrar.onclick = usarJson; 
     */
  /*
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
}); */
//TIENDA 

// carrito de compras con una api externa con fetch peticion

 const APIKEY ='58874fdf-3664-4d4f-9926-86d8a0f520b6';
const cartButton = document.querySelector('#carro');

cartButton.addEventListener('click', () => {
  fetch(`https://api.mouser.com/api/v1/cart?apiKey=${APIKEY}`, {
    method: 'POST',
    body: JSON.stringify({
      // Aquí debes incluir los datos necesarios para agregar los productos al carrito
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    // Aquí debes procesar los datos obtenidos y generar la lista de productos
  })
  .catch(error => {
    console.error('Error al conectar con la API:', error);
  });
});
// trajetas de ropa con asynconrus y data json 
//Petición con método GET
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))

/* 

//Petición con método POST
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(
        {
            title: 'Mi primer post',
            body: 'Esto es un posteo de prueba',
            userId: 1,
        }
    ),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}).then((response) => response.json())
    .then((data) => console.log(data));


 */

const tempValor = document.querySelector('.temp');
const tempDescripcion = document.querySelector('.desc');
const cardContainer = document.querySelector('#cardContainer');
const btnMostrar = document.querySelector('#mostrar');
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(ubicacion => {

        let lat = ubicacion.coords.latitude
        let lon = ubicacion.coords.longitude
        console.log(lat, lon);

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=${APIKEY}`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let temp = (data.main.temp).toFixed(1);
                tempValor.textContent = `${temp} °C`
                let descripcion = data.weather[0].description;
                console.log(descripcion);
                tempDescripcion.textContent = descripcion;
            })

    })
}
const carritoSwal = document.getElementById("carrito");

carritoSwal.onclick = () => {
  Swal.fire({
    title: 'Agregaste al carrito',
    text: 'Producto agregado con éxito',
    icon: 'success',
    imageUrl: 'https://via.placeholder.com/150', // URL de la imagen del producto
    imageWidth: 150,
    imageHeight: 150,
    showCancelButton: true,
    confirmButtonText: 'Ver carrito',
    cancelButtonText: 'Sacar',
  }).then((result) => {
    if (result.isConfirmed) {
      // Si el usuario hace clic en "Ver carrito"
      // Redirigir al usuario a la página del carrito
      window.location.href = '/carrito';
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // Si el usuario hace clic en "Sacar"
      // Mostrar una alerta de confirmación
      Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Quieres sacar el producto del carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          // Si el usuario confirma que quiere sacar el producto
          // Mostrar una alerta de éxito y eliminar el producto del carrito
          Swal.fire({
            title: 'Producto eliminado',
            text: 'El producto ha sido eliminado del carrito con éxito',
            icon: 'success',
            timer: 1500,
          });
        }
      });
    }
  });
};
