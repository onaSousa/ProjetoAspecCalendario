let sectionOk = "";
// ---------------------------------------
// salva os dados do input e pega os mesmos dados
// ---------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.querySelectorAll("input[class='okCheckBox']");

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
const month = document.querySelectorAll(".month");
const btnMonth = document.querySelectorAll(".btn-month");

btnMonth.forEach((btn) => {
  btn.addEventListener("click", () => {
    // execulta uma função em cada div no que estão dados no month e active
    document.querySelectorAll(".month.active").forEach(function (mes) {
      mes.classList.remove("active");
      console.log(mes);
    });

    // addc e remove o active no correspondente btn mes
    let divActive = document.querySelector(`${".active"}`);
    if (divActive) {
      divActive.classList.remove("active");
    }

    // marca o mês que eu clicar
    btn.classList.toggle("active");

    // chama os dados que eu estou precisando em cada btn
    document.querySelector(`#${btn.id.slice(0, 3)}`).classList.add("active");
    sectionOk = `#${btn.id.slice(0, 3)}`;
  });
});

// ---------------------------------------
// Marca o mês Atual
// ---------------------------------------
// pega o mês Atual e verifica se tem o mes na minha tag main

function mesAtual() {
  const data = new Date();
  const month = data.getMonth();

  switch (month) {
    case 0:
      return "jan";
      break;
    case 1:
      return "fev";
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
// ativa a marcação do btn do mes atual
document.getElementById(mesMarcado).classList.toggle("active");

// chama a div que o btn correspondente
document.getElementById(`${mesMarcado}-btn`).classList.toggle("active");
