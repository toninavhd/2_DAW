
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let apuntes = [];

function menu() {
    console.log(" ﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌ ");
    console.log(" ﹌﹌﹌             M e n ú          ﹌﹌﹌");
    console.log("  ﹌﹌                                ﹌﹌ ");
    console.log("﹌﹌﹌ 1.Agregar nuevo ingreso o gasto﹌﹌﹌");
    console.log("  ﹌﹌                                ﹌﹌ ");
    console.log("﹌﹌﹌ 2.       Editar un apunte      ﹌﹌﹌");
    console.log("  ﹌﹌                                ﹌﹌ ");
    console.log("﹌﹌﹌ 3.       Borrar un apunte      ﹌﹌﹌");
    console.log("  ﹌﹌                                ﹌﹌ ");
    console.log("﹌﹌﹌ 4.       Mostrar saldo         ﹌﹌﹌");
    console.log("  ﹌﹌                                ﹌﹌ ");
    console.log("﹌﹌﹌ 5. Mostrar total por categoría ﹌﹌﹌");
    console.log("  ﹌﹌                                ﹌﹌ ");
    console.log("﹌﹌﹌ 6. Mostrar resumen mensual     ﹌﹌﹌");
    console.log("  ﹌﹌                                ﹌﹌ ");
    console.log("﹌﹌﹌ 7.            Salir            ﹌﹌﹌");
    console.log("  ﹌﹌                                ﹌﹌ ");
    console.log("﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌ ");
    rl.question("Elige una opción: ", opcion => {
        manejarOpcion(opcion);
    });
}

function manejarOpcion(opcion) {
    switch (opcion) {
        case '1':
            agregarApunte();
            break;
        case '2':
            editarApunte();
            break;
        case '3':
            borrarApunte();
            break;
        case '4':
            mostrarSaldo();
            break;
        case '5':
            mostrarTotalPorCategoria();
            break;
        case '6':
            mostrarResumenMensual();
            break;
        case '7':
            console.log("Saliendo...");
            rl.close();
            break;
        default:
            console.log("Opción no válida.");
            menu();
    }
}

function agregarApunte() {
    rl.question("Fecha (yyyy-mm-dd HH:mm:ss): ", fecha => {
        rl.question("Concepto: ", concepto => {
            rl.question("Importe: ", importe => {
                rl.question("Tipo (ingreso/gasto): ", tipo => {
                    apuntes.push({ fecha, concepto, importe: parseFloat(importe), tipo });
                    console.log("Apunte agregado.");
                    menu();
                });
            });
        });
    });
}

function editarApunte() {
    rl.question("Fecha del apunte a editar: ", fecha => {
        const apunte = apuntes.find(a => a.fecha === fecha);
        if (apunte) {
            rl.question("Nuevo concepto: ", nuevoConcepto => {
                rl.question("Nuevo importe: ", nuevoImporte => {
                    apunte.concepto = nuevoConcepto;
                    apunte.importe = parseFloat(nuevoImporte);
                    console.log("Apunte editado.");
                    menu();
                });
            });
        } else {
            console.log("Apunte no encontrado.");
            menu();
        }
    });
}

function borrarApunte() {
    rl.question("Fecha del apunte a borrar: ", fecha => {
        apuntes = apuntes.filter(a => a.fecha !== fecha);
        console.log("Apunte borrado.");
        menu();
    });
}

function mostrarSaldo() {
    const totalIngresos = apuntes.filter(a => a.tipo === 'ingreso').reduce((acc, a) => acc + a.importe, 0);
    const totalGastos = apuntes.filter(a => a.tipo === 'gasto').reduce((acc, a) => acc + a.importe, 0);
    const saldo = totalIngresos + totalGastos; // Gasto es negativo
    console.log(`Saldo total: ${saldo}€`);
    menu();
}

function mostrarTotalPorCategoria() {
    rl.question("Tipo (ingreso/gasto): ", tipo => {
        const total = apuntes.filter(a => a.tipo === tipo)
            .reduce((acc, a) => acc + a.importe, 0);
        console.log(`Total ${tipo}: ${total}€`);
        menu();
    });
}

function mostrarResumenMensual() {
    rl.question("Fecha (yyyy-mm): ", yyyy_mm => {
        const resumen = apuntes.filter(a => a.fecha.startsWith(yyyy_mm))
            .reduce((acc, a) => {
                if (a.tipo === 'ingreso') {
                    acc.ingresos += a.importe;
                } else {
                    acc.gastos += a.importe;
                }
                return acc;
            }, { ingresos: 0, gastos: 0 });
        console.log(`Resumen para ${yyyy_mm}: Ingresos: ${resumen.ingresos}€ | Gastos: ${resumen.gastos}€`);
        menu();
    });
}

menu();
