export const compareLetters = (newWord, correctWord, inputArray) => {
    for(let i = 0; i < newWord.length; i++) {
        // console.log(newWord);
        // console.log(correctWord);
        if(newWord[i] === correctWord[i]) {
            console.log(inputArray);
            inputArray[i].classList.add("green-tile");
            inputArray[i].value = "";
            inputArray[i].value = newWord[i];
            console.log(inputArray[i]);
        } else {
            inputArray[i].classList.remove("green-tile");
            console.log("This letter does not belong here");
        }
    }
}