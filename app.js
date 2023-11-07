let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

console.log(numeroSecreto);

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
 }

 function exibirMensagemInicial() {
   exibirTexto('h1', 'Jogo do número secreto');
   exibirTexto('p', 'Escolha um número entre 1 e 10');
 }

 exibirMensagemInicial();

 function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
      exibirTexto('h1', 'Acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativa = `Você descubriu o número secreto, com ${tentativas} ${palavraTentativa}`
      exibirTexto('p', mensagemTentativa);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if (chute > numeroSecreto) {
         exibirTexto('p', 'O número secreto é menor');
      } else {
         exibirTexto('p', 'O número secreto é maior');
      }
      tentativas++ ;
      limparCampo();
    }
 } 

 function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
 }

 function limparCampo() {
   chute = document.querySelector('input');
   chute.value = '';
 }

 function reiniciarJogo() {
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
 }