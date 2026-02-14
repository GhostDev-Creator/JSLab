// 1. Positivo ou Negativo
function validarPosNeg() {
    let numero = document.getElementById('numeroPosNeg');
    if (numero instanceof HTMLInputElement) {
        let numeroValor = Number(numero.value);
        let saida = document.getElementById('res-1');
        if(numeroValor > 0){
            saida.textContent = 'O valor é positivo.'
        } else if (numeroValor < 0 ){
            saida.textContent = 'O valor é negativo.'
        } else {
            saida.textContent = 'O valor é zero.'
        }
    }
}

// 2. Número = Mês
function validarMes() {
    let mes = document.getElementById('mesInput');
    if (mes instanceof HTMLInputElement) {
        let mesValor = Number(mes.value);
        let saida = document.getElementById('res-2');
        switch(mesValor){
            case 1: saida.textContent = 'Janeiro'; break;
            case 2: saida.textContent = 'Fevereiro'; break;
            case 3: saida.textContent = 'Março'; break;
            case 4: saida.textContent = 'Abril'; break;
            case 5: saida.textContent = 'Maio'; break;
            case 6: saida.textContent = 'Junho'; break;
            case 7: saida.textContent = 'Julho'; break;
            case 8: saida.textContent = 'Agosto'; break;
            case 9: saida.textContent = 'Setembro'; break;
            case 10: saida.textContent = 'Outubro'; break;
            case 11: saida.textContent = 'Novembro'; break;
            case 12: saida.textContent = 'Dezembro'; break;
            default: saida.textContent = 'Não existe'; break;
        }
    }
}

// 3. Ano = Bissexto
function validarAno() {
    let ano = document.getElementById('anoInput');
    if (ano instanceof HTMLInputElement) {
        let anoValor = Number(ano.value);
        let saida = document.getElementById('res-3');
        if(anoValor % 4 == 0) {
            saida.textContent = 'O ano é bissexto.'
        } else {
            saida.textContent = 'O ano não é bissexto.'
        }
    }
}

// 4. Triângulo
function validarLados() {
    let numeroA = document.getElementById('ladoAInput');
    let numeroB = document.getElementById('ladoBInput');
    let numeroC = document.getElementById('ladoCInput');
    if (numeroA instanceof HTMLInputElement && numeroB instanceof HTMLInputElement && numeroC instanceof HTMLInputElement) {
        let numeroAValor = Number(numeroA.value);
        let numeroBValor = Number(numeroB.value);
        let numeroCValor = Number(numeroC.value);
        let saida = document.getElementById('res-4');
        if(numeroAValor === numeroBValor && numeroAValor === numeroCValor) {
            saida.textContent = 'O triângulo é equilátero.'
        } else if(numeroAValor === numeroBValor || numeroAValor === numeroCValor || numeroBValor === numeroCValor) {
            saida.textContent = 'O triângulo é isósceles.'
        } else {
            saida.textContent = 'O triângulo é escaleno.'
        }
    }
}

// 5. Nota
function validarNota() {
    let nota = document.getElementById('notaInput');
    if (nota instanceof HTMLInputElement) {
        let notaValor = Number(nota.value);
        let saida = document.getElementById('res-5');
        if(notaValor >= 5) {
            saida.textContent = 'O aluno foi aprovado.'
        } else if(notaValor < 3) {
            saida.textContent = 'O aluno foi reprovado.'
        } else {
            saida.textContent = 'O aluno está de recuperação.'
        }
    }
}

// 6. Palíndromo
function validarPalindromo() {
    let inputPalavra = document.getElementById('palavraInput');
    let palavra = inputPalavra.value;
    let palavraInvertida = palavra.split("").reverse().join("");
    if(palavra === palavraInvertida){
        alert('A palavra é um palíndromo.');
    } else {
        alert('A palavra não é um palíndromo.');
    }
}

// 7. Idade Maior/Menor
function validarIdade_7() {
    let idade = document.getElementById('idadeInput_7');
    if (idade instanceof HTMLInputElement) {
        let idadeValor = Number(idade.value);
        let saida = document.getElementById('res-7');
        if(idadeValor >= 18){
            saida.textContent = 'O usuário é maior de idade.'
        } else {
            saida.textContent = 'O usuário é menor de idade.'
        }
    }
}

// 8. Positivo/Negativo/Zero
function validarNumero_8() {
    let numero = document.getElementById('numeroInput_8');
    if (numero instanceof HTMLInputElement) {
        let numeroValor = Number(numero.value);
        let saida = document.getElementById('res-8');
        if(numeroValor > 0){
            saida.textContent = 'O valor é positivo.'
        } else if (numeroValor < 0 ){
            saida.textContent = 'O valor é negativo.'
        } else {
            saida.textContent = 'O valor é zero.'
        }
    }
}

// 9. Aprovado/Reprovado
function validarNota_9() {
    let nota = document.getElementById('notaInput_9');
    if (nota instanceof HTMLInputElement) {
        let notaValor = Number(nota.value);
        let saida = document.getElementById('res-9');
        if(notaValor >= 6){
            saida.textContent = 'O aluno foi aprovado.'
        } else {
            saida.textContent = 'O aluno foi reprovado.'
        }
    }
}

// 10. Par/Ímpar
function validarNumero_10() {
    let numero = document.getElementById('numeroInput_10');
    if (numero instanceof HTMLInputElement) {
        let numeroValor = Number(numero.value);
        let saida = document.getElementById('res-10');
        if(numeroValor % 2 == 0){
            saida.textContent = 'O número é par.'
        } else {
            saida.textContent = 'O número é ímpar.'
        }
    }
}

// 11. Maior que outro
function validarMaior_11() {
    let numeroA = document.getElementById('numeroAInput_11');
    let numeroB = document.getElementById('numeroBInput_11');
    if (numeroA instanceof HTMLInputElement && numeroB instanceof HTMLInputElement) {
        let nA = Number(numeroA.value);
        let nB = Number(numeroB.value);
        let saida = document.getElementById('res-11');
        if(nA > nB){
            saida.textContent = nA + ' é maior que ' + nB + '.';
        } else {
            saida.textContent = nB + ' é maior ou igual a ' + nA + '.';
        }
    }
}

// 12. Desconto
function validarDesconto_12() {
    let valor = document.getElementById('valorInput_12');
    if (valor instanceof HTMLInputElement) {
        let vVal = Number(valor.value);
        let saida = document.getElementById('res-12');
        if(vVal >= 100){
            let final = vVal - (vVal * 0.10);
            saida.textContent = "Valor final com desconto: " + final;
        } else {
            saida.textContent = "Valor: " + vVal;
        }
    }
}

// 13. Senha
function validarSenha_13() {
    let senha = document.getElementById('senhaInput_13');
    if (senha instanceof HTMLInputElement) {
        let senhaValor = Number(senha.value);
        let senhaCorreta = 1234;
        let saida = document.getElementById('res-13');
        if(senhaValor === senhaCorreta){
            saida.textContent = 'Acesso permitido.'
        } else {
            saida.textContent = 'Acesso negado.'
        }
    }
}

// 14. Faixa Etária
function validarIdade_14() {
    let idade = document.getElementById('idadeInput_14');
    if (idade instanceof HTMLInputElement) {
        let idadeValor = Number(idade.value);
        let saida = document.getElementById('res-14');
        if(idadeValor > 0 && idadeValor <= 12){
            saida.textContent = 'O usuário é criança.'
        } else if (idadeValor >= 13 && idadeValor <= 17 ) {
            saida.textContent = 'O usuário é adolescente.'
        } else {
            saida.textContent = 'O usuário é adulto.'
        }
    }
}

// 15. Nota Letra
function validarNota_15() {
    let nota = document.getElementById('notaInput_15');
    if (nota instanceof HTMLInputElement) {
        let notaValor = Number(nota.value);
        let saida = document.getElementById('res-15');
        if(notaValor < 5){
            saida.textContent = 'Nota: D.'
        } else if (notaValor < 7){
            saida.textContent = 'Nota: C.'
        } else if (notaValor < 9){
            saida.textContent = 'Nota: B.'
        } else {
            saida.textContent = 'Nota: A.'
        }
    }
}

// 16. Votação
function validarIdade_16() {
    let idade = document.getElementById('idadeInput_16');
    if (idade instanceof HTMLInputElement) {
        let idadeValor = Number(idade.value);
        let saida = document.getElementById('res-16');
        if(idadeValor >= 16){
            saida.textContent = 'O usuário pode votar.'
        } else {
            saida.textContent = 'O usuário não pode votar.'
        }
    }
}