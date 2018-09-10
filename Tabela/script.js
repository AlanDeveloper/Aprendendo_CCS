//console.log('ola');

var table = document.querySelector('table');

// table.onclick = function () {
//   alert('click!');
// }

table.addEventListener('click',function (evento) {
  //  console.log(this);this o objeto que executou a função
  var celula = evento.target;

  if(celula.className === 'pt') {
    celula.className = 'mt';
  } else {
    celula.className = 'pt';
  }
});
