import { morseCodeToText } from "./index";
import { it, expect } from "@jest/globals"  // built in methods to jest testing framework

// write a test case
const testData = [ 
  ["A", ".- .-"], 
  ["Sam", "... .- --"], 
  ["Hello Sheena", ".... . .-.. .-.. --- / ... .... . . -. .-"], 
  ["Hi!", ".... .. -.-.--"], 
  ["Hi! My name is Sheena", ".... .. -.-.-- / -- -.-- / -. .- -- . / .. ... / ... .... . . -. .- .-.-.-"]
];

testData.forEach((element) => {
    it(`${element[0]} translated to Morse Code yields ${element[1]}`, () =>{
        const result = morseCodeToText(element[0]);
        expect(result).toBe(element[1]);
    })
});
