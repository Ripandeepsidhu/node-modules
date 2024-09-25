import { reverseString , countCharacters , toUpperCase , toLowerCase } from "./stringUtils";
import fs from 'fs';
import path from "path";
const sentence: string = "Learning Node.js is important because it enables server-side JavaScript.";

const reversedSentence: string = reverseString(sentence);

const filePath: string = path.join(__dirname, 'reversed.txt');
fs.writeFileSync(filePath, reversedSentence);

console.log("Reversed sentence saved to:", filePath);


console.log(countCharacters('hello world'));
console.log(toUpperCase('hello world'))
console.log(toLowerCase('NODE MODULES'))