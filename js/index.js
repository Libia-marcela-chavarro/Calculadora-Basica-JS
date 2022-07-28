var visor = document.getElementById("VisorCalculadora");4
var primerTermino = "";
var segundoTermino = "";
var operacion = "";

function calcularOperacion(){
    segundoTermino = visor.value;
    switch(operacion) {
        
        case '-': visor.value = restar(primerTermino, segundoTermino);
            break;
        case '*': visor.value = multiplicar(primerTermino, segundoTermino);
            break;
        case '/': visor.value = dividir(primerTermino, segundoTermino);
            break;
        case '+': visor.value = sumar(primerTermino, segundoTermino);
            break;
    }
    console.log(segundoTermino);
}
function invertirSignoTermino(){
    if(visor.value>0){
        visor.value =visor.value*-1;

    }else{
        visor.value = visor.value*-1;
    }
    console.log(visor.value);
}

function sumar(num1, num2) {
    return parseInt(num1,10) + parseInt(num2,10);
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

