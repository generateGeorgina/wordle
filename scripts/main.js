import { newWord } from "./newWord.js";

// Submit button event listener
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener('click', (event) => newWord(event));