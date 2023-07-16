const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima: '));
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (inputNotaAtividade.value === '') {
        alert('Por favor, preencha a nota da atividade.');
        return;
    }

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNotaAtividade.value = '';
    inputNomeAtividade.value = '';
}

function atualizaTabela() {const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima: '));
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (inputNotaAtividade.value === '') {
        alert('Por favor, preencha a nota da atividade.');
        return;
    }

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNotaAtividade.value = '';
    inputNomeAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();
    const mediaFinalValor = document.querySelector('tfoot tr td:nth-child(2)');
    const mediaFinalResultado = document.querySelector('tfoot tr td:nth-child(3)');
    mediaFinalValor.innerHTML = mediaFinal;
    mediaFinalResultado.innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
    console.log(mediaFinal);
}

function calculaMediaFinal() {
    let somaDasNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    const media = somaDasNotas / notas.length;
    return media.toFixed(2);
}

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();
    const mediaFinalValor = document.querySelector('tfoot tr td:nth-child(2)');
    const mediaFinalResultado = document.querySelector('tfoot tr td:nth-child(3)');
    mediaFinalValor.innerHTML = mediaFinal;
    mediaFinalResultado.innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
    console.log(mediaFinal);
}

function calculaMediaFinal() {
    let somaDasNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    const media = somaDasNotas / notas.length;
    return media.toFixed(2);
}
