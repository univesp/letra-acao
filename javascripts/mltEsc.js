caixa8Alt = [];
caixa10Alt = [];
let avnCarTela8Mob = document.querySelectorAll('#tela8Mob .setaEsquerda')[0];
let vltCarTela8Mob = document.querySelectorAll('#tela8Mob .setaDireita')[0];
let avnCarTela10Mob = document.querySelectorAll('#tela10Mob .setaEsquerda')[0];
let vltCarTela10Mob = document.querySelectorAll('#tela10Mob .setaDireita')[0];


let bolinhaTela8 = document.querySelectorAll('.caixaAltTela8 .bolinha');
let bolinhaTela10 = document.querySelectorAll('.caixaAltTela10 .bolinha');
let textos8 = document.querySelectorAll('.caixaAltTela8 > div > div');
let textos10 = document.querySelectorAll('.caixaAltTela10 > div > div');
let avnCarTela9Mob = document.querySelectorAll('#tela9Mob .setaEsquerda')[0];
let vltCarTela9Mob = document.querySelectorAll('#tela9Mob .setaDireita')[0];
let avnCarTela11Mob = document.querySelectorAll('#tela11Mob .setaEsquerda')[0];
let vltCarTela11Mob = document.querySelectorAll('#tela11Mob .setaDireita')[0];


for (var i = 0; i < textos8.length; i++) {
  textos8[i].addEventListener('click', function() {
    this.getElementsByClassName('bolinha')[0].click();
  })
}

for (var i = 0; i < textos10.length; i++) {
  textos10[i].addEventListener('click', function() {
    this.getElementsByClassName('bolinha')[0].click();
  })
}

for (var i = 0; i < bolinhaTela8.length; i++) {
  bolinhaTela8[i].addEventListener('click', clicaBolinhaTela8)
}

for (var i = 0; i < bolinhaTela10.length; i++) {
  bolinhaTela10[i].addEventListener('click', clicaBolinhaTela10)
}

avnCarTela8Mob.addEventListener('click', fnVltCarTela8Mob);
vltCarTela8Mob.addEventListener('click', fnAvnCarTela8Mob);
avnCarTela10Mob.addEventListener('click', fnVltCarTela10Mob);
vltCarTela10Mob.addEventListener('click', fnAvnCarTela10Mob);


avnCarTela9Mob.addEventListener('click', fnVltCarTela9Mob);
vltCarTela9Mob.addEventListener('click', fnAvnCarTela9Mob);
avnCarTela11Mob.addEventListener('click', fnVltCarTela11Mob);
vltCarTela11Mob.addEventListener('click', fnAvnCarTela11Mob);



function fnAvnCarTela8Mob() {
  let cardSelecionado = document.querySelectorAll('#tela8Mob .bloquinho.selecionado')[0];
  let todosOsCards = document.querySelectorAll('#tela8Mob .bloquinho');
  let todasAsAlternativas = document.querySelectorAll('.caixaAltTela8 >div');
  for (var i = 0; i < todasAsAlternativas.length; i++) {
    $(todasAsAlternativas[i]).fadeOut();
  }
  for (var i = 0; i < todosOsCards.length; i++) {
    todosOsCards[i].classList.remove('selecionado');
    $(todosOsCards[i]).fadeOut()
  }
  let sequencia = parseInt(cardSelecionado.dataset.ordem) + 1;
  if (sequencia == 6) {
    sequencia = 1;
  }
  let alternativaAtual = document.querySelectorAll('.caixaAltTela8>[data-ordem="' + sequencia + '"]')[0];
  setTimeout(function() {
    $(alternativaAtual).fadeIn();
    $(cardAtual).fadeIn();
    cardAtual.classList.add('selecionado');
  }, 400);
  let cardAtual = document.querySelectorAll('#tela8Mob .bloquinho[data-ordem="' + sequencia + '"]')[0]

}
function fnVltCarTela8Mob() {
  let cardSelecionado = document.querySelectorAll('#tela8Mob .bloquinho.selecionado')[0];
  let todosOsCards = document.querySelectorAll('#tela8Mob .bloquinho');
  let todasAsAlternativas = document.querySelectorAll('.caixaAltTela8 >div');
  for (var i = 0; i < todasAsAlternativas.length; i++) {
    $(todasAsAlternativas[i]).fadeOut();
  }
  for (var i = 0; i < todosOsCards.length; i++) {
    todosOsCards[i].classList.remove('selecionado');
    $(todosOsCards[i]).fadeOut();
  }
  let sequencia = parseInt(cardSelecionado.dataset.ordem) - 1;
  if (sequencia == 0) {
    sequencia = 5;
  }
  let alternativaAtual = document.querySelectorAll('.caixaAltTela8>[data-ordem="' + sequencia + '"]')[0];
  setTimeout(function() {
    $(alternativaAtual).fadeIn();
    $(cardAtual).fadeIn();
    cardAtual.classList.add('selecionado');
  }, 400);
  let cardAtual = document.querySelectorAll('#tela8Mob .bloquinho[data-ordem="' + sequencia + '"]')[0];
}

function fnAvnCarTela10Mob() {
  let cardSelecionado = document.querySelectorAll('#tela10Mob .bloquinho.selecionado')[0];
  let todosOsCards = document.querySelectorAll('#tela10Mob .bloquinho');
  let todasAsAlternativas = document.querySelectorAll('.caixaAltTela10 >div');
  for (var i = 0; i < todasAsAlternativas.length; i++) {
    $(todasAsAlternativas[i]).fadeOut();
  }
  for (var i = 0; i < todosOsCards.length; i++) {
    todosOsCards[i].classList.remove('selecionado');
    $(todosOsCards[i]).fadeOut()
  }
  let sequencia = parseInt(cardSelecionado.dataset.ordem) + 1;
  if (sequencia == 6) {
    sequencia = 1;
  }
  let alternativaAtual = document.querySelectorAll('.caixaAltTela10>[data-ordem="' + sequencia + '"]')[0];
  setTimeout(function() {
    $(alternativaAtual).fadeIn();
    $(cardAtual).fadeIn();
    cardAtual.classList.add('selecionado');
  }, 400);
  let cardAtual = document.querySelectorAll('#tela10Mob .bloquinho[data-ordem="' + sequencia + '"]')[0]
}
function fnVltCarTela10Mob() {
  let cardSelecionado = document.querySelectorAll('#tela10Mob .bloquinho.selecionado')[0];
  let todosOsCards = document.querySelectorAll('#tela10Mob .bloquinho');
  let todasAsAlternativas = document.querySelectorAll('.caixaAltTela10 >div');
  for (var i = 0; i < todasAsAlternativas.length; i++) {
    $(todasAsAlternativas[i]).fadeOut();
  }
  for (var i = 0; i < todosOsCards.length; i++) {
    todosOsCards[i].classList.remove('selecionado');
    $(todosOsCards[i]).fadeOut();
  }
  let sequencia = parseInt(cardSelecionado.dataset.ordem) - 1;
  if (sequencia == 0) {
    sequencia = 5;
  }
  let alternativaAtual = document.querySelectorAll('.caixaAltTela10>[data-ordem="' + sequencia + '"]')[0];
  setTimeout(function() {
    $(alternativaAtual).fadeIn();
    $(cardAtual).fadeIn();
    cardAtual.classList.add('selecionado');
  }, 400);
  let cardAtual = document.querySelectorAll('#tela10Mob .bloquinho[data-ordem="' + sequencia + '"]')[0];
}

function clicaBolinhaTela8() {
  let bolAtual = this.parentElement.parentElement.getElementsByClassName('bolinha');
  let ordem = parseInt(this.parentElement.parentElement.dataset.ordem);
  let texto = this.parentElement.getElementsByClassName('texto')[0].innerHTML;
  for (var i = 0; i < bolAtual.length; i++) {
    bolAtual[i].classList.remove('escolhido');
  }
  this.classList.add('escolhido');
  if (verTela8bol()) {
    revela(btnAvn8Mob);
  }
  caixa8Alt[ordem-1].marcado = texto;
  if(caixa8Alt[ordem-1].marcado == caixa8Alt[ordem-1].gab){
    caixa8Alt[ordem-1].correto = true;
  }
  else{
    caixa8Alt[ordem-1].correto = false;
  }
  console.log(caixa8Alt);
}
function clicaBolinhaTela10() {
  let bolAtual = this.parentElement.parentElement.getElementsByClassName('bolinha');
  let ordem = parseInt(this.parentElement.parentElement.dataset.ordem);
  let texto = this.parentElement.getElementsByClassName('texto')[0].innerHTML;
  for (var i = 0; i < bolAtual.length; i++) {
    bolAtual[i].classList.remove('escolhido');
  }
  this.classList.add('escolhido');
  if (verTela10bol()) {
    revela(btnAvn10Mob);
  }
  caixa10Alt[ordem-1].marcado = texto;
  if(caixa10Alt[ordem-1].marcado == caixa10Alt[ordem-1].gab){
    caixa10Alt[ordem-1].correto = true;
  }
  else{
    caixa10Alt[ordem-1].correto = false;
  }
  console.log(caixa10Alt);
}

function verTela8bol() {
  let escolhidos = document.querySelectorAll('#tela8Mob .escolhido');
  if (escolhidos.length > 4) {
    return true;
  }
  return false;
}
function verTela10bol() {
  let escolhidos = document.querySelectorAll('#tela10Mob .escolhido');
  if (escolhidos.length > 4) {
    return true;
  }
  return false;
}

function fnAvnCarTela9Mob() {
  let cardSelecionado = document.querySelectorAll('#tela9Mob .bloquinho.selecionado')[0];
  let todosOsCards = document.querySelectorAll('#tela9Mob .bloquinho');
  let todasAsAlternativas = document.querySelectorAll('.caixaAltTela9 >div');
  for (var i = 0; i < todasAsAlternativas.length; i++) {
    $(todasAsAlternativas[i]).fadeOut();
  }
  for (var i = 0; i < todosOsCards.length; i++) {
    todosOsCards[i].classList.remove('selecionado');
    $(todosOsCards[i]).fadeOut()
  }
  let sequencia = parseInt(cardSelecionado.dataset.ordem) + 1;
  if (sequencia == 6) {
    sequencia = 1;
  }
  let alternativaAtual = document.querySelectorAll('.caixaAltTela9>[data-ordem="' + sequencia + '"]')[0];
  setTimeout(function() {
    $(alternativaAtual).fadeIn();
    $(cardAtual).fadeIn();
    cardAtual.classList.add('selecionado');
  }, 400);
  let cardAtual = document.querySelectorAll('#tela9Mob .bloquinho[data-ordem="' + sequencia + '"]')[0]
  if(caixa8Alt[sequencia-1].correto){
    document.getElementById('imgTela9Mob').src = 'assets/marina_icone_01.svg';
    document.querySelectorAll('#txtTela9Mob > p:nth-of-type(1)')[0].innerHTML = caixa8Alt[sequencia-1].marcado;
    document.querySelectorAll('#txtTela9Mob > p:nth-of-type(2)')[0].innerHTML = acertoMensagem[caixa8Alt[sequencia-1].marcado];
  }
  else{
    document.getElementById('imgTela9Mob').src = 'assets/marina_icone_02.svg';
    document.querySelectorAll('#txtTela9Mob > p:nth-of-type(1)')[0].innerHTML = caixa8Alt[sequencia-1].marcado;
    document.querySelectorAll('#txtTela9Mob > p:nth-of-type(2)')[0].innerHTML = erroMensagem[caixa8Alt[sequencia-1].marcado];
  }
}
function fnVltCarTela9Mob() {
  let cardSelecionado = document.querySelectorAll('#tela9Mob .bloquinho.selecionado')[0];
  let todosOsCards = document.querySelectorAll('#tela9Mob .bloquinho');
  let todasAsAlternativas = document.querySelectorAll('.caixaAltTela9 >div');
  for (var i = 0; i < todasAsAlternativas.length; i++) {
    $(todasAsAlternativas[i]).fadeOut();
  }
  for (var i = 0; i < todosOsCards.length; i++) {
    todosOsCards[i].classList.remove('selecionado');
    $(todosOsCards[i]).fadeOut();
  }
  let sequencia = parseInt(cardSelecionado.dataset.ordem) - 1;
  if (sequencia == 0) {
    sequencia = 5;
  }
  let alternativaAtual = document.querySelectorAll('.caixaAltTela9>[data-ordem="' + sequencia + '"]')[0];
  setTimeout(function() {
    $(alternativaAtual).fadeIn();
    $(cardAtual).fadeIn();
    cardAtual.classList.add('selecionado');
  }, 400);
  let cardAtual = document.querySelectorAll('#tela9Mob .bloquinho[data-ordem="' + sequencia + '"]')[0];
  if(caixa8Alt[sequencia-1].correto){
    document.getElementById('imgTela9Mob').src = 'assets/marina_icone_01.svg';
    document.querySelectorAll('#txtTela9Mob > p:nth-of-type(1)')[0].innerHTML = caixa8Alt[sequencia-1].marcado;
    document.querySelectorAll('#txtTela9Mob > p:nth-of-type(2)')[0].innerHTML = acertoMensagem[caixa8Alt[sequencia-1].marcado];
  }
  else{
    document.getElementById('imgTela9Mob').src = 'assets/marina_icone_02.svg';
    document.querySelectorAll('#txtTela9Mob > p:nth-of-type(1)')[0].innerHTML = caixa8Alt[sequencia-1].marcado;
    document.querySelectorAll('#txtTela9Mob > p:nth-of-type(2)')[0].innerHTML = erroMensagem[caixa8Alt[sequencia-1].marcado];
  }
}

function fnAvnCarTela11Mob() {
  let cardSelecionado = document.querySelectorAll('#tela11Mob .bloquinho.selecionado')[0];
  let todosOsCards = document.querySelectorAll('#tela11Mob .bloquinho');
  let todasAsAlternativas = document.querySelectorAll('.caixaAltTela11 >div');
  for (var i = 0; i < todasAsAlternativas.length; i++) {
    $(todasAsAlternativas[i]).fadeOut();
  }
  for (var i = 0; i < todosOsCards.length; i++) {
    todosOsCards[i].classList.remove('selecionado');
    $(todosOsCards[i]).fadeOut()
  }
  let sequencia = parseInt(cardSelecionado.dataset.ordem) + 1;
  if (sequencia == 6) {
    sequencia = 1;
  }
  let alternativaAtual = document.querySelectorAll('.caixaAltTela11>[data-ordem="' + sequencia + '"]')[0];
  setTimeout(function() {
    $(alternativaAtual).fadeIn();
    $(cardAtual).fadeIn();
    cardAtual.classList.add('selecionado');
  }, 400);
  let cardAtual = document.querySelectorAll('#tela11Mob .bloquinho[data-ordem="' + sequencia + '"]')[0]
  if(caixa10Alt[sequencia-1].correto){
    document.getElementById('imgTela11Mob').src = 'assets/marina_icone_01.svg';
    document.querySelectorAll('#txtTela11Mob > p:nth-of-type(1)')[0].innerHTML = caixa10Alt[sequencia-1].marcado;
    document.querySelectorAll('#txtTela11Mob > p:nth-of-type(2)')[0].innerHTML = acertoMensagem[caixa10Alt[sequencia-1].marcado];
  }
  else{
    document.getElementById('imgTela11Mob').src = 'assets/marina_icone_02.svg';
    document.querySelectorAll('#txtTela11Mob > p:nth-of-type(1)')[0].innerHTML = caixa10Alt[sequencia-1].marcado;
    document.querySelectorAll('#txtTela11Mob > p:nth-of-type(2)')[0].innerHTML = erroMensagem[caixa10Alt[sequencia-1].marcado];
  }
}
function fnVltCarTela11Mob() {
  let cardSelecionado = document.querySelectorAll('#tela11Mob .bloquinho.selecionado')[0];
  let todosOsCards = document.querySelectorAll('#tela11Mob .bloquinho');
  let todasAsAlternativas = document.querySelectorAll('.caixaAltTela11 >div');
  for (var i = 0; i < todasAsAlternativas.length; i++) {
    $(todasAsAlternativas[i]).fadeOut();
  }
  for (var i = 0; i < todosOsCards.length; i++) {
    todosOsCards[i].classList.remove('selecionado');
    $(todosOsCards[i]).fadeOut();
  }
  let sequencia = parseInt(cardSelecionado.dataset.ordem) - 1;
  if (sequencia == 0) {
    sequencia = 5;
  }
  let alternativaAtual = document.querySelectorAll('.caixaAltTela11>[data-ordem="' + sequencia + '"]')[0];
  setTimeout(function() {
    $(alternativaAtual).fadeIn();
    $(cardAtual).fadeIn();
    cardAtual.classList.add('selecionado');
  }, 400);
  let cardAtual = document.querySelectorAll('#tela11Mob .bloquinho[data-ordem="' + sequencia + '"]')[0];
  if(caixa10Alt[sequencia-1].correto){
    document.getElementById('imgTela11Mob').src = 'assets/marina_icone_01.svg';
    document.querySelectorAll('#txtTela11Mob > p:nth-of-type(1)')[0].innerHTML = caixa10Alt[sequencia-1].marcado;
    document.querySelectorAll('#txtTela11Mob > p:nth-of-type(2)')[0].innerHTML = acertoMensagem[caixa10Alt[sequencia-1].marcado];
  }
  else{
    document.getElementById('imgTela11Mob').src = 'assets/marina_icone_02.svg';
    document.querySelectorAll('#txtTela11Mob > p:nth-of-type(1)')[0].innerHTML = caixa10Alt[sequencia-1].marcado;
    document.querySelectorAll('#txtTela11Mob > p:nth-of-type(2)')[0].innerHTML = erroMensagem[caixa10Alt[sequencia-1].marcado];
  }
}

function atualizaTela9Mob(){
  let caixas = document.querySelectorAll('.caixaAltTela9 > div');
  let bloquinhos = document.querySelectorAll('#tela9Mob .bloquinho');
  //Adiciona as bordas.
  for (var i = 0; i < caixas.length; i++) {
    if(caixa8Alt[i].correto){
      caixas[i].classList.add('certo');
    }
    else{
      caixas[i].classList.add('errado');
    }
  }
  //Preenche os dados dos bloquinhos.
  for (var i = 0; i < bloquinhos.length; i++) {
    let nome1 = bloquinhos[i].getElementsByTagName('div')[0];
    let nome2 = bloquinhos[i].getElementsByTagName('div')[1];
    let src = bloquinhos[i].getElementsByTagName('img')[0];
    nome1.innerHTML = caixa8Alt[i].nome1;
    nome2.innerHTML = caixa8Alt[i].nome2;
    src.src = 'assets/' + caixa8Alt[i].src;
  }
  //Coloca as bolinhas
  for (var i = 0; i < caixa8Alt.length; i++) {
    bolinhaCerta = document.querySelectorAll(".caixaAltTela9 > div[data-ordem='" + (i+1) +  "'] > div[data-gab='" + caixa8Alt[i].gab + "'] > .bolinha")[0];
    bolinhaCerta.innerHTML = '<i class="fas fa-check"></i>';
    bolinhaCerta.classList.add('certo');
    if(!caixa8Alt[i].correto){
      bolinhaErrada = document.querySelectorAll(".caixaAltTela9 > div[data-ordem='" + (i+1) +  "'] > div[data-gab='" + caixa8Alt[i].marcado + "'] > .bolinha")[0];
      bolinhaErrada.innerHTML = '<i class="fas fa-times"></i>';
      bolinhaErrada.classList.add('errado');
    }
  }
  //Atualiza primeira mensagem e imagem da menina
  if(caixa8Alt[0].correto){
    document.getElementById('imgTela9Mob').src = 'assets/marina_icone_01.svg';
    document.querySelectorAll('#txtTela9Mob > p:nth-of-type(1)')[0].innerHTML = caixa8Alt[0].marcado;
    document.querySelectorAll('#txtTela9Mob > p:nth-of-type(2)')[0].innerHTML = acertoMensagem[caixa8Alt[0].marcado];
  }
  else{
    document.getElementById('imgTela9Mob').src = 'assets/marina_icone_02.svg';
    document.querySelectorAll('#txtTela9Mob > p:nth-of-type(1)')[0].innerHTML = caixa8Alt[0].marcado;
    document.querySelectorAll('#txtTela9Mob > p:nth-of-type(2)')[0].innerHTML = erroMensagem[caixa8Alt[0].marcado];
  }
}
function atualizaTela11Mob(){
  let caixas = document.querySelectorAll('.caixaAltTela11 > div');
  let bloquinhos = document.querySelectorAll('#tela11Mob .bloquinho');
  //Adiciona as bordas.
  for (var i = 0; i < caixas.length; i++) {
    if(caixa10Alt[i].correto){
      caixas[i].classList.add('certo');
    }
    else{
      caixas[i].classList.add('errado');
    }
  }
  //Preenche os dados dos bloquinhos.
  for (var i = 0; i < bloquinhos.length; i++) {
    let nome1 = bloquinhos[i].getElementsByTagName('div')[0];
    let nome2 = bloquinhos[i].getElementsByTagName('div')[1];
    let src = bloquinhos[i].getElementsByTagName('img')[0];
    nome1.innerHTML = caixa10Alt[i].nome1;
    nome2.innerHTML = caixa10Alt[i].nome2;
    src.src = 'assets/' + caixa10Alt[i].src;
  }
  //Coloca as bolinhas
  for (var i = 0; i < caixa10Alt.length; i++) {
    bolinhaCerta = document.querySelectorAll(".caixaAltTela11 > div[data-ordem='" + (i+1) +  "'] > div[data-gab='" + caixa10Alt[i].gab + "'] > .bolinha")[0];
    bolinhaCerta.innerHTML = '<i class="fas fa-check"></i>';
    bolinhaCerta.classList.add('certo');
    if(!caixa10Alt[i].correto){
      bolinhaErrada = document.querySelectorAll(".caixaAltTela11 > div[data-ordem='" + (i+1) +  "'] > div[data-gab='" + caixa10Alt[i].marcado + "'] > .bolinha")[0];
      bolinhaErrada.innerHTML = '<i class="fas fa-times"></i>';
      bolinhaErrada.classList.add('errado');
    }
  }
  //Atualiza primeira mensagem e imagem da menina
  if(caixa10Alt[0].correto){
    document.getElementById('imgTela11Mob').src = 'assets/marina_icone_01.svg';
    document.querySelectorAll('#txtTela11Mob > p:nth-of-type(1)')[0].innerHTML = caixa10Alt[0].marcado;
    document.querySelectorAll('#txtTela11Mob > p:nth-of-type(2)')[0].innerHTML = acertoMensagem[caixa10Alt[0].marcado];
  }
  else{
    document.getElementById('imgTela11Mob').src = 'assets/marina_icone_02.svg';
    document.querySelectorAll('#txtTela11Mob > p:nth-of-type(1)')[0].innerHTML = caixa10Alt[0].marcado;
    document.querySelectorAll('#txtTela11Mob > p:nth-of-type(2)')[0].innerHTML = erroMensagem[caixa10Alt[0].marcado];
  }
}

function Alternativa(nome1, nome2, src, gab) {
  this.nome1 = nome1;
  this.nome2 = nome2;
  this.src = src;
  this.gab = gab;
  this.marcado = "";
  this.correto = false;
}

function bagunca8Mob(){
  let bloquinhos = document.getElementById('tela8Mob').getElementsByClassName('bloquinho');
  let clnBloquinhos = [...bloquinhos];
  let pai = bloquinhos[0].parentElement;
  clnBloquinhos = shuffle(clnBloquinhos);
  for (var i = 0; i < clnBloquinhos.length; i++) {
    pai.insertBefore(clnBloquinhos[i], pai.childNodes[2]);
  }
}
function bagunca10Mob(){
  let bloquinhos = document.getElementById('tela10Mob').getElementsByClassName('bloquinho');
  let clnBloquinhos = [...bloquinhos];
  let pai = bloquinhos[0].parentElement;
  clnBloquinhos = shuffle(clnBloquinhos);
  for (var i = 0; i < clnBloquinhos.length; i++) {
    pai.insertBefore(clnBloquinhos[i], pai.childNodes[2]);
  }
}
function ajusta8(){
  let bloquinhos = document.getElementById('tela8Mob').getElementsByClassName('bloquinho');
  for (var i = 0; i < bloquinhos.length; i++) {
    if(i == 0)
      bloquinhos[i].classList.add('selecionado');
    bloquinhos[i].dataset.ordem = i+1;
    caixa8Alt.push(new Alternativa(bloquinhos[i].dataset.nome1, bloquinhos[i].dataset.nome2, bloquinhos[i].dataset.src, bloquinhos[i].dataset.gab));
  }
}
function ajusta10(){
  let bloquinhos = document.getElementById('tela10Mob').getElementsByClassName('bloquinho');
  for (var i = 0; i < bloquinhos.length; i++) {
    if(i == 0){
      bloquinhos[i].classList.add('selecionado');
      console.log('entrei aqui');
    }
    bloquinhos[i].dataset.ordem = i+1;
    caixa10Alt.push(new Alternativa(bloquinhos[i].dataset.nome1, bloquinhos[i].dataset.nome2, bloquinhos[i].dataset.src, bloquinhos[i].dataset.gab));
  }
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
function ajusta9(){
  let caixas = document.querySelectorAll('.caixaAltTela9 > div');
  for (var i = 0; i < caixas.length; i++) {
    caixas[i].classList.remove('certo');
    caixas[i].classList.remove('errado');
  }
  let bolinhas = document.querySelectorAll('.caixaAltTela9 .bolinha');
  for (var i = 0; i < bolinhas.length; i++) {
    bolinhas[i].classList.remove('certo');
    bolinhas[i].classList.remove('errado');
    bolinhas[i].innerHTML = '<div></div>';
  }
};
function ajusta11(){
  let caixas = document.querySelectorAll('.caixaAltTela11 > div');
  for (var i = 0; i < caixas.length; i++) {
    caixas[i].classList.remove('certo');
    caixas[i].classList.remove('errado');
  }
  let bolinhas = document.querySelectorAll('.caixaAltTela11 .bolinha');
  for (var i = 0; i < bolinhas.length; i++) {
    bolinhas[i].classList.remove('certo');
    bolinhas[i].classList.remove('errado');
    bolinhas[i].innerHTML = '<div></div>';
  }
};

bagunca8();
bagunca10();
bagunca8Mob();
ajusta8();
bagunca10Mob();
ajusta10();
