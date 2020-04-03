"use strict";
let numValue = 10;
console.log(numValue);
let numValue1 = 25;
// let result = numValue + numValue1;
// console.log(result);
// console.log("addition = ", numValue + numValue1);

//addition of number and string

let numValue2 = 10;
let strValue = "10";
console.log(numValue2 + strValue);

// mix

let numValue3 = 10;
let numValue4 = 10;
let strValue1 = "2";
let numValue5 = 1;
let numValue6 = 1;
let result = numValue3 + numValue4 + strValue1 + numValue5 + numValue6;
console.log(result);
result = numValue4 * strValue1 + numValue5 * numValue6;
console.log(result);
result = (numValue3 + numValue4) * (strValue1 + numValue5) * numValue6;
console.log(result);

//string concat
let strFirstname = "Harshal";
let strLastname = "Dalvi";
let strResult = strFirstname + " " + strLastname;
console.log(strResult);

//string interpletation

strResult = `<h1>${strFirstname} 
${strLastname}</h1>`;
console.log(strResult);
document.write(strResult);
document.write("<h2>strResult</h2>"); //we cant apply html tags

// strResult1 = "<h1>${strFirstname}
// ${strLastname}</h1>";
// console.log(strResult1); we cant apply

result = Math.pow(2, 3);
console.log(result);

result = 2 ** 3;
console.log(result);

result = result % 2;
console.log(result);

//Increment in javascript
let numValue8 = 1;
numValue8++;
let numValue9 = numValue8;
console.log(numValue9);
