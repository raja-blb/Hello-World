var notes1 = function(){
  console.log("i am inside notes function in notes.js");
};

// console.log(" I am inside notes.js");
notes1.prototype.addNote = function(){
  console.log("Hey i am inside addNote function");
  return 'ADDNOTE';
};


notes1.prototype.addition=function(a,b){
  // var c=a+b;
  return a+b;
};

module.exports=notes1();

console.log(module);
