//all are properties are public
//implicite object
let userObj = {
  firstname: undefined,
  lastname: undefined,

  onDisplay: function() {
    console.log(this.firstname);
    console.log(`${this.firstname} ${this.lastname}`);
  }
};

// onDisplay();
userObj.firstname = "harshal";
userObj.lastname = "Dalvi";
userObj.onDisplay();

//Object use only return multiple data at time

function onObjectDemo() {
  let firstname = "Saylee";
  let lastname = "Mane";

  let userObj1 = {
    firstname: firstname,
    lastname: lastname
  };
  return userObj1;
}
let userObj1 = onObjectDemo();
console.log(userObj1.firstname);
console.log(userObj1.lastname);

let _firstname = undefined;
let userObj2 = {
  get firstname() {
    return _firstname;
  },
  set firstname(value) {
    _firstname = value;
  }
};

userObj2.firstname = "Minal"; //set value
console.log(userObj2.firstname); //get value
