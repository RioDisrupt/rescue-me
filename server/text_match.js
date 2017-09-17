const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: 'cdc37eb9',
  apiSecret: 'e88992c6217a4519'
});

/*
function text_match() { 

  var victimText = rescuer.name + " is on their way to help! You can can contact them at " + rescuer.phoneNumber;
  var rescuerText = victim.name + " needs your help! Please prepare to pick up " + victim.capacity;

  nexmo.message.sendSms(
    '12016728862', rescuer.phoneNumber, rescuerText,
      (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          console.dir(responseData);
        }
      }
   );

  nexmo.message.sendSms(
    '12016728862', victim.phoneNumber, victimText,
      (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          console.dir(responseData);
        }
      }
   );

}

text_match();
*/