
import { compose } from "redux"; 



function removeSpaces(string) {
  return string.split(" ").join("");
}

function repeatString(string) {
  return string + string;
}

function convertToUpper(string) {
  return string.toUpperCase();
}

const input = "abc def hij";


const composedFunction = compose(removeSpaces,repeatString,convertToUpper) //now this is it self a composed function

console.log(composedFunction(input));
