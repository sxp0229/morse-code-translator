const morseCode = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--.."
};

export const morseCodeToText = (inputString) => {
  let words = inputString.split(/([!,?,.,:," "])/);
  console.log(words);
};