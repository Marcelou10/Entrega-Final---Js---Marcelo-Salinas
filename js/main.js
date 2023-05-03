const productos = [
    //Logitech
    {
        id: "mouse-01",
        titulo: "Logitech G Pro X Superlight",
        imagen: "/public/images/logitech/superlight.png",
        categoria: {
            nombre:"Logitech",
            id:"logitech",
        },
        precio: 148
    },

    {
        id: "mouse-02",
        titulo: "Logitech G305",
        imagen: "/public/images/logitech/g305.png",
        categoria: {
            nombre:"Logitech",
            id:"logitech",
        },
        precio: 47.05
    },

    {
        id: "mouse-03",
        titulo: "Logitech G903 LightSpeed",
        imagen: "/public/images/logitech/g903.png",
        categoria: {
            nombre:"Logitech",
            id:"logitech",
        },
        precio: 114
    },

    //Pulsar

    {
        id: "mouse-04",
        titulo: "Pulsar Bruce Lee Edition",
        imagen: "/public/images/pulsar/brucelee.webp",
        categoria: {
            nombre:"Pulsar",
            id:"pulsar",
        },
        precio: 119
    },

    {
        id: "mouse-05",
        titulo: "Pulsar X2 Wireless",
        imagen: "/public/images/pulsar/x2.webp",
        categoria: {
            nombre:"Pulsar",
            id:"pulsar",
        },
        precio: 94.95
    },

    {
        id: "mouse-06",
        titulo: "Pulsar Xlite V2",
        imagen: "/public/images/pulsar/xlite.webp",
        categoria: {
            nombre:"Pulsar",
            id:"pulsar",
        },
        precio: 74.95
    },

    //Vaxee

    {
        id: "mouse-07",
        titulo: "Vaxee Xe Black",
        imagen: "/public/images/vaxee/xe.webp",
        categoria: {
            nombre:"Vaxee",
            id:"vaxee",
        },
        precio: 64.99
    },

    {
        id: "mouse-08",
        titulo: "Vaxee Zygen-NP01 Black",
        imagen: "/public/images/vaxee/zygen.webp",
        categoria: {
            nombre:"Vaxee",
            id:"vaxee",
        },
        precio: 64.99
    },

    {
        id: "mouse-09",
        titulo: "Vaxee OUTSET AX Black",
        imagen: "/public/images/vaxee/outset.webp",
        categoria:{
            nombre:"Vaxee",
            id:"vaxee",
        },
        precio: 64.99
    },
];

const contenedorProductos = document.querySelector ("#contenedor-productos") ;
const botonesCategorias = document.querySelectorAll (".boton-nav");
const tituloPrincipal = document.querySelector ("#titulo-principal");
let botonesAgregar = document.querySelectorAll (".producto-agregar");
const numero = document.querySelector ("#numero");

function cargarProductos (productosElegidos) {
    
    contenedorProductos.innerHTML = "" ;

    productosElegidos.forEach(producto =>{
        const div = document.createElement ("div");
        div.classList.add ("producto");
        div.innerHTML =`
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-info">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>`; 

    contenedorProductos.append(div);
})
    actualizarBotonesAgregar ();
};

cargarProductos(productos);

botonesCategorias.forEach (boton =>{
    boton.addEventListener ("click", (e) =>{
    
    botonesCategorias.forEach(boton => boton.classList.remove ("active"));

    e.currentTarget.classList.add ("active");
    
    if (e.currentTarget.id != "todos") {
    
        const productoCategoria = productos.find (producto => producto.categoria.id === e.currentTarget.id);
        
        tituloPrincipal.innerText = productoCategoria.categoria.nombre;
    
        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
    } else {
        tituloPrincipal.innerText = "Todos los productos";
        cargarProductos(productos);
    }


})
});

function actualizarBotonesAgregar () {

    botonesAgregar = document.querySelectorAll (".producto-agregar");

    botonesAgregar.forEach(boton =>{

        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumero();
} else {
    productosEnCarrito = [];
};


function agregarAlCarrito (e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find (producto => producto.id === idBoton);
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    };
    actualizarNumero();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumero () {
    let nuevoNumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerText = nuevoNumero;
}





