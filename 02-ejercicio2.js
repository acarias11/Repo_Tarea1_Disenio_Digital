//Cree una función llamada actualizarStock que:
//Reciba un array de productos (objetos con id, nombre, y stock), un id, y un nuevoStock.
//Busque el producto con el id especificado.
//Si existe, actualice su propiedad stock con el nuevoStock.
//Retorne el array modificado. Si el producto no existe, retorna null.

function actualizarStock(productos, id, nuevoStock) {
    let producto = productos.find(producto => producto.id === id);
    if (producto) {
        producto.stock = nuevoStock;
        return productos;
    }
    return null;
}

const productos = [
    { id: 1, nombre: "Cuaderno de Goku", stock: 10 },
    { id: 2, nombre: "Mochila de barbie", stock: 5 },
    { id: 3, nombre: "Zapatos de educacion fisica", stock: 20 },
    { id: 4, nombre: "Lapices", stock: 50 }
];

console.log(actualizarStock(productos, 2, 20)); 
console.log(actualizarStock(productos, 5, 1)); 