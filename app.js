let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentivas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto :D com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if ( chute > numeroSecreto){
            exibirTextoNaTela ('p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela ('p', 'O numero secreto é maior');
        }
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random () * 10 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if ( quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value= '';
}

function reiniciarJogo(){
    numeroSecreto=gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById ('reiniciar').setAttribute('disabled'), true;
}

/*function saudacao(){
    console.log('Olá mundo')
}

saudacao();

function saudacao2(nome){
    console.log(`Olá, ${nome}`);
}

saudacao2("Vieira");

function numeroDobro(numero){
    return numero * 2;
}
let resultadoDobro = numeroDobro(5);
console.log(`O dobro do valor é ${resultadoDobro}`);    

function mediaNum(a, b, c){
    return (a + b + c) / 3;
}
let media = mediaNum (4 , 7, 8);
console.log("Media: "+ media);

function maiouOuMenor(numA, numB){
    return numA > numB ? numA : numB;
}

let maiorNumero = maiouOuMenor(15,9);
console.log("O maior numero é " + maiorNumero);

function quadrado(numero){
    return numero * numero;
}

let resultado = quadrado(2);
console.log(resultado);

function valores(altura, peso){
    return peso / (altura * altura);
}

let mediaImc = valores(1.80, 88.65);
console.log(`Seu IMC é de: ` + mediaImc);

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);

function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
  }
  let valorEmDolar = 50;
  let valorEmReais = converterDolarParaReal(valorEmDolar);
  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

  function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }

  let altura = 3; // em metros
  let largura = 5; // em metros
  calcularAreaPerimetroSalaRetangular(altura, largura);

  function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  // Exemplo de uso
  let raio = 4; // em metros
  calcularAreaPerimetroSalaCircular(raio);
  

  function mostrarTabuada(numeroA) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numeroA * i;
      console.log(`${numeroA} x ${i} = ${resultado}`);
    }
  }
  
  let numeroA = 7;
  mostrarTabuada(numeroA);


  let listaGenerica = [];

  let linguaguemDeProgramacao = ['JavaScript','C', 'C++', 'Kotlin', 'Python'];
  linguaguemDeProgramacao.push('Java', 'Ruby', 'GoLang');
  console.log(linguaguemDeProgramacao);

  let listaDeNomes = ['Vieira', 'Oliveira', 'Silva'];
  console.log(listaDeNomes[0]);

  let listaDeNomesB = ['Vieira', 'Oliveira', 'Silva'];
  console.log(listaDeNomesB[1]);

  let listaDeNomesC = ['Vieira', 'Oliveira', 'Silva'];
  console.log(listaDeNomesC[2]);*/