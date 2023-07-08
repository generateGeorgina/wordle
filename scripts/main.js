import { newWord } from "./newWord.js";
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener('click', (event) => newWord(event));