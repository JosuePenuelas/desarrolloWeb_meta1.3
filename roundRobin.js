let lineasDeCodigo = ["a = 1 + 2", "console.log('1+2')", "console.log(a)", "Hola"];
let listaProcesos = [];

N = process.argv[2];

function elegirLineas(proceso) {
    numLineas = Math.floor(Math.random() * 4);
    for (let i = 0; i <= numLineas; i++) {
        proceso.arregloCadena.push(lineasDeCodigo[Math.floor(Math.random() * 4)]);
    }
}

function inicializarSimulacion(N, listaProcesos) {
    for (let i = 0; i < N; i++) {
        listaProcesos.push(proceso = { id: (i + 1), arregloCadena: [] });
        elegirLineas(listaProcesos[i]);
    }
}

function empezarSimulacion(listaProcesos) {
    b = false;
    while (b == false) {
        for (let i = 0; i < listaProcesos.length; i++) {
            console.log(`Proceso ${listaProcesos[i].id}`);
            cadena = listaProcesos[i].arregloCadena.shift();
            if (cadena == undefined) {
                console.log(`Terminado`);
            } else {
                console.log(`Línea de código: ${cadena}`);
            }
        }

        b = verificarListasVacias(listaProcesos);
    }
}

function verificarListasVacias(listaProcesos) {
    b = true;
    for (let i = 0; i < listaProcesos.length; i++) {
        if (listaProcesos[i].arregloCadena.length == 0) {
            b = true;
        } else {
            b = false;
            break;
        }
    }

    return b;
}

inicializarSimulacion(N, listaProcesos);
console.log(listaProcesos);
empezarSimulacion(listaProcesos);