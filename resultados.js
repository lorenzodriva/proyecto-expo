document.addEventListener("DOMContentLoaded", () => {

    let parametro = localStorage.getItem('usoApps'); 

    let dia = Math.floor(parametro / 60)

    let semana = Math.floor(parametro * 7 / 60)

    let mes = Math.floor(parametro * 30 / 60)

    let año = Math.floor(parametro * 365 / 60)

    const cardDia = document.getElementById("dia");
    const cardSemana = document.getElementById("semana");
    const cardMes = document.getElementById("mes");
    const cardAño = document.getElementById("año");

    cardDia.textContent = dia; 
    cardSemana.textContent = semana;
    cardMes.textContent = mes;
    cardAño.textContent = año;

  const cardArbol = document.getElementById("arbol");
  const cardTrotar = document.getElementById("trotar");
  const cardAgua = document.getElementById("agua");
  const cardEmpanada = document.getElementById("empanada");
  const cardDelfin = document.getElementById("delfin");
  const cardDormir = document.getElementById("siesta");

  let arbol = Math.floor(parametro / 12);
  let trotar = Math.floor(parametro / 8);
  let agua = Math.floor(parametro / 0.5);
  let empanada = Math.floor(parametro / 6);
  let delfin = Math.floor(parametro / 45);
  let dormir = Math.floor(parametro / 90);

  cardArbol.innerHTML = `<b>Hubieras plantado ${arbol} Árboles </b>`;
  cardTrotar.textContent = `Hubieras trotado ${trotar} KM`;
  cardAgua.innerHTML = `Hubieras tomado ${agua} Vasos de agua`;
  cardEmpanada.innerHTML = `Hubieras cocinado ${empanada} Empanadas`;
  cardDelfin.innerHTML = `Hubieras adiestrado ${delfin} Delfines`;
  cardDormir.innerHTML = `Hubieras dormido ${dormir} Siestas`;

});
