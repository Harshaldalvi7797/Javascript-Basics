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

//dependency enjection-never call one class instance in another class always call in outside class and get through parameter
//it is also use in memory management because instance created in only on. time
function ashwiniOperation() {
  //public method
  this.methodDemo1 = function() {
    console.log("method1");
  };

  this.methodDemo2 = function() {
    console.log("method2");
  };

  this.methodDemo3 = function() {
    console.log("method3");
  };
}
//instead of here created n 3 times
function harshalOperation() {
  this.method1 = function() {
    //Bad practise to define another class ka instance
    let ashwini1Obj = new ashwiniOperation();
    ashwini1Obj.methodDemo1();
  };

  this.method2 = function() {
    let ashwini2Obj = new ashwiniOperation();
    ashwini2Obj.methodDemo1();
  };

  this.method3 = function() {
    let ashwini3Obj = new ashwiniOperation();
    ashwini3Obj.methodDemo1();
  };
}

function harshalOperation1(ashwiniOperationInstance) {
  let ashwiniOperationInstanceObj = ashwiniOperationInstance;

  this.methodDemo1 = function() {
    ashwiniOperationInstanceObj.methodDemo1();
  };

  this.method2 = function() {
    ashwiniOperationInstanceObj.methodDemo2();
  };
}

let ashwiniOperationObj = new ashwiniOperation();

let harshalOperationObj = new harshalOperation1(ashwiniOperationObj);
harshalOperationObj.methodDemo1();
harshalOperationObj.method2();
