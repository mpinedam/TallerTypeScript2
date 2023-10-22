import { listaseries } from "./data.js";
var seriesTable = document.getElementById("serie");
mostrarDatosSerie(listaseries);
function mostrarDatosSerie(allseries) {
    allseries.forEach(function (serie) {
        var tbodyAprendiz = document.createElement("tr");
        tbodyAprendiz.innerHTML = "<tr><td>".concat(serie.id, "</td> <td><a href=\"").concat(serie.name, "\" target=").concat(serie.link, ">").concat(serie.name, "</a></td> <td>").concat(serie.channel, "</td> <td>").concat(serie.seasons, "</td> </tr>");
        seriesTable.appendChild(tbodyAprendiz);
    });
}
