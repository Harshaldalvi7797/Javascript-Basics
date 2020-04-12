function users() {
  //constructor
  //property
  this.firstName = undefined;
  this.lastName = undefined;

  //public method
  this.onDisplay = function() {
    console.log(`${this.firstName} ${this.lastName}`);
  };

  //private method
  let privateMethodDemo = function() {
    console.log("private method");
  };
}
//create an unstance of user class
let userObj = new users();
userObj.firstName = "harshal";
userObj.lastName = "Dalvi";
userObj.onDisplay();

userObj = null;

userObj.onDisplay(); // once instance is null the it cannot call it once again

// let userObj1 = new users();
// userObj1.firstName = "harshal";
// userObj1.lastName = "Dalvi";
// userObj1.onDisplay();
