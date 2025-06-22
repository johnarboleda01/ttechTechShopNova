// Obtener un objeto de tipo Map almacenado en localStorage
function obtenerMap(nombre) {
    const str = localStorage.getItem(nombre);
    if (!str) {
        throw new Error(`No se encontró el objeto con el nombre: ${nombre}`);
    }
    const json = JSON.parse(str);
    const map = new Map(Object.entries(json));
    return map;
}

// Devolver la lista de productos almacenadas en localStorage 
function obtenerProductos(categoria = 'todos') {
    const map = obtenerMap("arrProductos");

    let productosFiltrados = [];

    // Si la categoría es 'todos', devolver todos los productos
    if (categoria === null || categoria === undefined || categoria === 'todos') {
        productosFiltrados = map.values();
    } else {
        // Filtrar productos por categoría
        productosFiltrados = map.values().filter(producto => producto.categoria === categoria);
    }

    return productosFiltrados;
}

function obtenerProductoPorId(idProducto) {
    const map = obtenerMap("arrProductos");
    const producto = map.get(idProducto);
    if (!producto) {
        throw new Error(`No se encontró el producto con ID: ${idProducto}`);
    }
    return producto;   
}

// Obtener un producto destacado aleatorio
function obtenerProductoDestacado() {
    const map = obtenerMap("arrProductos");
    const productos = Array.from(map.values());
    if (productos.length === 0) {
        throw new Error("No hay productos disponibles para destacar.");
    }
    
    productosFiltrados = map.values().filter(producto => producto.estrellas >= 4);
    productosFiltrados = Array.from(productosFiltrados).slice(0, 3);

    return productosFiltrados;
}

// Devolver la lista de categorias almacenadas en localStorage 
function obtenerCategorias() {
    const map = obtenerMap("arrCategorias");
    return map.values();
}

function obtenerBanners() {
    const map = obtenerMap("arrBanners");
    return map.values();
}

// Devolver la lista de categorias almacenadas en localStorage 
function obtenerCarrito() {
    const carrito = sessionStorage.getItem("arrCarrito") || "[]"; // Si no hay carrito, devolver un array vacío
    const json = JSON.parse(carrito);

    return json;
}

function formatearCOP(valor) {
  return `$${valor.toLocaleString('es-CO')} COP`;
}

function agregarProductoAlCarrito(producto, actualizarCarrito = true) {
    let carrito = obtenerCarrito();

    carrito.push(producto);

    sessionStorage.setItem("arrCarrito", JSON.stringify(carrito));
    sessionStorage.setItem("contadorCarrito", carrito.length);

    if (actualizarCarrito) {
        mostrarCarrito();
    }
}

function elminarProductoCarrito(producto) {
    const carrito = obtenerCarrito();
    
    carrito.splice(producto, 1); 

    sessionStorage.setItem("arrCarrito", JSON.stringify(carrito));

    mostrarCarrito();
}

function vaciarCarrito() {
    let carrito = [];
    sessionStorage.setItem("arrCarrito", JSON.stringify(carrito));
    mostrarCarrito();
}

// Mostrar los productos añadidos al carrito de compras
function mostrarCarrito() {
    const carrito = obtenerCarrito();
    const carritoContainer = document.getElementById('carrito');
    carritoContainer.innerHTML = "";
    let precio = 0;

    console.log("Carrito actual:", carrito);
    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.className = "list-group-item d-flex justify-content-between mb-2";
        li.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <div class="row">
                    <h6 class="my-0">${producto.nombre}</h6>
                    <small>${formatearCOP(producto.precio)}</small>
                </div>
                <a class="btn btn-danger text-decoration-none text-white" onclick="elminarProductoCarrito(${index})">
                    <i class="fa fa-times"></i>
                </a>
            </div>
        `;
        carritoContainer.appendChild(li);
        precio += producto.precio;
    });

    const totalElement = document.getElementById('total');
    totalElement.textContent = formatearCOP(precio);
    
    sessionStorage.setItem("contadorCarrito", carrito.length);

    let contadorCarrito = sessionStorage.getItem('contadorCarrito') || 0;

    // Asegurarse de que el contador sea un número
    const etiquetaContadorCarrito = document.getElementById('contadorCarrito');

    if (etiquetaContadorCarrito) {
        etiquetaContadorCarrito.textContent = contadorCarrito;
    }
}


