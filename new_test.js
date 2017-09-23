var fs = require('fs');

fs.readFile('./callback.js',function(err,data){
if(err)
{
console.log("Error");
}
else
console.log(data);
}
)
