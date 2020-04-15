let numValue1 = 10;
console.log(numValue1); //10
let numValue2 = numValue1; //copy value
console.log(numValue2); //10

numValue2 = 20;
console.log(numValue2); //20

console.log(numValue1); //10

function userModel() {
  this.firstname = undefined;
}
let userModelObj = new userModel();
userModelObj.firstname = "Harshal Dalvi";
console.log(userModelObj.firstname); // Harshal dalvi

let userModel2 = userModelObj;
console.log(userModel2.firstname); //Harshal dalvi

userModel2.firstname = "Saylee mane";
console.log(userModel2.firstname); //"Saylee mane

console.log(userModelObj.firstname); //Saylee mane change in reference type

let userModel3 = new userModel();
userModel3.firstname = "Minal Dalvi";
console.log(userModel3.firstname);

console.log(userModelObj.firstname);
userModel3 = userModelObj;
console.log(userModel3);

userModel3.firstname = "Madhuri";
console.log(userModel3.firstname);

console.log(userModelObj.firstname);
