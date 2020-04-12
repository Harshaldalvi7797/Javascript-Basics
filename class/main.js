function users() {
  //constructor
  //property
  this.firstName = undefined;
  this.lastName = undefined;

  //private property
  let firstName = undefined;
  firstName = "hhh";
  let lastName = undefined;

  //public method
  this.onDisplay = function() {
    console.log(`${this.firstName} ${this.lastName}`);
  };

  //private method
  let privateMethodDemo = function() {
    console.log("private method");
  };

  this.displayName = function(strName) {
    firstName = strName;
    console.log(firstName);
    privateMethodDemo(); // private method demo
  };
}

//create an unstance of user class
let userObj = new users();
userObj.firstName = "harshal"; // setter property
userObj.lastName = "Dalvi"; // setter property
userObj.onDisplay();

userObj.displayName("Saylee");

userObj = null;

// once instance is null the it cannot call it once again
// userObj.onDisplay();

// let userObj1 = new users();
// userObj1.firstName = "harshal";
// userObj1.lastName = "Dalvi";
// userObj1.onDisplay();
