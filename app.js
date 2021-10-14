class Producto {
    constructor(nombre, precio, detalle, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true;
    }
    sumarIva() {
        return this.precio *1.21;
    }
    vender() {
        this.disponile = false;
    }
    precioSugerido() {
        return this.precio  *1.21  *1.25;
    }
}
const arrayProductos = [];
do {
    const comprobacion = prompt("Ingrese un nombre del producto o fin para teerminar de argegar");
if ( comprobacion === "fin" || comprobacion === "FIN" || "Fin") {
    break;
}else {
    nombreP = comprobacion;
    const precioP = prompt("Ingrese el Precio del producto");
    const detalleP = prompt("Ingrese el detalle del producto");
    const cantidadP = prompt("Ingrese ña cantidad comprada del producto")
    arrayProductos.push(new Producto(nombreP, PrecioP, detalleP, cantidadP));

}
}
while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin")

console.log(arrayProductos);
for (let producto of arrayProductos) {
    let contenedor = document.createElement("div");
    // Definimos el innerHTML del elemento con una pñanatilla dae texto
    contenedor.innerHTML = ` <h3> Nombre: ${producto.nombre}</h3>
    <p> Precio: ${producto.precio}</p>
    <p> Cantidad: ${producto.cantidad}</p>
    <p> Detalle: ${producto.detalle}</p>`;
                              
  document.body.appendChild (contenedor);
} 
// Poco stock Menos de 3 productos
let pocostock = arrayProductos.filter(producto.cantidad <= 3);
document.write("<h3> Lista de productos con poco Stock (menos de 3 unidades): </h3>" );
for (let producto of pocoStock) {
    let contenedor = document.createElement("div");
    // Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML =  ` <h3> Nombre: ${producto.nombre}</h3>
    <p> Cantidad: ${producto.cantidad}</p>
    <p> Detalle: ${producto.detalle}</p> `;
    document.body.appendChild(contenedor);
}
// productos sinStock
let sinStock = arrayProductos.filter(producto.cantidad == 0 || producto.disponible == false);
console.log(sinStock);
document.write("<h3> Lista de Productos sin Stock (cantidad = 0 o disponible = false): </h3> ");

for (let producto of sinStock) {
    document.write("<h3> Lista de Productos con poco Stock (menos de 3 unidades) </h3>");
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
    <p> Cantidad: ${producto.cantidad}</p>
    <p> Detalle: ${producto.detalle}</p>`;
    document.body.appendChild(contenedor);
    



    
}

