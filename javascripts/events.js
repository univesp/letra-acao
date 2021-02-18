$(document).ready(function() {

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

  $(window).scroll(function() {
    var nav = $(".header-dinamico .container");
    var scroll = $(window).scrollTop();
    if (scroll == 0) {
      nav.fadeIn();
    } else {
      nav.fadeOut();
    }
  });
})

//////////////////////////////////////////////////////////////////


// Seu código abaixo

//Drag and drop.

function atualizaTela9() {
  let blq = document.querySelectorAll('#tela9 .bloquinho');
  let box = document.querySelectorAll('#tela9 .caixaArrastaDestino > div:nth-of-type(1)');
  let i = 0;
  for (var x in caixa1) {

    lbl1 = blq[i].querySelectorAll('div:nth-of-type(1)')[0];
    img = blq[i].querySelectorAll('img')[0];
    lbl1.innerHTML = caixa1[x].encaixado;
    img.src = 'assets/' + caixa1[x].src;
    if (caixa1[x].certo) {
      revela(blq[i].querySelectorAll('.acertou')[0])
      blq[i].parentElement.parentElement.classList.add('acerto');
      blq[i].parentElement.parentElement.dataset.tipo = blq[i].parentElement.parentElement.querySelectorAll('div:nth-of-type(1)')[0].innerHTML;
    } else {
      revela(blq[i].querySelectorAll('.errou')[0]);
      blq[i].parentElement.parentElement.classList.add('erro');
      blq[i].parentElement.parentElement.dataset.tipo = blq[i].parentElement.parentElement.querySelectorAll('div:nth-of-type(1)')[0].innerHTML;
    }
    i++;
  }
}

function atualizaTela11() {
  let blq = document.querySelectorAll('#tela11 .bloquinho');
  let box = document.querySelectorAll('#tela11 .caixaArrastaDestino > div:nth-of-type(1)');
  let i = 0;
  for (var x in caixa2) {
    lbl1 = blq[i].querySelectorAll('div:nth-of-type(1)')[0];
    img = blq[i].querySelectorAll('img')[0];
    nome2 = blq[i].querySelectorAll('div:nth-of-type(2)')[0];
    lbl1.innerHTML = caixa2[x].encaixado;
    nome2.innerHTML = caixa2[x].nome2;
    img.src = 'assets/' + caixa2[x].src;
    if (caixa2[x].certo) {
      revela(blq[i].querySelectorAll('.acertou')[0])
      blq[i].parentElement.parentElement.classList.add('acerto');
      blq[i].parentElement.parentElement.dataset.tipo = blq[i].parentElement.parentElement.querySelectorAll('div:nth-of-type(1)')[0].innerHTML;
    } else {
      revela(blq[i].querySelectorAll('.errou')[0]);
      blq[i].parentElement.parentElement.classList.add('erro');
      blq[i].parentElement.parentElement.dataset.tipo = blq[i].parentElement.parentElement.querySelectorAll('div:nth-of-type(1)')[0].innerHTML;
    }
    i++;
  }
}

function botaoNav() {
  revela(document.getElementById(this.dataset.destino));
  esconde(document.getElementById(this.dataset.origem));
  setTimeout(function() {
    scrollTop();
  }, 400);
}

function revela(e) {
  $(e).fadeIn();
  e.style.display = 'flex';
}

function esconde(e) {
  $(e).fadeOut();
}

function escondeCertoErrado(e) {
  let errou = '';
  let acertou = '';
  let blq = '';
  if (e == '1') {
    errou = document.querySelectorAll('#tela9 .errou');
    acertou = document.querySelectorAll('#tela9 .acertou');
    blq = document.querySelectorAll('#tela9 .bloquinho');
  }
  if (e == '2') {
    errou = document.querySelectorAll('#tela11 .errou');
    acertou = document.querySelectorAll('#tela11 .acertou');
    blq = document.querySelectorAll('#tela11 .bloquinho');
  }

  for (var i = 0; i < blq.length; i++) {
    blq[i].classList.remove('acerto');
    blq[i].classList.remove('erro');
  }
  for (var i = 0; i < errou.length; i++) {
    esconde(errou[i]);
  }
  for (var i = 0; i < acertou.length; i++) {
    esconde(acertou[i]);
  }
}

let caixaTela9 = document.querySelectorAll('#tela9 .caixaArrastaDestino>div');
let caixaTela11 = document.querySelectorAll('#tela11 .caixaArrastaDestino>div');

for (var i = 0; i < caixaTela9.length; i++) {
  caixaTela9[i].addEventListener('click', toggleSelecionado);
}

for (var i = 0; i < caixaTela11.length; i++) {
  caixaTela11[i].addEventListener('click', toggleSelecionado2);
}

function toggleSelecionado2() {
  for (var i = 0; i < caixaTela11.length; i++) {
    caixaTela11[i].classList.remove('selecionado');
  }
  this.classList.add('selecionado');
  if (this.classList.contains('acerto')) {
    caixaMensagem('11', true, this.dataset.tipo);
  }
  if (this.classList.contains('erro')) {
    caixaMensagem('11', false, this.dataset.tipo);
  }
}

function toggleSelecionado() {
  for (var i = 0; i < caixaTela9.length; i++) {
    caixaTela9[i].classList.remove('selecionado');
  }
  this.classList.add('selecionado');
  if (this.classList.contains('acerto')) {
    caixaMensagem('9', true, this.dataset.tipo);
  }
  if (this.classList.contains('erro')) {
    caixaMensagem('9', false, this.dataset.tipo);
  }
}

let erroMensagem = []
erroMensagem["Pré-silábico"] = "<b>Marina:</b> Hmm… será?<br> Lembre-se que a criança com a hipótese pré-silábica ainda não compreende a escrita como a representação dos sons das palavras. Por isso ela está experimentando com garatujas, desenhos, símbolos e letras que conhece.";
erroMensagem["Silábico sem valor sonoro"] = "<b>Marina:</b> Hmm… será?<br> Lembre-se que o silábico sem valor sonoro pressupõe uma criança que entendeu que existe relação entre a escrita e a fala, mas, na tentativa de dar um valor sonoro, utiliza letras aleatórias para cada sílaba.";
erroMensagem["Silábico com valor sonoro"] = "<b>Marina:</b> Hmm… será?<br> A criança silábica com valor sonoro une o som à sílaba porque já entende que a escrita representa a fala, ou seja, usa uma letra para cada vez que pronuncia uma sílaba, mas agora faz relação com o fonema (som).";
erroMensagem["Silábico-alfabético"] = "<b>Marina:</b> Hmm… será?<br> Apesar de a criança entender a função social da língua escrita, ela ainda está confusa com relação a que letra ou sílaba escrever.";
erroMensagem["Alfabético"] = "<b>Marina:</b> Hmm… será?<br> Lembre-se que a criança nesta hipótese já sabe diferenciar a letra da sílaba, das palavras e das frases. Tente novamente.";

let acertoMensagem = []
acertoMensagem["Pré-silábico"] = "<b>Marina:</b> Você está indo muito bem!<br> A criança com a hipótese pré-silábica realmente não compreende que a escrita representa os sons das palavras. Por isso faz uso de garatujas, desenhos, símbolos e das letras que conhece aleatoriamente, geralmente confundindo letras e números. A intervenção do professor é, a partir desta hipótese, promover o novo passo para que ela possa entender o valor sonoro das letras e das sílabas.";
acertoMensagem["Silábico sem valor sonoro"] = "<b>Marina:</b> Você está indo muito bem!<br> A criança no momento da hipótese silábica sem valor sonoro representa a sílaba com uma letra (grafema) aleatória, que não tem relação com o som (grafema). Essa é a diferença do silábico com valor sonoro. O papel do professor é armar estratégias didáticas para que a criança possa passar para outra hipótese, avançando na construção de seus conhecimentos sobre a escrita.";
acertoMensagem["Silábico com valor sonoro"] = "<b>Marina:</b> Você está indo muito bem!<br> A criança silábica com valor sonoro entende que a escrita representa a fala. Isso significa que ela usa uma letra para cada vez que pronuncia uma sílaba, mas desta vez faz relação com o fonema (som).";
acertoMensagem["Silábico-alfabético"] = "<b>Marina:</b> Você está indo muito bem!<br> Esta é a fase em que a criança ainda está confusa. Apesar de entender que cada som é registrado com um fonema, ela ainda questiona se é com uma ou duas letras e quais são exatamente.";
acertoMensagem["Alfabético"] = "<b>Marina:</b> Você está indo muito bem!<br> A criança já entende e domina o código escrito e sabe diferenciar as letras das sílabas, das palavras e das frases.";

function caixaMensagem(tela, certo, ttl) {
  if (tela == '9') {
    if (certo) {
      let img = document.querySelectorAll('#tela9 .caixaMensagem img')[0];
      let titulo = document.querySelectorAll('#tela9 .caixaMensagem >div:nth-of-type(2)>div:nth-of-type(1)')[0];
      let texto = document.querySelectorAll('#tela9 .caixaMensagem >div:nth-of-type(2)>div:nth-of-type(2)')[0];
      titulo.innerHTML = ttl;
      texto.innerHTML = acertoMensagem[ttl]
      img.src = "assets/marina_icone_01.svg";
    } else {
      let img = document.querySelectorAll('#tela9 .caixaMensagem img')[0];
      let titulo = document.querySelectorAll('#tela9 .caixaMensagem >div:nth-of-type(2)>div:nth-of-type(1)')[0];
      let texto = document.querySelectorAll('#tela9 .caixaMensagem >div:nth-of-type(2)>div:nth-of-type(2)')[0];
      titulo.innerHTML = ttl;
      texto.innerHTML = erroMensagem[ttl]
      img.src = "assets/marina_icone_02.svg";
    }
  }
  if (tela == '11') {
    if (certo) {
      let img = document.querySelectorAll('#tela11 .caixaMensagem img')[0];
      let titulo = document.querySelectorAll('#tela11 .caixaMensagem >div:nth-of-type(2)>div:nth-of-type(1)')[0];
      let texto = document.querySelectorAll('#tela11 .caixaMensagem >div:nth-of-type(2)>div:nth-of-type(2)')[0];
      titulo.innerHTML = ttl;
      texto.innerHTML = acertoMensagem[ttl]
      img.src = "assets/marina_icone_01.svg";
    } else {
      let img = document.querySelectorAll('#tela11 .caixaMensagem img')[0];
      let titulo = document.querySelectorAll('#tela11 .caixaMensagem >div:nth-of-type(2)>div:nth-of-type(1)')[0];
      let texto = document.querySelectorAll('#tela11 .caixaMensagem >div:nth-of-type(2)>div:nth-of-type(2)')[0];
      titulo.innerHTML = ttl;
      texto.innerHTML = erroMensagem[ttl]
      img.src = "assets/marina_icone_02.svg";
    }
  }
}

function scrollTop() {
  window.scrollTo(0, 100);
}

function branco() {
  document.getElementsByTagName('nav')[0].style.backgroundColor = 'white';
  document.querySelectorAll('nav .nav-link')[0].style.backgroundColor = '#fbf8c8';
  document.querySelectorAll('nav .logo img')[0].style.backgroundColor = '#fbf8c8';
}

function amarelo() {
  document.getElementsByTagName('nav')[0].style.backgroundColor = '#fbf8c8';
  document.querySelectorAll('nav .nav-link')[0].style.backgroundColor = 'white';
  document.querySelectorAll('nav .logo img')[0].style.backgroundColor = 'white';
}

function amarelo2() {
  document.getElementsByTagName('nav')[0].style.backgroundColor = '#ffffcc';
  document.querySelectorAll('nav .nav-link')[0].style.backgroundColor = 'white';
  document.querySelectorAll('nav .logo img')[0].style.backgroundColor = 'white';
}

tela1.scrollIntoView({
  block: 'start'
});

caixaPlus = document.querySelectorAll('.caixaPlus');

for (var i = 0; i < caixaPlus.length; i++) {
  caixaPlus[i].addEventListener('click', clkCaixaPlus);
}

function clkCaixaPlus() {
  window.open(this.dataset.link, '_blank');
}

function celular() {
  let largura = screen.width;
  if (largura < 992)
    return true;
  else
    return false;
}

let btnImpressao = document.querySelectorAll('#tela12 .botaoLaranjinha')[0];

btnImpressao.addEventListener('click', impressao);

function impressao() {
  if(celular()){
    window.open("https://apps.univesp.br/letra-acao/assets/Alfabetizacao.pdf");
  }
  else{
    var anchor = document.createElement('a');
    anchor.setAttribute('href', 'assets/Alfabetizacao.pdf');
    anchor.setAttribute('target', '_blank');
    anchor.setAttribute('download', '');
    document.body.appendChild(anchor);
    anchor.click();
    anchor.parentNode.removeChild(anchor);
  }
}

let btnEncerrar = document.querySelectorAll('#tela12 .botaoLaranjinha')[1];

btnEncerrar.addEventListener('click', encerrar);

function encerrar(){
  location.reload();
}
