export const compareLetters = (newWord, correctWord, inputArray) => {
    for(let i = 0; i < newWord.length; i++) {
        // console.log(newWord);
        // console.log(correctWord);
        if(newWord[i] === correctWord[i]) {
            inputArray[i].classList.toggle("green-tile");
            console.log(inputArray[i]);
        } else {
            console.log("This did not work");
        }
    }
}