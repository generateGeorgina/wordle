import { compareLetters } from "./compareLetters.js";
import { inputElements } from "./inputArray.js";
import { words } from "./words.js";

export const newWord = (event) => {
    event.preventDefault();
    // Get each letter from the box and then concatenate them to form the word
    const firstLetter = inputElements[0].value;
    const secondLetter = inputElements[1].value;
    const thirdLetter = inputElements[2].value;
    const fourthLetter = inputElements[3].value;
    const fifthLetter = inputElements[4].value;
    
    const wordGuess = firstLetter + secondLetter + thirdLetter + fourthLetter + fifthLetter;
    console.log(wordGuess);
    compareLetters(wordGuess, words[0], inputElements);
};