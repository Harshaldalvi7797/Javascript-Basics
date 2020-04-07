// Function Declaration

function add1() {
  console.log("function Declaration");
}
add1();

//Function Expression

let add2 = function(strFullname) {
  console.log("function Expression");
  return strFullname;
};
let result = add2("Harshal");
console.log(result);

// Arrow Function

// let add3 = () => console.log("Arrow function");
let add3 = () => {
  console.log("Arrow function");
  return "hii ";
};
// let add3 = () => return "hii"; cannot use return in single line arrow function

result = add3();
console.log(result);

let add4 = strname => {
  // return "hiiiii";not call
  console.log(strname);
};
add4("Harshal");

let add5 = strname => {
  return strname;
  console.log(strname);
};
result = add5("Harshal");
console.log(result);
