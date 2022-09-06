var sectionOk = ''


document.addEventListener("DOMContentLoaded", function(){

  var checkbox = document.querySelectorAll("input[class='okCheckBox']");

  for(var item of checkbox){
     item.addEventListener("click", function(){
        localStorage.item ? // verifico se existe localStorage
           localStorage.item = localStorage.item.indexOf(this.id+",") == -1 // verifico de localStorage contém o id
           ? localStorage.item+this.id+"," // não existe. Adiciono a id no loaclStorage
           : localStorage.item.replace(this.id+",","") : // já existe, apago do localStorage
        localStorage.item = this.id+",";  // não existe. Crio com o id do checkbox
     });
  }

  if(localStorage.item){ // verifico se existe localStorage
     for(var item of checkbox){ // existe, percorro as checkbox
        item.checked = localStorage.item.indexOf(item.id+",") != -1 ? true : false; // marco true nas ids que existem no localStorage
     }
  }
});



// altera entre as tarefas do mês

const month = document.querySelectorAll(".month");
const btnMonth = document.querySelectorAll(".btn-month");


btnMonth.forEach((btn) => {
  btn.addEventListener("click", () => {
    if(sectionOk ){
      const section = document.querySelector(`${sectionOk}`);
      section.classList.remove("active");
    }
   document.querySelector(`#${btn.id.slice(0, 3)}`).classList.add("active");
   sectionOk = `#${btn.id.slice(0, 3)}`
    
  });
});


   
