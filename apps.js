function reiniciar(){
    document.getElementById('number_one').value = ""
    document.getElementById('number_two').value = ""
    document.getElementById('valor').innerHTML = "Resultado...";
}

function adicionar(){
    let n1 = Number(document.getElementById('number_one').value);
    let n2 = Number(document.getElementById('number_two').value);
    let resultado = n1 + n2;
    document.getElementById('valor').innerHTML = `${resultado}`
}

function subtração(){
    let n1 = Number(document.getElementById('number_one').value);
    let n2 = Number(document.getElementById('number_two').value);
    let resultado = n1 - n2;
    document.getElementById('valor').innerHTML = `${resultado}`
}

function divisão(){
    let n1 = Number(document.getElementById('number_one').value);
    let n2 = Number(document.getElementById('number_two').value);
    let resultado = n1 / n2;
    document.getElementById('valor').innerHTML = `${resultado}`
}

function multiplicação(){
    let n1 = Number(document.getElementById('number_one').value);
    let n2 = Number(document.getElementById('number_two').value);
    let resultado = n1 * n2;
    document.getElementById('valor').innerHTML = `${resultado}`
}