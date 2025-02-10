//Cree una función llamada combinarUsuarios que:
//Reciba dos arrays:
//usuarios: array de objetos con id y nombre.
//detalles: array de objetos con id y propiedades adicionales (ej: edad).
//Combine ambos arrays en uno solo, fusionando los objetos que compartan el mismo id.

function combinarUsuarios(usuarios, detalles) {
    const fusion = new Map();

    usuarios.forEach(usuario => {
        fusion.set(usuario.id, { ...usuario });
    });

    detalles.forEach(detalle => {
        if (fusion.has(detalle.id)) {
            fusion.set(detalle.id, { ...fusion.get(detalle.id), ...detalle });
        } else {
            fusion.set(detalle.id, { ...detalle });
        }
    });

    return Array.from(fusion.values());
}

// Ejemplo de uso:
const usuarios = [
    { id: 1, nombre: 'Kendrick' },
    { id: 2, nombre: 'Juan Orlando' },
    { id: 3, nombre: 'Xiomara' }

];

const detalles = [
    { id: 1, apellido: 'Lamar' },
    { id: 2, apellido: 'Hernandez' },
    { id: 3, apellido: 'Castro' }
];

const usuariosCombinados = combinarUsuarios(usuarios, detalles);
console.log(usuariosCombinados);