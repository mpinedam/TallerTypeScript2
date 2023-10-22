import { listaseries } from "./data.js";
var seriesTable = document.getElementById("serie");
mostrarDatosSerie(listaseries);
function mostrarDatosSerie(allseries) {
    allseries.forEach(function (serie) {
        var tbodyAprendiz = document.createElement("tr");
        tbodyAprendiz.innerHTML = "\n      <td>".concat(serie.id, "</td>\n      <td>\n        <a href=\"#\" onclick=").concat(mostrarCard(serie), ">").concat(serie.name, "</a>\n      </td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>\n    ");
        seriesTable.appendChild(tbodyAprendiz);
    });
}
function mostrarCard(serie) {
    console.log(serie);
    var card = document.getElementById('card');
    card.innerHTML = "\n      <div class=\"card\" style=\"width: 18rem;\">\n      <img class=\"card-img-top\" src=".concat(serie.image, " alt=").concat(serie.name, ">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n        <p class=\"card-text\">").concat(serie.description, "</p>\n        <a href=").concat(serie.link, " class=\"btn btn-primary\">Link ver serie</a>\n      </div>\n    </div>\n  ");
}
