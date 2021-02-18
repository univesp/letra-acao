let tela1 = document.getElementById('tela1');
let tela2 = document.getElementById('tela2');
let tela3 = document.getElementById('tela3');
let tela4 = document.getElementById('tela4');
let tela5 = document.getElementById('tela5');
let tela6 = document.getElementById('tela6');
let tela7 = document.getElementById('tela7');
let tela8 = document.getElementById('tela8');
let tela8Mob = document.getElementById('tela8Mob');
let tela9 = document.getElementById('tela9');
let tela9Mob = document.getElementById('tela9Mob');
let tela10 = document.getElementById('tela10');
let tela10Mob = document.getElementById('tela10Mob');
let tela11 = document.getElementById('tela11');
let tela11Mob = document.getElementById('tela11Mob');
let tela12 = document.getElementById('tela12');

let btnAvn1 = document.getElementById('btnAvn1');
let btnAvn2 = document.getElementById('btnAvn2');
let btnAvn3 = document.getElementById('btnAvn3');
let btnAvn4 = document.getElementById('btnAvn4');
let btnSimTel5 = document.getElementById('btnSimTel5');
let btnNaoTel5 = document.getElementById('btnNaoTel5');
let btnAvn6 = document.getElementById('btnAvn6');
let btnAvn7 = document.getElementById('btnAvn7');
let btnAvn8 = document.getElementById('btnAvn8');
let btnAvn8Mob = document.getElementById('btnAvn8Mob');
let btnAvn9 = document.getElementById('btnAvn9');
let btnAvn9Mob = document.getElementById('btnAvn9Mob');
let btnAvn10 = document.getElementById('btnAvn10');
let btnAvn10Mob = document.getElementById('btnAvn10Mob');
let btnAvn11 = document.getElementById('btnAvn11');
let btnAvn11Mob = document.getElementById('btnAvn11Mob');


let btnVlt2 = document.getElementById('btnVlt2');
let btnVlt31 = document.getElementById('btnVlt31');
let btnVlt32 = document.getElementById('btnVlt32');
let btnVlt41 = document.getElementById('btnVlt41');
let btnVlt42 = document.getElementById('btnVlt42');
let btnVlt5 = document.getElementById('btnVlt5');
let btnVlt6 = document.getElementById('btnVlt6');
let btnVlt7 = document.getElementById('btnVlt7');
let btnVlt8 = document.getElementById('btnVlt8');
let btnVlt8Mob = document.getElementById('btnVlt8Mob');
let btnVlt9 = document.getElementById('btnVlt9');
let btnVlt9Mob = document.getElementById('btnVlt9Mob');
let btnVlt10 = document.getElementById('btnVlt10');
let btnVlt10Mob = document.getElementById('btnVlt10Mob');
let btnVlt11 = document.getElementById('btnVlt11');
let btnVlt11Mob = document.getElementById('btnVlt11Mob');
let btnVlt12 = document.getElementById('btnVlt12');

btnAvn1.addEventListener('click', botaoNav);
btnAvn1.addEventListener('click', amarelo2);
btnAvn2.addEventListener('click', botaoNav);
btnAvn2.addEventListener('click', branco);
btnAvn3.addEventListener('click', botaoNav);
btnAvn3.addEventListener('click', amarelo2);
btnAvn4.addEventListener('click', botaoNav);
btnAvn4.addEventListener('click', branco);
btnSimTel5.addEventListener('click', botaoNav);
btnSimTel5.addEventListener('click', branco);
btnNaoTel5.addEventListener('click', function(){
  if(celular()){
    revela(tela8Mob);
    esconde(tela5);
  }
  else{
    revela(tela8);
    esconde(tela5);
  }
});
btnNaoTel5.addEventListener('click', branco);
btnAvn6.addEventListener('click', botaoNav);
btnAvn6.addEventListener('click', branco);
btnAvn7.addEventListener('click', function(){
  if(celular()){
    revela(tela8Mob);
    esconde(tela7);
  }
  else{
    revela(tela8);
    esconde(tela7);
  }
});
btnAvn7.addEventListener('click', branco);
btnAvn7.addEventListener('click', function() {
  btnVlt8.classList.add('passeiNo7');
  btnVlt8Mob.classList.add('passeiNo7');
})
btnAvn8.addEventListener('click', function() {
  if (verificaCaixa('1')) {
    corrigeCaixa('1');
    esconde(tela8)
    revela(tela9);
    atualizaTela9();
    document.querySelectorAll('#tela9 .caixaArrastaDestino > div:nth-of-type(1)')[0].click();
    setTimeout(function(){ scrollTop(); }, 400);
    amarelo();
  }
});
btnAvn8Mob.addEventListener('click', botaoNav);
btnAvn8Mob.addEventListener('click', amarelo);
btnAvn8Mob.addEventListener('click', atualizaTela9Mob);
btnAvn9.addEventListener('click', botaoNav);
btnAvn9.addEventListener('click', branco);
btnAvn9Mob.addEventListener('click', botaoNav);
btnAvn10.addEventListener('click', function() {
  if (verificaCaixa('2')) {
    corrigeCaixa('2');
    esconde(tela10)
    revela(tela11);
    atualizaTela11();
    document.querySelectorAll('#tela11 .caixaArrastaDestino > div:nth-of-type(1)')[0].click();
    setTimeout(function(){ scrollTop(); }, 400);
    amarelo();
  }
});
btnAvn10Mob.addEventListener('click', botaoNav);
btnAvn10Mob.addEventListener('click', atualizaTela11Mob);
btnAvn11.addEventListener('click', botaoNav);
btnAvn11.addEventListener('click', branco);
btnAvn11Mob.addEventListener('click', botaoNav);
btnAvn11Mob.addEventListener('click', branco);
btnVlt2.addEventListener('click', botaoNav);
btnVlt2.addEventListener('click', amarelo);
btnVlt31.addEventListener('click', botaoNav);
btnVlt32.addEventListener('click', botaoNav);
btnVlt31.addEventListener('click', amarelo2);
btnVlt32.addEventListener('click', amarelo2);
btnVlt41.addEventListener('click', botaoNav);
btnVlt42.addEventListener('click', botaoNav);
btnVlt41.addEventListener('click', branco);
btnVlt42.addEventListener('click', branco);
btnVlt5.addEventListener('click', botaoNav);
btnVlt5.addEventListener('click', amarelo2);
btnVlt6.addEventListener('click', botaoNav);
btnVlt6.addEventListener('click', branco);
btnVlt7.addEventListener('click', botaoNav);
btnVlt7.addEventListener('click', branco);
btnVlt8.addEventListener('click', function() {
  if (this.classList.contains('passeiNo7')) {
    revela(tela7);
    esconde(tela8);
  } else {
    revela(tela5);
    esconde(tela8);
  }
  setTimeout(function(){ scrollTop(); }, 400);
  branco();
});
btnVlt8Mob.addEventListener('click', branco);
btnVlt8Mob.addEventListener('click', function(){
  if (this.classList.contains('passeiNo7')) {
    revela(tela7);
    esconde(tela8Mob);
  } else {
    revela(tela5);
    esconde(tela8Mob);
  }
  setTimeout(function(){ scrollTop(); }, 400);
  branco();
});
btnVlt9.addEventListener('click', function(){
  escondeCertoErrado('1');
  esconde(tela9);
  revela(tela8);
  setTimeout(function(){ scrollTop(); }, 400);
  branco();
});
btnVlt9Mob.addEventListener('click', ajusta9);
btnVlt9Mob.addEventListener('click', branco);
btnVlt9Mob.addEventListener('click', botaoNav);
btnVlt10.addEventListener('click', botaoNav);
btnVlt10.addEventListener('click', amarelo);
btnVlt10Mob.addEventListener('click', branco);
btnVlt10Mob.addEventListener('click', botaoNav);
btnVlt11.addEventListener('click', branco);
btnVlt11.addEventListener('click', function(){
  escondeCertoErrado('2');
  revela(tela10);
  esconde(tela11);
  setTimeout(function(){ scrollTop(); }, 400);
});
btnVlt11Mob.addEventListener('click', ajusta11);
btnVlt11Mob.addEventListener('click', branco);
btnVlt11Mob.addEventListener('click', botaoNav);
btnVlt12.addEventListener('click', function(){
  if(celular()){
    revela(tela11Mob);
    esconde(tela12);
  }
  else{
    revela(tela11);
    esconde(tela12);
  }
});
btnVlt12.addEventListener('click', amarelo);
