

var getUser=(id,callback)=>{
  var user={
    id:id,
    name:'raja'
  };
  setTimeout(()=>{
    callback(user);
  },3000);
}


getUser(31,(userObject)=>{
  console.log(userObject);
})

var request = require('request');
request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=c%20508%20chawla%20colony%20ballabgarh%20faridabad%20haryana%20121004',
  json:true
},
  function (error, response, body) {
  console.log(`Address: ${body.results[0].geometry.location.lat}`);
});
