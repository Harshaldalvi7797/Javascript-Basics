function androidDevice(strNotificationMessage) {
  console.log(strNotificationMessage);
}
function iosDevice(strNotificationMessage) {
  console.log(strNotificationMessage);
}
function windowsDevice(strNotificationMessage) {
  console.log(strNotificationMessage);
}

function notificationToDevice(strNotificationMessage, funcDevice) {
  funcDevice(strNotificationMessage); //callback
}

notificationToDevice("Hello", function(cbstrNotificatioMessage) {
  console.log(cbstrNotificatioMessage);
});

notificationToDevice("Hello to android", cbstrNotificatioMessage =>
  console.log(cbstrNotificatioMessage)
);

let window1 = function(strNotificationMessage) {
  console.log(strNotificationMessage);
};

notificationToDevice("hello window", window1);
