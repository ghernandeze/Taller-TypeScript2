import { Serie } from './serie.js'; 
import { data as series } from './data.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;
const averageElm: HTMLElement = document.getElementById("average")!;
const serieDetail: HTMLElement = document.getElementById("serie-detail")!;
const serieTitle: HTMLElement = document.getElementById("serie-title")!;
const serieChannel: HTMLElement = document.getElementById("serie-channel")!;
const serieSeasons: HTMLElement = document.getElementById("serie-seasons")!;

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(s => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.id}</td>
                           <td>${s.name}</td>
                           <td>${s.channel}</td>
                           <td>${s.seasons}</td>`;
    trElement.addEventListener('click', () => showSerieDetails(s));
    seriesTbody.appendChild(trElement);
  });
}

function showSerieDetails(serie: Serie): void {
  serieDetail.style.display = "block";
  
  serieDetail.innerHTML = ''; 

  const serieImage = document.createElement("img");
  serieImage.src = serie.imageUrl; 
  serieImage.alt = `Image of ${serie.name}`; 
  serieImage.classList.add("card-img-top"); 
  serieDetail.appendChild(serieImage); 

  const cardBody = document.createElement('div');
  cardBody.classList.add("card-body");
  
  const serieTitle = document.createElement("h5");
  serieTitle.classList.add("card-title");
  serieTitle.textContent = serie.name;
  
  const serieChannel = document.createElement("h6");
  serieChannel.classList.add("card-subtitle", "mb-2", "text-muted");
  serieChannel.textContent = `Channel: ${serie.channel}`;
  
  const serieSeasons = document.createElement("p");
  serieSeasons.classList.add("card-text");
  serieSeasons.textContent = `Seasons: ${serie.seasons}`;
  
  const serieDescription = document.createElement("p");
  serieDescription.textContent = serie.description;
  serieDescription.classList.add("card-text");
  
  const moreInfoLink = document.createElement("a");
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

function getAverageSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  series.forEach((s) => totalSeasons += s.seasons);
  const averageSeasons: number = series.length > 0 ? totalSeasons / series.length : 0;
  return averageSeasons;
}

renderSeriesInTable(series);
averageElm.innerHTML = `Average seasons: ${getAverageSeasons(series)}`;
