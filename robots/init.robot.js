var _ = require('../modules/functions.module.js');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

async function initRobot() {
    const r = {};

    // Pegar Barra de Valor
    await readline.question("Coloque o mouse em cima do valor de lance");
    r.posValue = getMousePosition();
    // Pegar botao verde
    await readline.question("Coloque o mouse em cima do botão verde");
    r.buttonUp = getMousePosition();
    // pegar ranged do resultado (2)
    await readline.question("Coloque o mouse em cima do topo da linha que pega o resultado");
    r.topResponse = getMousePosition();
    await readline.question("Coloque o mouse em cima da borda da linha que pega o resultado");
    r.bottomResponse = getMousePosition();
    // pegar valor atual (%)
    r.porcent = await readline.question("Qual a porcentagem atual");

    readline.close();

    return r;
}

module.exports = initRobot;