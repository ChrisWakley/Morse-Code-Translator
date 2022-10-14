// import { alphabet } from "./morse.js";

const alphabet = {
    "a": ".- ",
    "b": "-... ",
    "c": "-.-. ",
    "d": "-.. ",
    "e": ". ",
    "f": "..-. ",
    "g": "--. ",
    "h": ".... ",
    "i": ".. ",
    "j": ".--- ",
    "k": "-.- ",
    "l": ".-.. ",
    "m": "-- ",
    "n": "-. ",
    "o": "--- ",
    "p": ".--. ",
    "q": "--.- ",
    "r": ".-. ",
    "s": "... ",
    "t": "- ",
    "u": "..- ",
    "v": "...- ",
    "w": ".-- ",
    "x": "-..- ",
    "y": "-.-- ",
    "z": "--.. ",
    "0": "----- ",
    "1": ".---- ",
    "2": "..--- ",
    "3": "...-- ",
    "4": "....- ",
    "5": "----- ",
    "6": "-.... ",
    "7": "--.... ",
    "8": "---.. ",
    "9": "----. ",
    ".": ".-.-.- ",
    ",": "--..-- ",
    ":": "---... ",
    "'": ".----. ",
    '"': ".----. ",
    "-": "-....- ",
    "@": ".--.-. ",
    "=": "-...- ",
    " ": "/ ",
    "?": "..--.. ",
    "/": "-..-. ",
};

// export const translateEnglish = (e) => {
//     const inputText = input.value;
//     const noInput = checkEmptyField(inputText);
//     if(noInput) {
//         result.textContent = 'no input detected.';
//     } else {result.textContent = "";
// const morse = inputText.toLowerCase().split("");
// morse.forEach((letter) => (result.textContent += alphabet[letter]));
//     }
// };

export const translateEnglish = (word) => {
    let code = "";
    let input = word;
    const noInput = checkEmptyField(input);
    if(noInput) {
        return "no input detected.";
    } else { 
        input = "";
        let morse = word.toLowerCase().split("");
        morse.forEach((letter) => (code += alphabet[letter]));
    }
    return code;
};

const checkEmptyField = (word) => {
    if(word.length === 0) {
        return true;
    } else {
        return false;
    }
};


