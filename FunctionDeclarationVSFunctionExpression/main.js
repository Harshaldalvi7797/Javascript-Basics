//Function Declaration

function add() {
  console.log("Add");
}

add();

//Function Expression

//function without parameter no return value
let add2 = function() {
  console.log("expression");
};
add2();

//Function without parameter and return value
let add3 = function() {
  return "on add3";
};
let result = add3();
console.log(result);

//function with parameter and return value
let add4 = function(numValue1, numValue2) {
  return numValue1 + numValue2;
};

result = add4(5, 10);
console.log(result);

//function with parameter and no return value

let add5 = function(numValue1, numValue2) {
  console.log(numValue1 + numValue2);
};
add5(10, 40);

//Function Declaration vs Function Expression

onSubmit1(); // call success
function onSubmit1() {
  console.log("on submit1");
}
onSubmit1(); // callsuccess

//onSubmit2();Cannot access 'onSubmit2' before initialization
let onSubmit2 = function() {
  console.log("on submit2");
};
onSubmit2(); // call success

//onSubmit3();//onSubmit3 is not a function
var onSubmit3 = function() {
  console.log("on Submit3");
};
onSubmit3(); // call success
