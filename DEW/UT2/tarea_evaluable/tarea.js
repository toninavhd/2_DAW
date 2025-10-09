 // economia.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ingresos = [
    { fecha: '2025-10-01 10:00:00', concepto: 'sueldo', importe: 1500 },
    { fecha: '2025-10-05 12:00:00', concepto: 'dividendos', importe: 300 }
];

const gastos = [
    { fecha: '2025-10-02 15:00:00', concepto: 'supermercado', importe: 50 },
    { fecha: '2025-10-03 17:00:00', concepto: 'gas', importe: 40 },
    { fecha: '2025-10-04 18:00:00', concepto: 'ocio', importe: 70 }
];


const saldo = () => {
    const totalIngresos = ingresos.reduce((acc, ingreso) => acc + ingreso.importe, 0);
    const totalGastos = gastos.reduce((acc, gasto) => acc + gasto.importe, 0);
    return totalIngresos - totalGastos;
};

const totalPorCategoria = (tipo) => {
    const list = tipo === 'ingreso' ? ingresos : gastos;
    return list.reduce((acc, item) => {
        acc[item.concepto] = (acc[item.concepto] || 0) + item.importe;
        return acc;
    }, {});
};

const resumenMensual = (yyyy_mm) => {
    const ingresosFiltrados = ingresos.filter(ingreso => ingreso.fecha.startsWith(yyyy_mm));
    const gastosFiltrados = gastos.filter(gasto => gasto.fecha.startsWith(yyyy_mm));

    const totalIngresos = ingresosFiltrados.reduce((acc, ingreso) => acc + ingreso.importe, 0);
    const totalGastos = gastosFiltrados.reduce((acc, gasto) => acc + gasto.importe, 0);
    
    return {
        ingresos: totalIngresos,
        gastos: totalGastos,
        saldo: totalIngresos - totalGastos
    };
};

const agregarApunte = (tipo, nuevoApunte) => {
    if (tipo === 'ingreso') {
        ingresos.push(nuevoApunte);
    } else if (tipo === 'gasto') {
        gastos.push(nuevoApunte);
    }
};

const editarApunte = (fecha, nuevoApunte) => {
    const index = [...ingresos, ...gastos].findIndex(item => item.fecha === fecha);
    if (index !== -1) {
        if (index < ingresos.length) {
            ingresos[index] = nuevoApunte;
        } else {
            gastos[index - ingresos.length] = nuevoApunte;
        }
    }
};

const borrarApunte = (fecha) => {
    const index = [...ingresos, ...gastos].findIndex(item => item.fecha === fecha);
    if (index !== -1) {
        if (index < ingresos.length) {
            ingresos.splice(index, 1);
        } else {
            gastos.splice(index - ingresos.length, 1);
        }
    }
};

// Menú interactivo
const mostrarMenu = () => {
    console.log(`\n--- Gestión Económica Doméstica ---
1. Agregar nuevo ingreso
2. Agregar nuevo gasto
3. Editar un apunte
4. Borrar un apunte
5. Mostrar saldo
6. Mostrar total por categoría
7. Mostrar resumen mensual
0. Salir
`);
};

const manejarOpcion = (opcion) => {
    switch (opcion) {
        case '1':
            rl.question('Introduzca fecha (yyyy-mm-dd HH:mm:ss): ', (fecha) => {
                rl.question('Concepto: ', (concepto) => {
                    rl.question('Importe: ', (importe) => {
                        agregarApunte('ingreso', { fecha, concepto, importe: parseFloat(importe) });
                        console.log('Ingreso agregado.');
                        solicitarOpcion();
                    });
                });
            });
            break;
        case '2':
            rl.question('Introduzca fecha (yyyy-mm-dd HH:mm:ss): ', (fecha) => {
                rl.question('Concepto: ', (concepto) => {
                    rl.question('Importe: ', (importe) => {
                        agregarApunte('gasto', { fecha, concepto, importe: parseFloat(importe) });
                        console.log('Gasto agregado.');
                        solicitarOpcion();
                    });
                });
            });
            break;
        case '3': 
            editarApunte('apunte');
            break;
        case '4':
            borrarApunte('apunte');
            break;
        case '5':
            saldo();
            break;
        case '6':
            totalPorCategoria();
            break;
        case '7':
            resumenMensual();
            break;
        case '0':
            break;
        }
}