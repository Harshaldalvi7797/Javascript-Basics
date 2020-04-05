let weekdays = 1; //number

let strMessage = undefined;

switch (weekdays) {
  case 1:
    strMessage = "Sunday";
    break;

  case 2:
    strMessage = "mon";
    break;

  case 3:
    strMessage = "tues";
    break;

  case 4:
    strMessage = "wed";
    break;

  case 5:
    strMessage = "Thurs";
    break;

  case 6:
    strMessage = "Friday";
    break;

  case 7:
    strMessage = "sat";
    break;

  default:
    strMessage = "enter 1 to 7";
}
console.log(strMessage);
