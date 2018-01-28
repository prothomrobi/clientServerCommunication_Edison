var request = require("request");

var idCount = 0;
var sensorJsonData = {
  "id": 0,
  "name": "",
  "value": 0,
};


function datSendFromSensor(){
  sensorJsonData.id = idCount++;
  sensorJsonData.name = "Temp";
  sensorJsonData.value = 25.0;
  request({
      method: "POST",
      url: "http://127.0.0.1:5000/postdata",
      headers: {
          "content-type" : "application/json",
      },
      json:true,
      body: sensorJsonData
  },function(err, res, body){});
  console.log(sensorJsonData.id);
  console.log(sensorJsonData.name);
  console.log(sensorJsonData.value);
}

setInterval(function(){
    datSendFromSensor();
},5000);



