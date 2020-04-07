/// Default parameter

function onDisplay(strFname, strLname, intAge = 0) {
  return `my name is ${strFname} ${strLname}. My age is ${intAge}`;
}
let result = onDisplay("Harshal", "Dalvi");
console.log(result);
result = onDisplay("Saylee", "Mane", 22);
console.log(result);
result = onDisplay("Minal", "Dalvi", 21);
console.log(result);
