let sectionOk = "";
// ---------------------------------------
// salva os dados do input e pega os mesmos dados
// ---------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.getElementsByClassName("okCheckBox");

  for (var item of checkbox) {
    item.addEventListener("click", function () {
      localStorage.item // verifico se existe localStorage
        ? (localStorage.item =
          localStorage.item.indexOf(this.id + ",") == -1 // verifico de localStorage contém o id
            ? localStorage.item + this.id + "," // não existe. Adiciono a id no loaclStorage
            : localStorage.item.replace(this.id + ",", "")) // já existe, apago do localStorage
        : (localStorage.item = this.id + ","); // não existe. Crio com o id do checkbox
    });
  }

  if (localStorage.item) {
    // verifico se existe localStorage
    for (var item of checkbox) {
      // existe, percorro as checkbox
      item.checked =
        localStorage.item.indexOf(item.id + ",") != -1 ? true : false; // marco true nas ids que existem no localStorage
    }
  }
});

// ---------------------------------------
// altera entre as atividades dos mes
// ---------------------------------------
let month = document.querySelectorAll(".month");
let btnMonth = document.querySelectorAll(".btn-month");

btnMonth.forEach((btn) => {
  btn.addEventListener("click", () => {
    localStorage.setItem("sectionOk", btn.id);
    // execulta uma função em cada div no que estão dados no month e active
    document.querySelectorAll(".month.marcado").forEach(function (mes) {
      mes.classList.remove("marcado");
    });

    // addc e remove o active no correspondente btn mes
    let divActive = document.querySelector(`${".active"}`);
    if (divActive) {
      divActive.classList.remove("active");
    }

    // marca o mês que eu clicar
    btn.classList.toggle("active");

    // chama os dados que eu estou precisando em cada btn
    document.querySelector(`#${btn.id.slice(0, 3)}`).classList.add("marcado");
    sectionOk = `#${btn.id.slice(0, 3)}`;
  });
});
let pegar = localStorage.getItem("sectionOk");

if (pegar) {
  var marcaSalva = document.querySelector(`#${pegar.slice(0, 3)}`);
  sectionOk = `#${pegar.slice(0, 3)}`;
  marcaSalva.classList.toggle("marcado");

}
if (pegar) {
  var marcaSalva = document.querySelector(`#${pegar}`);
  sectionOk = `#${pegar}`;
  marcaSalva.classList.toggle("active");
}


// // ---------------------------------------
// // Marca o mês Atual
// // ---------------------------------------
// // pega o mês Atual e verifica se tem o mes na minha tag main

function mesAtual() {
  const data = new Date();
  const month = data.getMonth();

  switch (month) {
    case 0:
      return "jan";
      break;
    case 1:
      return "fev";
      break;
    case 2:
      return "mar";
      break;
    case 3:
      return "abr";
      break;
    case 4:
      return "mai";
      break;
    case 5:
      return "jun";
      break;
    case 6:
      return "jul";
      break;
    case 7:
      return "ago";
      break;
    case 8:
      return "set";
      break;
    case 9:
      return "out";
      break;
    case 10:
      return "nov";
      break;
    case 11:
      return "dez";
      break;
  }
}

let mesMarcado = mesAtual();
// ativa a marcação do btn do mes atua
let monthMarcadoMesAtual = document.getElementById(mesMarcado).classList.toggle("marcado");

// chama a div que o btn correspondente
let btnMonthMarcadoAtual = document.getElementById(`${mesMarcado}-btn`).classList.toggle("active");

// desmarca se for a 2 segunda entrada no programa
if (pegar) {
  monthMarcadoMesAtual = document.getElementById(mesMarcado).classList.remove("marcado");

  btnMonthMarcadoAtual = document.getElementById(`${mesMarcado}-btn`).classList.remove("active");
}

// // ---------------------------------------
// // abrir as anotações digitar e enviar
// // ---------------------------------------


let boxColumnNotes = document.querySelector(".column-notes")
const noteList = document.getElementById('noteList')

atualizar()
function saveNotes() {
  boxColumnNotes.style.display = "block"
}

function btnSubmit(){
  let arraySalvoLocal = []
  
  // salva todo dado que for digitado no input criando lista infinita
  if(localStorage.getItem('dados') != null){
    arraySalvoLocal = JSON.parse(localStorage.getItem('dados'))
  }else{
    arraySalvoLocal;
  }

  let notesInput = document.getElementById('notesInput').value;
  // cria um objeto com as informações que digito no INPUT
  let info = {
    notesInput
  };
// coloca as informações do objeto dentro do array
  arraySalvoLocal.push(info)
// salva em forma de string os dados no localStorage
  let infoJson = JSON.stringify(arraySalvoLocal)
  localStorage.setItem('dados', infoJson)

  pegandoDadosColocandoLista()

}

function pegandoDadosColocandoLista(){
  const pegaLocalStorage = JSON.parse(localStorage.getItem('dados'))

  if(pegaLocalStorage != null){
    let tr = '';
    pegaLocalStorage.map(conteudo => {
      tr += `
          <tr>
           <td> ${conteudo.notesInput}</td>
          </tr><br>`
    })
noteList.innerHTML = tr
  }
}
function atualizar(){
  const localSave = JSON.parse(localStorage.getItem('dados'))

  if(localSave != null){
    let tr = '';
    localSave.map(conteudo => {
      tr += `
          <tr>
           <td> ${conteudo.notesInput}</td>
          </tr><br>
      `
    })
  noteList.innerHTML = tr
  }
 
}