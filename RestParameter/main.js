let numArray = [1, 2, 3, 4, 5];

function dispplay(numArrayPara) {
  numArrayPara.forEach(element => {
    console.log(numArray);
  });
}
dispplay(numArray);

//Rest parameter

function dispplay2(numValue, ...numArrayPara) {
  numArrayPara.forEach(element => {
    console.log(element);
  });
  console.log(numValue);
}

dispplay2(1, 2, 3, 4, 5, 6, "hello", true);
