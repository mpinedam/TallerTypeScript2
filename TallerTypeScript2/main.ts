import { series } from "./series.js";

import { listaseries } from "./data.js";

let seriesTable: HTMLElement = document.getElementById("serie")!;

mostrarDatosSerie(listaseries);

function mostrarDatosSerie(allseries: series[]): void {
  
  allseries.forEach((serie) => {
    let tbodyAprendiz = document.createElement("tr");
    tbodyAprendiz.innerHTML = `<tr><td>${serie.id}</td> <td><a href="${serie.name}" target=${serie.link}>${serie.name}</a></td> <td>${serie.channel}</td> <td>${serie.seasons}</td> </tr>`;
    seriesTable.appendChild(tbodyAprendiz);
  }) ;

}
