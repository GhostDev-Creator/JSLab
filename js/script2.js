/**
 * @type {number[]} Vetor que armazena números adicionados manualmente pelo usuário.
 */
let vetorNumerosAdd = [];

/**
 * @type {number[]} Vetor numérico padrão para operações de manipulação.
 */
let vetorNumerosRFD = [5, 6, 9, 5, 10, 6, 32, 4, 1, 8];

/**
 * Inicializa a exibição de dados e funções automáticas ao carregar a página.
 */
window.onload = () => {
    const res2 = document.getElementById("res-2");
    if(res2) res2.textContent = vetorNumerosRFD.join(", ");
    executarSomaPares();
};

/**
 * // 1. Adicionar ao Vetor
 */
function adicionarValorVetor() {
    let campo = document.getElementById("numeroAddVetor");
    if (campo.value !== "") {
        vetorNumerosAdd.push(Number(campo.value));
        document.getElementById("res-1").textContent = vetorNumerosAdd.join(", ");
        campo.value = "";
    }
}

/**
 * // 2. Remover Último
 */
function removerUltimoValorVetor() {
    vetorNumerosRFD.pop();
    document.getElementById("res-2").textContent = vetorNumerosRFD.join(", ");
}

/**
 * // 3. Filtrar Vetor
 */
function filtrarNumeroVetor() {
    let valor = Number(document.getElementById("numeroFiltrarVetor").value);
    let filtrados = vetorNumerosRFD.filter(n => n > valor);
    document.getElementById("res-3").textContent = filtrados.join(", ");
}

/**
 * // 4. Dobrar Valores
 */
function dobrarValorVetor() {
    let dobro = vetorNumerosRFD.map(n => n * 2);
    document.getElementById("res-4").textContent = dobro.join(", ");
}

/**
 * @type {Array<{nome: string, nota: number}>} Lista de alunos para busca simples.
 */
let objectAlunos = [
    { nome: "Joao", nota: 8 },
    { nome: "Emily", nota: 10 },
    { nome: "Laura", nota: 10 },
    { nome: "Sophia", nota: 8 },
    { nome: "Hudson", nota: 7 },
];

/**
 * // 5. Buscar Aluno Simples
 */
function buscarAlunoSimples() {
    let nomeDigitado = document.getElementById("campoNomeVetor").value;
    let aluno = objectAlunos.find(a => a.nome.toLowerCase() === nomeDigitado.toLowerCase());
    let resultado = document.getElementById("res-5");
    resultado.textContent = aluno ? `Nota: ${aluno.nota}` : "Aluno não encontrado";
}

/** // 6. Lista de Frutas (DOM) */
let vetorFrutas = ["Maçã", "Banana", "Uva", "Morango", "Tomate"];
const listaUl = document.getElementById("listaForEach");

if(listaUl) {
    vetorFrutas.forEach(fruta => {
        const li = document.createElement('li');
        li.textContent = fruta;
        listaUl.appendChild(li);
    });
}

/**
 * // 7. Soma Pares
 */
function executarSomaPares() {
    let vetorNumeros = [10, 15, 20, 25, 30];
    let soma = 0;
    vetorNumeros.forEach(num => { if (num % 2 === 0) soma += num; });
    let container = document.getElementById("somaNumerosVetor");
    if(container) container.textContent = "Soma dos pares: " + soma;
}

/** // 8. Gerenciador de Frutas */
let frutasCadastradas = [];

function cadastrarFrutas() {
    let campo = document.getElementById("digitarFrutas").value;
    if(campo) {
        let novas = campo.split(',').map(f => f.trim());
        frutasCadastradas.push(...novas);
        document.getElementById("digitarFrutas").value = "";
    }
}

function listarFrutas() {
    const container = document.getElementById("listaDadosFrutas");
    container.innerHTML = frutasCadastradas.map(f => `<span>${f}</span>`).join(" | ");
}
