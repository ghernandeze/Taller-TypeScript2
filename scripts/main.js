import { data as series } from './data.js';
var seriesTbody = document.getElementById('series');
var averageElm = document.getElementById("average");
var serieDetail = document.getElementById("serie-detail");
var serieTitle = document.getElementById("serie-title");
var serieChannel = document.getElementById("serie-channel");
var serieSeasons = document.getElementById("serie-seasons");
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                           <td>").concat(s.name, "</td>\n                           <td>").concat(s.channel, "</td>\n                           <td>").concat(s.seasons, "</td>");
        trElement.addEventListener('click', function () { return showSerieDetails(s); });
        seriesTbody.appendChild(trElement);
    });
}
function showSerieDetails(serie) {
    serieDetail.style.display = "block";
    serieDetail.innerHTML = '';
    var serieImage = document.createElement("img");
    serieImage.src = serie.imageUrl;
    serieImage.alt = "Image of ".concat(serie.name);
    serieImage.classList.add("card-img-top");
    serieDetail.appendChild(serieImage);
    var cardBody = document.createElement('div');
    cardBody.classList.add("card-body");
    var serieTitle = document.createElement("h5");
    serieTitle.classList.add("card-title");
    serieTitle.textContent = serie.name;
    var serieChannel = document.createElement("h6");
    serieChannel.classList.add("card-subtitle", "mb-2", "text-muted");
    serieChannel.textContent = "Channel: ".concat(serie.channel);
    var serieSeasons = document.createElement("p");
    serieSeasons.classList.add("card-text");
    serieSeasons.textContent = "Seasons: ".concat(serie.seasons);
    var serieDescription = document.createElement("p");
    serieDescription.textContent = serie.description;
    serieDescription.classList.add("card-text");
    var moreInfoLink = document.createElement("a");
    moreInfoLink.href = serie.infoUrl;
    moreInfoLink.textContent = "¡Accede a la página para verla!";
    moreInfoLink.target = "_blank";
    moreInfoLink.classList.add("btn", "btn-primary", "mt-2");
    cardBody.appendChild(serieTitle);
    cardBody.appendChild(serieChannel);
    cardBody.appendChild(serieSeasons);
    cardBody.appendChild(serieDescription);
    cardBody.appendChild(moreInfoLink);
    serieDetail.appendChild(cardBody);
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (s) { return totalSeasons += s.seasons; });
    var averageSeasons = series.length > 0 ? totalSeasons / series.length : 0;
    return averageSeasons;
}
renderSeriesInTable(series);
averageElm.innerHTML = "Average seasons: ".concat(getAverageSeasons(series));
