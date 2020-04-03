let strName = "harshal"; // global variable
//console.log(intValu1);intValu1 is not defined
const pi = 3.14;
{
  //console.log(intValu1);Cannot access 'intValu1' before initialization
  let intValu1 = 10; // local variable

  console.log(intValu1);
  console.log(strName);
}
//intValu1 is not defined
//console.log(intValu1);

//............using var ....//
console.log(intValue2); //undefined
{
  console.log(pi);
  console.log(intValue2); //undefined
  var intValue2 = 20; //local variable
  console.log(intValue2);
  console.log(strName);
}
console.log(intValue2); // it gives 20 value

{
  let a = 100;
  var b = 200;
}
// console.log(b);
let _value = 1000;
console.log(_value);
