/// <reference path="../Model/userModel.js"/>

/// <reference path="../Lib/jquery-3.4.1.min.js"/>

function userDisplay() {
  //private method
  let getUserDataFromLocalStorage = async function() {
    try {
      return await new Promise(resolve => {
        let userModelJson = localStorage.getItem("userModelJson");
        //localStorage.removeItem("userModelJson");
        // localStorage.clear();
        return resolve(userModelJson);
      });
    } catch (ex) {
      throw ex;
    }
  };

  let convertJasonToUserModelAsync = async function(userModelJson) {
    try {
      return await new Promise(resolve => {
        let userModelObj = JSON.parse(userModelJson);
        return resolve(userModelObj);
      });
    } catch (ex) {
      throw ex;
    }
  };

  let userModelDisplayAsync = async function(userModelObj) {
    try {
      return await new Promise(resolve => {
        $("#lblfirstname").html(userModelObj.firstname);
        $("#lbllastname").html(userModelObj.lastname);

        return resolve(true);
      });
    } catch (ex) {
      throw ex;
    }
  };

  //public method
  this.onDisplayPageAsync = async function() {
    try {
      return await new Promise(async resolve => {
        //get user data from storage
        let userModelJson = await getUserDataFromLocalStorage();

        //convert json to user model

        let userModelObj = await convertJasonToUserModelAsync(userModelJson);

        //display user model

        let flag = await userModelDisplayAsync(userModelObj);

        return resolve(flag);
      });
    } catch (ex) {
      throw ex;
    }
  };
}

function displayUserModelClick() {
  let userDisplayControllerObj = new userDisplay();
  userDisplayControllerObj.onDisplayPageAsync().then(resolve => {
    if (resolve === true) {
      console.log("user data bind");
    }
  });
}

displayUserModelClick();
