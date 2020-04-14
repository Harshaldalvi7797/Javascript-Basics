function userDisplay() {
  this.display = function(userModel) {
    console.log(userModel.firstname);
    console.log(userModel.lastname);
    console.log(userModel.dob);

    console.log(userModel.userCommunication.Emailid);
    console.log(userModel.userCommunication.mobileno);

    console.log(userModel.userCrediential.adharcard);
    console.log(userModel.userCrediential.passportNo);

    console.log(userModel.userLogin.username);

    console.log(userModel.userLogin.password);

    for (let userHomeObj of userModel.userHome) {
      console.log(userHomeObj.flatno);
      console.log(userHomeObj.wingno);
      console.log(userHomeObj.pincode);
    }
  };
}

// userDisplay();
