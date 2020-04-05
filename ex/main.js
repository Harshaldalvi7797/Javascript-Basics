///  <reference path="./jquery-3.4.1.min.js"/>
let numValue = undefined;

function even(numValue) {
  let username = $("#username").val();
  let pass = $("#pass").val();
  let message = undefined;

  console.log(username);
  if (username % 2 == 0) {
    message = "even";

    console.log("even number");
    document.write("even number");
  } else {
    console.log("odd number");
  }
  return message;
}
even();
// even(2);
