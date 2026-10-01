function calcularImc() {

    const nome = document.getElementById('txtNome').value;

    const peso = document.getElementById('numPesoId').value;

    const altura = document.getElementById('numAlturaId').value;

    //Calcular o IMC
    const calculoImc = peso / altura ** 2;

    //Classificar o IMC
    let classificacao;

    if (calculoImc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (calculoImc < 25) {
        classificacao = "Peso Ideal";
    } else if (calculoImc < 30) {
        classificacao = "SobrePeso";
    } else {
        classificacao = "Obeso";
    }


    const resultadoDiv = document.getElementById('resultado');

    resultadoDiv.innerHTML = `
    <h3>Paciente: ${nome}<h3>
    <h3>IMC: ${calculoImc.toFixed(2)}<h3>   
    <h3>Classificação: ${classificacao}<h3> ` ;

}