///  <reference path="../Lib/jquery-3.4.1.min.js"/>
/// <reference path="../Model/loginModel.js"/>

function loginController(loginModel) {
  //private property
  let loginModelObj = loginModel;

  //private methods

  let getLoginInfo = function() {
    loginModelObj.username = $("#txtusername").val();
    loginModelObj.password = $("#txtpassword").val();
    return loginModelObj;
  };

  let loginAUth = function() {
    let tmpusername = "harshal";
    let tmppassword = "123";
    let Response = undefined;

    if (
      loginModelObj.username === tmpusername &&
      loginModelObj.password === tmppassword
    ) {
      Response = true;
    } else {
      Response = "Username and password does not match";
    }
    return Response;
  };

  let RedicrectToDashboard = function() {
    console.log("successfully");
    window.location.pathname = "../View/dash.html";
  };

  let loginFailed = function(strMessage) {
    console.log("sorry");
    console.log(strMessage);
    $("#divMessage").show();
    $("#divMessage").html(strMessage);
  };

  let loginOutput = function(Response) {
    let type = typeof Response;
    console.log(type);
    if (type === "boolean") {
      console.log("hiii");
      RedicrectToDashboard();
    } else {
      loginFailed(Response);
    }
  };

  //public methods (actions)
  this.onCancel = function() {
    $("#txtusername").val("");
    $("#txtpassword").val("");

    $("#txtusername").focus();
  };

  this.onSubmit = function() {
    let response = undefined;
    getLoginInfo();
    // loginModelObj.getLoginInfo;
    response = loginAUth();

    loginOutput(response);
  };
}

let loginModelObj = new loginModel();

let loginControllerObj = new loginController(loginModelObj);

function onCancelClickEvent() {
  loginControllerObj.onCancel();
}

function onSubmitClickEvent() {
  loginControllerObj.onSubmit();
}
