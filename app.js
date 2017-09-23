console.log("main app.js is executed");

var notes2 = require('./notes.js');
var _ = require('../../node_modules/lodash');
var yargs = require('../../node_modules/yargs');

var argv = yargs.argv;
console.log(argv);
var command=argv.$0;
console.log(command);

var name='raja';
console.log('hello',name);
console.log('hello'+name);
// console.log(_.isString('raja'));
// console.log(process.argv);
//notes2. notes1();
// var res1=notes2.notes1.addNote();
//
// console.log(`you are ${res1}.`);
//
// var res2=notes2.notes.addition(12,13);
//
// console.log(`addition of two numbers are ${res2}.`);
