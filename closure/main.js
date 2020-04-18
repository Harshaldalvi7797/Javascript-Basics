function mainDemo() {
  let func1 = function(numValue1, numValue2) {
    return numValue1 + numValue2;
  };
  return func1;
}

mainDemo();

let Mainresult = mainDemo();
let result = Mainresult(10, 25);
console.log(result);
