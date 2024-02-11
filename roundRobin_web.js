let lineasDeCodigo = ["a = 1 + 2", "console.log('1+2')", "console.log(a)", "Hola"];
let listaProcesos = [];
let numSimulacion = 0;

//Está función selecciona el número de líneas y que lineas tomara del arreglo predefinido
function elegirLineas(proceso) {
    numLineas = Math.floor(Math.random() * 4);
    for (let i = 0; i <= numLineas; i++) {
        proceso.arregloCadena.push(lineasDeCodigo[Math.floor(Math.random() * 4)]);
    }
}

//Está función crea los procesos en base al número dado por el usuario y llama a la función elegir líneas para crear su arreglo de cadenas
function inicializarSimulacion(N, listaProcesos) {
    for (let i = 0; i < N; i++) {
        listaProcesos.push(proceso = { id: (i + 1), arregloCadena: [] });
        elegirLineas(listaProcesos[i]);
    }
}

//Está función lleva a cabo la simulación de round robin mostrando las cadenas de sus arreglos de cada procesos en orden consecutivo hasta que acabe con todos
//Se llama a la función verificasListasVacias para verificar si los procesos tiene cadenas que mostrar o no para terminar la simulación
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

//Está función verifica si todos los procesos tienen sus arreglos de cadenas vacíos
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

//Esta función sirve para llevar todo el proceso desde el html, mediante un botón y recibe el valor de un campo de que se encuentra en el mismo html
function realizarBoton() {
    numSimulacion++;
    N = document.getElementsByName("numProcesos")[0].value;
    inicializarSimulacion(N, listaProcesos);
    console.log(listaProcesos);
    empezarSimulacion(listaProcesos);
    listaProcesos = [];
}