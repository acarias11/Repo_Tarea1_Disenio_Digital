//Cree una función llamada aplicarImpuestos que:
//Reciba un array de objetos (productos con nombre y precio).
//Filtre los productos con precio mayor a 50.
//Aumente el precio de los productos filtrados agregando un 10% de impuesto.
//Retorne el nuevo array modificado.

function aplicarImpuestos(productos) {
    return productos.map(producto => {
        let nuevoProducto = { ...producto };
        if (nuevoProducto.precio > 50) {
            nuevoProducto.precio *= 1.1; 
        }
        return nuevoProducto;
    });
}

const productos = [
    { nombre: "Cuaderno de Goku", precio: 45 },
    { nombre: "Mochila de barbie", precio: 150 },
    { nombre: "Zapatos de educacion fisica", precio: 250 },
    { nombre: "Lapices", precio: 25 }
];

console.log(productos);
console.log(aplicarImpuestos(productos));