import { series } from "./series.js";
import { listaseries } from "./data.js";

let seriesTable: HTMLElement = document.getElementById("serie")!;

mostrarDatosSerie(listaseries);

function mostrarDatosSerie(allseries: series[]): void {
  allseries.forEach((serie) => {
    let tbodyAprendiz = document.createElement("tr");
    tbodyAprendiz.innerHTML = `
      <td>${serie.id}</td>
      <td>
        <a href="#" onclick=${mostrarCard(serie)}>${serie.name}</a>
      </td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    seriesTable.appendChild(tbodyAprendiz);
  });
}

function mostrarCard(serie: series): void {
  let card:HTMLElement = document.getElementById('card')!;
  card.innerHTML = `
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src=${serie.image} alt=${serie.name}>
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href=${serie.link} target = ${serie.link} >Link ver serie</a>
      </div>
    </div>
  `;
}
