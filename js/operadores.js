
function limpiarVisor() {
   visor.value = "0";
}

function ponerOperacion(opc){
    primerTermino = visor.value;
    operacion = opc;
    limpiarVisor();
    console.log(primerTermino);
}

function ponerPuntoDecimal(){
    if(!visor.value.includes(".")){
        visor.value += ".";
    }
}