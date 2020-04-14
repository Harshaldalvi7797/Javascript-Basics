// reference path="../"/>
/// <reference path="./userHomeModel.js"/>

let userModelObj = new userModel();
userModelObj.firstname = "Harshal";
userModelObj.lastname = "Dalvi";
userModelObj.dob = "7-7-1997";

let userCommunicationModelObj = new userCommunicationModel();
userCommunicationModelObj.Emailid = "dalvi@gmail.com";
userCommunicationModelObj.mobileno = "8087737437";

//bind
userModelObj.userCommunication = userCommunicationModelObj;

let userCredientialModelObj = new userCredientialModel();
userCredientialModelObj.adharcard = "xxxx";
userCredientialModelObj.passportNo = "xxxx";

//bind
userModelObj.userCrediential = userCredientialModelObj;

let userLoginModelObj = new userLoginModel();
userLoginModelObj.username = "harshal";
userLoginModelObj.password = "1234";

//bind
userModelObj.userLogin = userLoginModelObj;

let userHomeModel1Obj = new userHomeModel();
userHomeModel1Obj.flatno = "602";
userHomeModel1Obj.wingno = "1";
userHomeModel1Obj.pincode = "41055";
// userHomeModel1Obj.flatno = "602";
// userHomeModel1Obj.wingno = "A1";
// userHomeMode1lObj.pincode = "410205";

let userHomeModel2Obj = new userHomeModel();
userHomeModel2Obj.flatno = "602";
userHomeModel2Obj.wingno = "A1";
userHomeModel2Obj.pincode = "410205";

let userHomeModelArrayObj = [userHomeModel1Obj, userHomeModel2Obj];

//bind
userModelObj.userHome = userHomeModelArrayObj;

let userDisplayObj = new userDisplay();
userDisplayObj.display(userModelObj);

//json serialazation process

let userModelJson = JSON.stringify(userModelObj);
console.log(userModelJson);
