//	[Arrow Function]
//1. skeleton structure of arrow function
let func=(arg1, arg2, ..., argN)=>expression//same
let func=function(arg1, arg2, ..., argN){//same
	return expression;
}

let sum=(a, b)=>a+b;//maybe looks like lamda
//let sum=function(a, b){
//	return a+b;
//}
alert(sum(1,2));//3

//2. practice
fuction ask(question, yes, no){
	if(confirm(question)
		yes();
	else
		no();
}
ask("Are You Agree?", ()=>alert("Agree!"), ()=>alert("DisAgree!"));

//	[Summary of common grammer]
alert("hello")//Automatic Semicolon Insertion
[1,2].forEaxh(alert);//cannot supply Automatic Semicolon Insertion

'use strict';//Activate strict mode

typeof null=="objrct";//defect of language
typeof function(){}=="function"

prompt(question, [default]);//return input value (Ok), return null (No)
confirm(question);//true(Ok), false(No)
alert(message);

//operator ??, ==&===