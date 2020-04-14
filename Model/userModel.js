function userModel() {
  this.firstname = undefined; //string
  this.lastname = undefined; //string
  this.dob = undefined; //string

  this.userCommunication = null; //object //1-1 relationship

  this.userCrediential = null; //object //1-1 relationship
  this.userLogin = null; //object //1-1 relationship

  this.userHome = null; //object //1-M relationship
}
