///  <reference path="./saylee.js"/>

let mainDemoObj = new mainDemo();
mainDemoObj.demo1();
mainDemoObj.demo2();

//method define outside the class using prototype
mainDemo.prototype.demo3 = function() {
  console.log("demo3");
};
mainDemoObj.demo3();
mainDemoObj.demo4();
mainDemoObj.firstname = "harshal";
mainDemoObj.lastname = "dalvi";
console.log(mainDemoObj.firstname);
console.log(mainDemoObj.lastname);
