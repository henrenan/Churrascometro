//carne - 400g por pessoa + de 6 horas = 650
// cerveja - 1200ml por pessoa + horas - 2000ml
// refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml
// criança vale 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")

function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);
    let qdtTotalCeveja = cervejaPP(duracao) * adultos;

    resultado.innerHTML = `<p style="color:white" font-size:25px;>${qdtTotalCarne/1000} kg de Carne</p>`
    resultado.innerHTML += `<p style="color:white">${Math.ceil(qdtTotalCeveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p style="color:white">${Math.ceil(qdtTotalBebida/2000)} Garrafas Pet's de 2l</p>`
    
}

function carnePP(duracao){
    if(duracao >= 6){
        return  650;
    }else{
        return 400;
    }   
}
function cervejaPP(duracao){
    if(duracao >= 6){
        return  200;
    }else{
        return 1200;
    }   
}
function bebidaPP(duracao){
    if(duracao >= 6){
        return  1500;
    }else{
        return 1000;
    }   
}




 