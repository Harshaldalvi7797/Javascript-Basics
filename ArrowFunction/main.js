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

let add3 = () => console.log("Arrow function");

add3();
let add4 = strname => {
  console.log(strname);
};
add4("Harshal");
