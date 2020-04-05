let numValue1 = 10;
let numValue2 = 10;

// == operator

if (numValue1 == numValue2) {
  console.log("Both value are same");
} else {
  console.log("Both value are differnrt");
}

//using ternary operator
let message = undefined;
numValue1 == numValue2 ? console.log("Both value are same") : null;

message =
  numValue1 == numValue2 ? "Both value are same" : "Both value are differnrt";
console.log(message);

let strValue = "10";
let numValue3 = 10;

// ===  for also check data type

if (strValue === numValue3) {
  console.log("Both value are same");
} else {
  console.log("Both value are differnrt");
}

let numValue4 = 10;
let numValue5 = 11;
if (numValue4 != numValue5) {
  console.log("true");
} else {
  console.log("false");
}

let strValue1 = "Harshal";
let strValue2 = "Dalvi";
if (strValue1 == strValue2) {
  console.log("true");
} else {
  console.log("false");
}

if (strValue1 == "Harshal" && strValue2 == "Dalvi") {
  console.log("true");
} else {
  console.log("false");
}
if (strValue1 == "Harshal" || strValue2 == "d") {
  console.log("true");
} else {
  console.log("false");
}
