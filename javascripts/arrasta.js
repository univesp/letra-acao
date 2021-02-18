$('#tela8 .bloquinho').draggable({
  revert: 'invalid'
});

$('#tela8 .caixaArrastaDestino > div > div:nth-of-type(2)').droppable({
  accept: '#tela8 .bloquinho',
  tolerance: "intersect",
  drop: function(event, ui) {
    verificaPosicionado(ui.draggable.attr("data-fase"), ui.draggable.attr("data-posicionado"));
    arrumaPosicao(this, ui);
    movimentaAnterior(this.dataset.fase, this.dataset.destino);
    alimentaCaixa(this.dataset.destino, this.dataset.fase, ui.draggable.attr("data-origem"), ui.draggable.attr("data-src"), ui.draggable.attr("data-nome2"));
    ui.draggable.attr("data-posicionado", this.dataset.destino);
    if(verificaCaixa('1')){
      revela(btnAvn8)
    }
    else{
      esconde(btnAvn8);
    }
  }
})

$('#tela10 .bloquinho').draggable({
  revert: 'invalid'
});

$('#tela10 .caixaArrastaDestino > div > div:nth-of-type(2)').droppable({
  accept: '#tela10 .bloquinho',
  tolerance: "intersect",
  drop: function(event, ui) {
    verificaPosicionado(ui.draggable.attr("data-fase"), ui.draggable.attr("data-posicionado"));
    arrumaPosicao(this, ui);
    movimentaAnterior(this.dataset.fase, this.dataset.destino);
    alimentaCaixa(this.dataset.destino, this.dataset.fase, ui.draggable.attr("data-origem"), ui.draggable.attr("data-src"), ui.draggable.attr("data-nome2"));
    ui.draggable.attr("data-posicionado", this.dataset.destino);
    if(verificaCaixa('2')){
      revela(btnAvn10)
    }
    else{
      esconde(btnAvn10);
    }
  }
})

let caixa1 = [];
caixa1["pre-silabico"] = new Caixa("pre-silabico", 'Mayara');
caixa1["silabico-sem-valor-sonoro"] = new Caixa("silabico-sem-valor-sonoro", "Alex");
caixa1["silabico-com-valor-sonoro"] = new Caixa("silabico-com-valor-sonoro", "Giulia");
caixa1["silabico-alfabetico"] = new Caixa("silabico-alfabetico", "Bruno");
caixa1["alfabetico"] = new Caixa("alfabetico", "Bia");

let caixa2 = [];
caixa2["pre-silabico"] = new Caixa("pre-silabico", "Erica");
caixa2["silabico-sem-valor-sonoro"] = new Caixa("silabico-sem-valor-sonoro", "Isabela");
caixa2["silabico-com-valor-sonoro"] = new Caixa("silabico-com-valor-sonoro", "Felipe");
caixa2["silabico-alfabetico"] = new Caixa("silabico-alfabetico", "Pedro");
caixa2["alfabetico"] = new Caixa("alfabetico", "Gerson");


function Caixa(nome, gabarito) {
  this.nome = nome;
  this.encaixado = "";
  this.preenchido = false;
  this.certo = false;
  this.gabarito = gabarito;
  this.src = '';
  this.nome2 = '';
}

function verificaPosicionado(fase, e) {
  if (e != 0) {
    if (fase == '1') {
      caixa1[e].encaixado = '';
      caixa1[e].preenchido = false;
    }
    if (fase == '2') {
      caixa2[e].encaixado = '';
      caixa2[e].preenchido = false;
    }
  }
}

function movimentaAnterior(num, e) {
  if (num == "1") {
    if (caixa1[e].preenchido) {
      let bloquinhoAntigo = document.querySelectorAll('.bloquinho[data-origem="' + caixa1[e].encaixado + '"]')[0];
      bloquinhoAntigo.classList.add('dropado');
      bloquinhoAntigo.style.top = "0px";
      bloquinhoAntigo.style.left = "0px";
      bloquinhoAntigo.dataset.posicionado = "0";
      setTimeout(function() {
        bloquinhoAntigo.classList.remove('dropado');
      }, 400);
    }
  }
  if (num == "2") {
    if (caixa2[e].preenchido) {
      let bloquinhoAntigo = document.querySelectorAll('.bloquinho[data-origem="' + caixa2[e].encaixado + '"]')[0];
      bloquinhoAntigo.classList.add('dropado');
      bloquinhoAntigo.style.top = "0px";
      bloquinhoAntigo.style.left = "0px";
      bloquinhoAntigo.dataset.posicionado = "0";
      setTimeout(function() {
        bloquinhoAntigo.classList.remove('dropado');
      }, 400);
    }
  }
}

function alimentaCaixa(e, num, cont, src, nome2) {
  if (num == "1") {
    caixa1[e].preenchido = true;
    caixa1[e].encaixado = cont;
    caixa1[e].src = src;
    caixa1[e].nome2 = nome2;
  }
  if (num == "2") {
    caixa2[e].preenchido = true;
    caixa2[e].encaixado = cont;
    caixa2[e].src = src;
    caixa2[e].nome2 = nome2;
  }
}

function corrigeCaixa(num) {
  if (num == "1") {
    for (var x in caixa1) {
      if (caixa1[x].encaixado == caixa1[x].gabarito) {
        caixa1[x].certo = true;
      } else {
        caixa1[x].certo = false;
      }
    }
  }
  if (num == "2") {
    for (var x in caixa2) {
      if (caixa2[x].encaixado == caixa2[x].gabarito) {
        caixa2[x].certo = true;
      } else {
        caixa2[x].certo = false;
      }
    }
  }
}

function verificaCaixa(num) {
  if (num == '1') {
    for (var x in caixa1) {
      if (!caixa1[x].preenchido) {
        return false;
      }
    }
    return true;
  }
  if (num == '2') {
    for (var x in caixa2) {
      if (!caixa2[x].preenchido) {
        return false;
      }
    }
    return true;
  }
}

function arrumaPosicao(e, destino) {
  destino.draggable.position({
    of: $(e),
    my: 'center',
    at: 'center'
  })
}

function bagunca8(){
  let bloquinhos = document.getElementById('tela8').getElementsByClassName('bloquinho');
  let clnBloquinhos = [...bloquinhos];
  let pai = bloquinhos[0].parentElement;
  clnBloquinhos = shuffle(clnBloquinhos);
  pai.innerHTML = "";
  for (var i = 0; i < clnBloquinhos.length; i++) {
    pai.appendChild(clnBloquinhos[i]);
  }
}

function bagunca10(){
  let bloquinhos = document.getElementById('tela10').getElementsByClassName('bloquinho');
  let clnBloquinhos = [...bloquinhos];
  let pai = bloquinhos[0].parentElement;
  clnBloquinhos = shuffle(clnBloquinhos);
  pai.innerHTML = "";
  for (var i = 0; i < clnBloquinhos.length; i++) {
    pai.appendChild(clnBloquinhos[i]);
  }
}
