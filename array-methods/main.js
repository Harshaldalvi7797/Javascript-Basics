numArray = [1, 2, 3, 4, 5, 6];
function even(num) {
  return num % 2 == 0;
}
var newArr = numArray.filter(even);
console.log(newArr);
