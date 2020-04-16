let arrayObj = ["Hello", 11, true];
for (let value of arrayObj) {
  console.log(value);
}

let userArrayOperationObj = new userArrayOperation();

let userModel1 = new userModel();
userModel1.firstname = "Harshal";
userModel1.lastname = "Dalvi";
userArrayOperationObj.addUser(userModel1);

let userModel2 = new userModel();
userModel2.firstname = "Saylee";
userModel2.lastname = "Mane";
userArrayOperationObj.addUser(userModel2);

let userModel3 = new userModel();
userModel3.firstname = "Minal";
userModel3.lastname = "Dalvi";

userArrayOperationObj.addUser(userModel3);
console.log(userArrayOperationObj);

userArrayOperationObj.onDisplay();

userArrayOperationObj.ownForLoop(leuserModelObj => {
  console.log(`${leuserModelObj.firstname} ${leuserModelObj.lastname}`);
});

let userModelObj = userArrayOperationObj.searchSingleUser("Saylee");
console.log(userModelObj);

let userModelObj1 = userArrayOperationObj.multipleUser("Dalvi");
console.log(userModelObj1);
