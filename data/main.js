const productos = [
    //Logitech
    {
        id: "agregar",
        titulo: "Logitech G Pro X Superlight",
        imagen: "/public/images/logitech/superlight.png",
        categoria: {
            nombre:"Logitech",
            id:"Logitech"
        },
        precio: 148
    },

    {
        id: "agregar",
        titulo: "Logitech G305",
        imagen: "/public/images/logitech/g305.png",
        categoria: {
            nombre:"Logitech",
            id:"Logitech"
        },
        precio: 47.05
    },

    {
        id: "agregar",
        titulo: "Logitech G903 LightSpeed",
        imagen: "/public/images/logitech/g903.png",
        categoria: {
            nombre:"Logitech",
            id:"Logitech"
        },
        precio: 114
    },

    //Pulsar

    {
        id: "agregar",
        titulo: "Pulsar Bruce Lee Edition",
        imagen: "/public/images/pulsar/brucelee.webp",
        categoria: {
            nombre:"Pulsar",
            id:"Pulsar"
        },
        precio: 119
    },

    {
        id: "agregar",
        titulo: "Pulsar X2 Wireless",
        imagen: "/public/images/pulsar/x2.webp",
        categoria: {
            nombre:"Pulsar",
            id:"Pulsar"
        },
        precio: 94.95
    },

    {
        id: "agregar",
        titulo: "Pulsar Xlite V2",
        imagen: "/public/images/pulsar/xlite.webp",
        categoria: {
            nombre:"Pulsar",
            id:"Pulsar"
        },
        precio: 74.95
    },

    //Vaxee

    {
        id: "agregar",
        titulo: "Vaxee Xe Black",
        imagen: "/public/images/vaxee/xe.webp",
        categoria: {
            nombre:"Vaxee",
            id:"Vaxee"
        },
        precio: 64.99
    },

    {
        id: "agregar",
        titulo: "Vaxee Zygen-NP01 Black",
        imagen: "/public/images/vaxee/zygen.webp",
        categoria: {
            nombre:"Vaxee",
            id:"Vaxee"
        },
        precio: 64.99
    },

    {
        id: "agregar",
        titulo: "Vaxee OUTSET AX Black",
        imagen: "/public/images/vaxee/outset.webp",
        categoria: {
            nombre:"Vaxee",
            id:"Vaxee"
        },
        precio: 64.99
    },
];

const contenedorProductos = document.querySelector ("#contenedor-productos") ;
const botonesCategorias = document.querySelectorAll (".boton-nav");
const tituloPrincipal = document.querySelector ("#titulo-principal");
let botonesAgregar = document.querySelectorAll (".producto-agregar");

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
            <button class="producto-agregar">${producto.id}</button>`; 

    contenedorProductos.append(div);
})

};

cargarProductos(productos);

botonesCategorias.forEach (boton =>{
    boton.addEventListener ("click", (e) =>{
    
    botonesCategorias.forEach(boton => boton.classList.remove ("active"));

    e.currentTarget.classList.add ("active");
    
    if (e.currentTarget.id != "todos") {
    
        const productoCategoria = productos.find (producto => producto.categoria.id === e.currentTarget.id);
        tituloPrincipal.innertext = productoCategoria.categoria.nombre;
    
        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
    } else {
        tituloPrincipal.innertext = "Todos los productos";
        cargarProductos(productos);
    }


})
});



const productosEnCarrito = [] ;

function agregarAlCarrito () {


}





