import { eventSelect, fetchCatInfo, fetchBreeds } from "./index.js";
fetchBreeds();
eventSelect.addEventListener("change", (event) => {
  const selectedBreedId = event.target.value;
  if (selectedBreedId) {
    // Викликати функцію для виконання запиту за повною інформацією про кота
    fetchCatInfo(selectedBreedId);
  }
});
