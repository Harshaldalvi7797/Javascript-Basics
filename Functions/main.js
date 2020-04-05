//Function without parameter no return value
function add1() {
  //Define variables
  let numValue1 = 10;
  let numValue2 = 25;

  console.log(numValue1 + numValue2);
}

//Function without parameter and return values
function add2() {
  //Define variables
  let numValue1 = 10;
  let numValue2 = 5;

  // let result = numValue1 + numValue2;
  // return result;
  return numValue1 + numValue2;
}

// Function with parameter but no return value

function add3(numValue1, numValue2) {
  console.log(numValue1 + numValue2);
}

// Function with parameter and  return value

function add4(numValue1, numValue2) {
  return numValue1 + numValue2;
}

//calling function
add1();

let result = add2();
console.log(result);

add3(5, 5);

let result4 = add4(50, 50);
console.log(result4);
console.log(add4(5, 50));
