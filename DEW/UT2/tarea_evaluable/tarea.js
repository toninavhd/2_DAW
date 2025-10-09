//En javascript realiza las siguiente actividad:
//Gestionaremos una economía doméstica sencilla. Para ello:
//• Crea uno array de ingreso y gastos con valores iniciales, con el formato del apunte:
//{fecha, concepto, importe}. Usa fecha (yyyy-mm-dd HH:mm:ss) como id.
//• Crear un menú para gestionar:
//◦ Agregar nuevo ingreso o gasto
//◦ Editar un apunte (busca por fecha)
//◦ Borrar un apunte (busca por fecha)
//◦ Mostrar saldo
//◦ Mostrar total por categoría (ingreso o gasto)
//◦ Muestra resumen mensual dada una fecha yyyy-mm
//• Calcular totales y métricas usando map y reduce.
//• Ejecutable con Node. Sin librerías.
//Crea el fichero economia.js.
//1.- Realizar los cálculo (funciones). Uso de map y reduce:
//• saldo() = sum(ingresos) − sum(gastos) con reduce.
//• totalPorCategoria(tipo) → objeto {categoria: total} con reduce. tipo ingreso|gasto
//• resumenMensual(yyyy_mm) filtra por mes y devuelve {ingresos, gastos, saldo} usando
//reduce.
//• lineasFormateadas() devuelve array de strings con map tipo "2025-10-05 | compra | gasto |
//super | -23.40€".
//2.- Prueba a realizar:
//• Crea al menos 5 apuntes variados.
//• Editar apunte y modificarlo.
//• Borrar apunte.
//• Muestra saldo().
//• Muestra totalPorCategoria("gasto").
//• Muestra resumenMensual("2025-10").

// economia.js

const ingresos = [
    { fecha: '2025-10-01 10:00:00', concepto: 'sueldo', importe: 1500 },
    { fecha: '2025-10-05 12:00:00', concepto: 'dividendos', importe: 300 }
];

const gastos = [
    { fecha: '2025-10-02 15:00:00', concepto: 'supermercado', importe: 50 },
    { fecha: '2025-10-03 17:00:00', concepto: 'gas', importe: 40 },
    { fecha: '2025-10-04 18:00:00', concepto: 'ocio', importe: 70 }
];

// Función para calcular el saldo
const saldo = () => {
    const totalIngresos = ingresos.reduce((acc, ingreso) => acc + ingreso.importe, 0);
    const totalGastos = gastos.reduce((acc, gasto) => acc + gasto.importe, 0);
    return totalIngresos - totalGastos;
};

// Función para calcular el total por categoría
const totalPorCategoria = (tipo) => {
    const list = tipo === 'ingreso' ? ingresos : gastos;
    return list.reduce((acc, item) => {
        acc[item.concepto] = (acc[item.concepto] || 0) + item.importe;
        return acc;
    }, {});
};

// Función para obtener resumen mensual
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

// Función que retorna líneas formateadas
const lineasFormateadas = () => {
    const todos = [...ingresos.map(i => ({ ...i, tipo: 'ingreso' })), ...gastos.map(g => ({ ...g, tipo: 'gasto' }))];
    return todos.map(item => `${item.fecha} | ${item.concepto} | ${item.tipo} | ${item.importe}€`);
};

// Agregar entradas y salidas a los arrays
const agregarApunte = (tipo, nuevoApunte) => {
    if (tipo === 'ingreso') {
        ingresos.push(nuevoApunte);
    } else if (tipo === 'gasto') {
        gastos.push(nuevoApunte);
    }
};

// Editar un apunte por fecha
const editarApunte = (fecha, nuevoApunte) => {
    const index = [...ingresos, ...gastos].findIndex(item => item.fecha === fecha);
    if (index !== -1) {
        if (index < ingresos.length) {
            ingresos[index] = nuevoApunte;
        } else {
            const gastoIndex = index - ingresos.length;
            gastos[gastoIndex] = nuevoApunte;
        }
    }
};

const borrarApunte = (fecha) => {
    const index = [...ingresos, ...gastos].findIndex(item => item.fecha === fecha);
    if (index !== -1) {
        if (index < ingresos.length) {
            ingresos.splice(index, 1);
        } else {
            const gastoIndex = index - ingresos.length;
            gastos.splice(gastoIndex, 1);
        }
    }
};

