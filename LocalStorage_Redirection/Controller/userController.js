// "use strict";

/// <reference path="../Model/userModel.js"/>

/// <reference path="../Lib/jquery-3.4.1.min.js"/>

function userController() {
  //private method

  let getUserDataAsync = async function() {
    try {
      return await new Promise(resolve => {
        //operation

        let userModelObj = new userModel();
        userModelObj.firstname = $("#txtfirstname").val();
        userModelObj.lastname = $("#txtlastname").val();

        return resolve(userModelObj);
      });
    } catch (ex) {
      throw ex;
    }
  };

  let userModelToJsonAsync = async function(userModel) {
    try {
      return await new Promise(resolve => {
        let userModelJson = JSON.stringify(userModel);

        return resolve(userModelJson);
      });
    } catch (ex) {}
  };

  let setuserModelLocalStorageAsync = async function(userModelJson) {
    try {
      return await new Promise(resolve => {
        localStorage.setItem("userModelJson", userModelJson);
        return resolve(true);
      });
    } catch (ex) {
      throw ex;
    }
  };

  let userRedirectToAsync = async function() {
    try {
      return await new Promise(resolve => {
        //operation
        window.location.pathname = "../View/userDisplay.html";
        return resolve(true);
      });
    } catch (ex) {
      throw ex;
    }
  };

  //public method

  this.onCancel = function() {
    $("#txtfirstname").val("");
    $("#txtlastname").val("");

    $("#txtfirstname").focus();
  };

  this.onSubmit = async function() {
    try {
      return await new Promise(async resolve => {
        //operation
        //get usermodel data
        let userModelObj = await getUserDataAsync();
        //convert user model data into json
        let userModelJson = await userModelToJsonAsync(userModelObj);

        //store user model into json local storge
        let flag = await setuserModelLocalStorageAsync(userModelJson);
        //redirect to user display async

        flag = await userRedirectToAsync();
        return resolve(userModelJson);

        return resolve(userModelObj);
      });
    } catch (ex) {
      console.log(ex.message);
    }
  };
}

function onCancelClickEvent() {
  let userControllerObj = new userController();
  userControllerObj.onCancel();
}

function onSubmitClickEvent() {
  let userControllerObj = new userController();
  userControllerObj.onSubmit().then(resolve => {
    if (resolve === true) {
      console.log("redirection successfully");
    } else {
    }
  });
}
