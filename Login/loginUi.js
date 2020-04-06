///  <reference path="../Login/jquery-3.4.1.min.js"/>

function onCancel() {
  //Clear textbox

  $("#txtusername").val("");
  $("#txtpassword").val("");

  //Focus on textbox textusename
  $("#txtusername").focus();
}
function getLogindata() {
  let username = $("#txtusername").val();
  let password = $("#txtpassword").val();
  let loginArrya = [username, password];
  return loginArrya;
}

function LoginResponseisValid(strmessage) {
  let type = typeof strmessage;
  if (type === "boolean") {
    console.log("Redirect to Dashboatd");
    document.write("Welcome");
  } else if (type === "string") {
    $("#divMessage").html(strmessage);
    $("#divMessage").show();
  }
}

function onSubmit() {
  // get login data from Ui
  let loginArray = getLogindata();

  // its also right way
  // let username = loginArray[0];
  // let password = loginArray[1];
  // let message = loginVerification(username, password);

  // check login credientials
  // it more short code
  let message = loginVerification(loginArray[0], loginArray[1]);

  //check response
  LoginResponseisValid(message);
}
