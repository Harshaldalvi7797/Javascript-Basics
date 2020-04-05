// for (let counter = 0; counter <= 10; counter++) {
//   //   document.write("<h1> +counter+ </h1>");
//   document.write(`<h1>${counter} I hate</h1>`);
//   document.write("</br>");
// }

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(numArray.length);
// console.log(numArray.lastIndexOf(3));

// for (let counter = 0; counter <= numArray.length - 1; counter++) {
//   console.log(numArray[counter]);
// }

for (let num of numArray) {
  if (num <= 5) {
    //console.log(num);
    continue;
    //break;
  }

  console.log(num);
  // console.log("hii");
}
let strArray = ["Harshal", "Saylee", "Minal", "Samarth", "Siddhant"];

let str1 = "Hello";
str1 = str1 + " hello1";
for (let i of strArray) {
  // document.write("<h1>" + i + "</h1>"); // Mutable string
  // document.write(`<h1>${i}</h1>`); //Immutable string good practise
  // document.write("</br>");
}

for (let counter = 0; counter <= 5; counter++) {
  for (let counter1 = 0; counter1 <= counter; counter1++) {
    console.log(counter1);
    document.write("*");
  }
  document.write("</br>");
}
