var sectionOk = ''

const mes = [
  {
    id: 1,
    category: "janeiro",
  },
  {
    id: 2,
    category: "fevereiro",
  },
  {
    id: 3,
    category: "março",
  },
  {
    id: 4,
    category: "abril",
  },
  {
    id: 5,
    category: "maio",
  },
  {
    id: 6,
    category: "junho",
  },
  {
    id: 7,
    category: "julho",
  },
  {
    id: 8,
    category: "agosto",
  },
  {
    id: 9,
    category: "setembro",
  },
  {
    id: 10,
    category: "outubro",
  },
  {
    id: 11,
    category: "novembro",
  },
  {
    id: 12,
    category: "dezembro",
  },
];

// mudar as option do mês
const month = document.querySelectorAll(".month");
const btnMonth = document.querySelectorAll(".btn-month");
const monthJan = document.querySelector(".section-janeiro");
const monthFeb = document.querySelector(".section-fevereiro");

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



// // Marcação dos checkBox
// function save() {
//   localStorage.setItem("inptMes", JSON.stringify(inptMes));
// }

// // Marcação dos checkBox
// const inpCheckBox1 = document.querySelectorAll(".okCheckBox");

// inpCheckBox1.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     if(event.target.checked) {
//       inptMes.push(
//         {
//           name: event.target.name
//         }
//         );
//       }
//       save();
//   });
// })

// ler o localStorage, JSON.parese para transformar em objeto
