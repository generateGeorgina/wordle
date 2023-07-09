export const compareLetters = (newWord, correctWord, inputArray) => {
    // iterate over newWord to find if letters are in the correct place
    for(let i = 0; i < newWord.length; i++) {
        // console.log(newWord);
        // console.log(correctWord);
        if(newWord[i] === correctWord[i]) {
            // console.log(inputArray);
            // display a green background when letter is in the correct place
            inputArray[i].classList.add("green-tile");
            // refresh the input box so that the background colour can be updated
            inputArray[i].value = "";
            inputArray[i].value = newWord[i];
            // console.log(inputArray[i]);
        } else {
            // remove background colour if letter is not in the right place
            inputArray[i].classList.remove("green-tile");
            // console.log("This letter does not belong here");
        }
    }
}