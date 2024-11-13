import axios from "axios";

axios.defaults.headers.common["x-api-key"] =
  "live_mnSSEBghx2aGY7jFVu5xJ2blXd4XXDRrnw5lwFgI4XIvlaSKetieTFURkeuR0xQT";

export const eventSelect = document.querySelector(".breed-select");
const eventCatInfo = document.querySelector(".cat-info");
const loadingIndicator = document.querySelector(".loader");
const errorIndicator = document.querySelector(".error");

let nameCat = "";
let description = "";
let temperament = "";
loadingIndicator.style.display = "block";
errorIndicator.style.display = "none";

export function fetchBreeds() {
  fetch("https://api.thecatapi.com/v1/breeds")
    .then((responce) => {
      const formJson = responce.json();
      return formJson;
    })
    .then((breadsArray) => {
      breadsArray.forEach((element) => {
        eventSelect.insertAdjacentHTML(
          "beforeend",
          `<option value="${element.id}">${element.name}</option>`
        );
      });
      return breadsArray;
    })
    .catch((error) => {
      console.log("error fetch", error);
    });
}
export function fetchCatInfo(idCat) {
  fetch("https://api.thecatapi.com/v1/breeds")
    .then((responce) => {
      const formJson = responce.json();
      return formJson;
    })
    .then((breadsArray) => {
      console.log(breadsArray);
      breadsArray.forEach((element) => {
        if (element.id == idCat) {
          nameCat = element.name;
          temperament = element.temperament;
          description = element.description;
        }
      });
    })

    .then(() => {
      return fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${idCat}`
      );
    })
    .then((response) => {
      const formJson = response.json();
      return formJson;
    })
    .then((catInfoArray) => {
      console.log(catInfoArray);
      eventCatInfo.innerHTML = `<h1>${nameCat}</h1><h2>${temperament}</h2><p>${description}</p><img src="${catInfoArray[0].url}" alt="" width="500" height="400">`;
      loadingIndicator.style.display = "none";
    })
    .catch((error) => {
      console.error("Error fetching cat info:", error);
      errorIndicator.style.display = "block";
      errorIndicator.style.color = "red";
    });
}
