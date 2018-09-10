var table = document.querySelector('table');
var tbody = document.querySelector('tbody');
var input = document.querySelector('input');
var met1 = '0';
document.querySelector('output').textContent = 'Meia entrada : R$'+met1+',00';
var inteira = 0;
var metade = 0;
var val = 0;
var val1 = 0;
table.addEventListener('click',function (evento) {
  var celula = evento.target;
  var novo = 0;
  if((evento.target!=table)&&(evento.target!=tbody)&&(celula.className!='noclick')&&(evento.ctrlKey===false)&&(celula.className!='gree')){
    celula.className = 'gree';
    inteira++;
  }
  if((evento.target!=table)&&(evento.target!=tbody)&&(celula.className!='noclick')&&(evento.ctrlKey===true)&&(celula.className!='blue')&&(evento.shiftKey===false)){
    celula.className = 'blue';
    metade++;
  }
  if((evento.target!=table)&&(evento.target!=tbody)&&(celula.className!='noclick')&&(evento.ctrlKey===true)&&(evento.shiftKey===true)&&(celula.className!='write')&&((celula.className==='gree')||(celula.className==='blue'))){
    var valor = document.querySelector('input').value;
    if(celula.className==='gree'){
      inteira--;
      celula.className = 'write';
    }else{
      metade--;
      celula.className = 'write';
    }
  }
  var valor = document.querySelector('input').value;
  if(valor.length===0){
    valor = 0;
  }
  var met = valor/2;
  if(inteira>0){
    val = valor*inteira;
  }else{
    val = 0;
  }
  met1 = 'Meia entrada : R$'+ met;
  if(metade>0){
    val1 = met*metade;
  }else{
    val1 = 0;
  }
  document.querySelector('output').textContent = met1+',00';
  var valzao = val+val1;
  if(inteira>1){
    resumo.textContent = 'Entradas inteiras : '+inteira+' Valor : R$'+valor+',00 SubTotal : R$'+val+',00';
  }else{
    resumo.textContent = 'Entrada inteira : '+inteira+' Valor : R$'+valor+',00 SubTotal : R$'+val+',00';
  }
  if(metade>1){
    resumo1.textContent = 'Meias entradas : '+metade+' Valor : R$'+met+',00 SubTotal : R$'+val1+',00';
  }else{
    resumo1.textContent = 'Meia entrada : '+metade+' Valor : R$'+met+',00 SubTotal : R$'+val1+',00';
  }
  resumo2.textContent = 'Total : R$'+valzao+',00';
  valzao = 0;
});
input.addEventListener('keyup',function(evento){
  var valor = document.querySelector('input').value;
  var novo = 0;
  var met = valor/2;
  if(inteira>0){
    val = valor*inteira;
  }
  met1 = 'Meia entrada : R$'+ met;
  if(metade>0){
    val1 = met*metade;
  }
  document.querySelector('output').textContent = met1+',00';
  var valzao = val+val1;
  if(inteira>1){
    resumo.textContent = 'Entradas inteiras : '+inteira+' Valor : R$'+valor+',00 SubTotal : R$'+val+',00';
  }else{
    resumo.textContent = 'Entrada inteira : '+inteira+' Valor : R$'+valor+',00 SubTotal : R$'+val+',00';
  }
  if(metade>1){
    resumo1.textContent = 'Meias entradas : '+metade+' Valor : R$'+met+',00 SubTotal : R$'+val1+',00';
  }else{
    resumo1.textContent = 'Meia entrada : '+metade+' Valor : R$'+met+',00 SubTotal : R$'+val1+',00';
  }
  resumo2.textContent = 'Total : R$'+valzao+',00';
  valzao = 0;
});
