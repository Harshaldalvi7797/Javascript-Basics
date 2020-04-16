function userArrayOperation() {
  let _userArrayObj = [];

  this.addUser = function(userModel) {
    // add usermodel data into array

    _userArrayObj.push(userModel);
    console.log(_userArrayObj);
  };

  this.onDisplay = function() {
    //javascript syntaz for loop
    // for (let userModelObj of _userArrayObj) {
    //   console.log(`${userModelObj.firstname} ${userModelObj.lastname}`);
    // }
    //array ka loop
    // _userArrayObj.forEach(userModelObj => {
    //   console.log(`${userModelObj.firstname} ${userModelObj.lastname}`);
    // });
  };

  //own for loop
  this.ownForLoop = function(funcCallback) {
    for (let userModelObj of _userArrayObj) {
      funcCallback(userModelObj);
    }
  };

  this.searchSingleUser = function(strfirstname) {
    let userModelObj = _userArrayObj.find(lleuserModel => {
      return lleuserModel.firstname === strfirstname ? true : false;
    });
    return userModelObj;
  };

  this.multipleUser = function(strlastname) {
    let userModelObj = _userArrayObj.filter(leuserModelObj => {
      return leuserModelObj.lastname.includes(strlastname) ? true : false;
    });
    return userModelObj;
  };
}
