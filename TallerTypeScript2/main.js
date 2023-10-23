"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_js_1 = require("./data.js");
var seriesTable = document.getElementById("serie");
mostrarDatosSerie(data_js_1.listaseries);
function mostrarDatosSerie(allseries) {
    allseries.forEach(function (serie) {
        var tbodyAprendiz = document.createElement("tr");
        tbodyAprendiz.innerHTML = "\n      <td>".concat(serie.id, "</td>\n      <td>\n        <a href=\"#\" onclick=").concat(mostrarCard(serie), ">").concat(serie.name, "</a>\n      </td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>\n    ");
        seriesTable.appendChild(tbodyAprendiz);
    });
}
function mostrarCard(serie) {
    var card = document.getElementById('card');
    card.innerHTML = "\n      <div class=\"card\" style=\"width: 18rem;\">\n      <img class=\"card-img-top\" src=".concat(serie.image, " alt=").concat(serie.name, ">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n        <p class=\"card-text\">").concat(serie.description, "</p>\n        <a href=").concat(serie.link, " target = ").concat(serie.link, " >Link ver serie</a>\n      </div>\n    </div>\n  ");
}
