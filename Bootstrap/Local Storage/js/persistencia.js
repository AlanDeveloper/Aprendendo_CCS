const Persistencia = {
  adiciona: function (chave,obj) {
    let vetor = [];
    if(this.existe(chave)){
      vetor = this.carrega(chave);
    }
    vetor.push(obj);
    this.salva(chave,vetor);
  },
  salva: function (chave,obj) {
    localStorage[chave] = JSON.stringify(obj);
  },
  carrega: function (chave) {
    if(this.existe(chave)){
      return JSON.parse(localStorage[chave]);
    }else{
      return null;
    }
  },
  existe: function (chave) {
    return localStorage[chave] ? true: false;
  }
};
