//Cree una función llamada generarReporte que:
//Reciba un array de objetos de ventas con producto y monto.
//Retorne un objeto con:
//totalVentas: suma de todos los montos.
//promedio: monto promedio por transacción.
//cantidadTransacciones: número total de ventas.

function generarReporte(ventas) {
    let totalVentas = 0;
    let cantidadTransacciones = ventas.length;
  
    for (let i = 0; i < ventas.length; i++) {
      totalVentas += ventas[i].monto;
    }
  
    let promedio = totalVentas / cantidadTransacciones;
  
    return {
      totalVentas: totalVentas,
      promedio: promedio,
      cantidadTransacciones: cantidadTransacciones,
    };
  }

const ventas1 = [
  { producto: 'esfera de dragon', monto: 100 },
  { producto: 'Cortatelones de Urakusai', monto: 700 },
  { producto: 'Rompemontanias', monto: 300 }
];

const reporte1 = generarReporte(ventas1);
console.log(reporte1);

const ventas2 = [
  { producto: 'Excalibur', monto: 150 }
];

const reporte2 = generarReporte(ventas2);
console.log(reporte2);



