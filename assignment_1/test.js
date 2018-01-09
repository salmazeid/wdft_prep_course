// Exercise 1
var name;
name="Salma";
console.log('Hello'+ ' '+name)
//Exercise 2
var x=1125;
var answer=x%2;
console.log(answer)
//Exercise 3
var a = true;
var b = false;
var c = true;
console.log(a||b||c)
//Exercise 4
var a = true;
var b = false;
var c = true;
console.log(a&&b&&c)
//Exercise 5
var answer1=10-3*5/4+202%3;
var answer2=10-(3*(5/4)+(202%3));
console.log(answer1+' '+answer2)
//Exercise 6
var d=String(12);
var e=parseInt(113);
var f=parseFloat(1.12356)
var x=parseInt('Hello World')
console.log(x)
//Diving Deeper
var string1="I am a BrainStation student";
var string2="I am a student";
var string3=/BrainStation/;
var myfinding1 = string1.search(string3);
var myfinding2 = string2.search(string3);
console.log(myfinding1+'\n' + myfinding2)
var r='Junior Developer';
var newstr = string1.replace(string3,r);
console.log(newstr)

