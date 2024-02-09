let lineasDeCodigo = ["a = 1 + 2", "console.log('1+2')", "console.log(a)", "Hola"];
let listaProcesos = [];
let numSimulacion = 0;

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
    document.getElementById(`tabla`).innerHTML += "<tr>" + 
    "<th>" + `Simulación ${numSimulacion}` + "</th>" + "</tr>";
    while (b == false) {
        for (let i = 0; i < listaProcesos.length; i++) {
            console.log(`Proceso ${listaProcesos[i].id}`);
            cadena = listaProcesos[i].arregloCadena.shift();
            if (cadena == undefined) {
                console.log(`Terminado`);
                document.getElementById(`tabla`).innerHTML += "<tr>" +
                    "<td>" + listaProcesos[i].id + "</td>" +
                    "<td>" + "Terminado" + "</td>" +
                    "</tr>";
            } else {
                console.log(`Línea de código: ${cadena}`);
                document.getElementById(`tabla`).innerHTML += "<tr>" +
                    "<td>" + listaProcesos[i].id + "</td>" +
                    "<td>" + cadena + "</td>" +
                    "</tr>";
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

function realizarBoton() {
    numSimulacion++;
    N = document.getElementsByName("numProcesos")[0].value;
    inicializarSimulacion(N, listaProcesos);
    console.log(listaProcesos);
    empezarSimulacion(listaProcesos);
    listaProcesos = [];
}