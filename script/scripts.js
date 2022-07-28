const btnCadastro = document.querySelector("[data-btnCadastro]");
class Despesa {
  constructor(ano, mes, dia, tipo, descricao, valor) {
    this.ano = ano;
    this.mes = mes;
    this.dia = dia;
    this.tipo = tipo;
    this.descricao = descricao;
    this.valor = valor;
  }
  element() {
    return this;
  }
  validaDados() {
    for (let i in this) {
      if (this[i] === undefined || this[i] === "" || this[i] === null) {
        return false;
      }
      return true;
    }
  }
}
class Bd {
  constructor() {
    let id = localStorage.getItem("id");
    if (id === null) {
      localStorage.setItem("id", 0);
    }
  }
  getNextID() {
    let nextID = localStorage.getItem("id");
    return parseInt(nextID) + 1;
  }
  cadastrar(d) {
    let id = this.getNextID();

    localStorage.setItem(id, JSON.stringify(d));

    localStorage.setItem("id", id);
  }
}

let bd = new Bd();

function cadastraDespesa() {
  let ano = document.getElementById("ano");
  let mes = document.getElementById("mes");
  let dia = document.getElementById("dia");
  let tipo = document.getElementById("tipo");
  let desc = document.getElementById("descricao");
  let valor = document.getElementById("valor");
  let despesa = new Despesa(
    ano.value,
    mes.value,
    dia.value,
    tipo.value,
    desc.value,
    valor.value
  );
  if (despesa.validaDados()) {
    bd.cadastrar(despesa);
  } else {
  }
}

btnCadastro.addEventListener("click", cadastraDespesa);
