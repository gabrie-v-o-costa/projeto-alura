

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numSecreto = gerarNumeroAletorio();
let tentativa = 1;

let nomeUsuario = prompt("Antes de Comerçar, me diga, qual é seu nome?");

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function mensagemInicial(){

    exibirTextoNaTela('h1', `Bem vindo ${nomeUsuario}, Vamos Começar?`);
    exibirTextoNaTela('p', `Escolha um número de 01 a ${numeroLimite}`);

}

mensagemInicial()

function verificarChute() {
    
    let chute = document.querySelector('input').value;

        if(chute == numSecreto){

            exibirTextoNaTela('h1',`Parabéns ${nomeUsuario}, você ganhou!`);

            let palavraTentativa = tentativa > 1? "tentativas" : "tentativa";
            let mensagemTentativa = (`Você acertou, o número era ${numSecreto}. Usou ${tentativa} ${palavraTentativa}`)

            exibirTextoNaTela('p',mensagemTentativa);
            document.getElementById('reiniciar').removeAttribute('disabled')
            
        } else 

            if(chute > numSecreto){
                exibirTextoNaTela('p',`O número é menor que ${chute}, tente de novo`);

            }   else
                exibirTextoNaTela('p',`O número é maior que ${chute}, tente de novo`);

           tentativa++;
           limparCampo();
    
}


function gerarNumeroAletorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAletorio();
   }else 
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;

}

function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
}

function reiniciarJogo() {
    numSecreto = gerarNumeroAletorio();
    limparCampo();
    tentativa = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}