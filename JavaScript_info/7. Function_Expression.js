//	[switch]
//1. common use of switch
let a="1";
let b=0;

switch(+a){
	case b+1://In C, SyntaxError. b has to be const
		alert("+a: 1, b+1=1");
		break;
	default"
		alert("no execute");
}

//	[function]
//2. common use of function
let userName='John';//global variable

function showMessage(from, text=anotherFunction()){//we can use like it
	userName='Bob';//outer variable can be modified in local area.
	
	let message="hello, "+useName;
	alert(message);
}
alert(userName);
showMessage("Ann");//from=Ann, text=Undefined
alert(userName);

//3. return; or no return function return undefined

//4. practice
function checkAge(age){ return (age>18)?true:confirm("cannot");}

//	[function Expression]
//5. common use of function expression
let sayHi=function(){ alert("Hello"); }
alert(sayHi)//print function code. we have to use sayHi() for execution

let func=sayHi;//Copy Function

func();
sayHi();

//6. CallBack function by yes or no
function ask(question, yes, no){//yes, no are called to Callback Function
	if(confirm(question))
		yes();
	else
		no();
}
function showOk(){ alert("Agree"); }
function showCancel(){ alert("DisAgree"); }
ask("Are you agree?". showOk, showCancel);
//We can convert this shortly
ask("Are you agree?", function(){alert("Agree");}, function(){alert("DisAgree");});

//7. First difference of function, function expression: execution time
//Function
sayHi("John");//Well Work!
function sayHi(name){
	alert('Hello, ${name}');
}

//Function Expression
sayHi("John");//Impossible!
let sayHi=function(name){//sayHi function will be made at this time.
	alert('Hello, ${name}');
}

//8. Second difference of function, function expression: Scope
//Function
let age=prompt("Type your age", 18);
if(age<18){
	function welcome(){
		alert("hi");
	}
	welcome();//Well Work!
}else{
	function welcome(){
		alert("hello");
	}
}
welcome();//ERROR!

//Function Expression
let age=prompt("Enter Age!", 20);
let welcome;//variable for get function expression
if(age<20){
	welcome=fuction(){
		alert("sky!");
	}
}else{
	welcome=function(){
		alert("Look at Sky!");
	}
	welcome();//Well Work!
}
welcome();//Well Work!
//P.s simple version by ?
let age=prompt("age",0);
let welcome=(age<0)?function(){alert("zero");} : function(){alert("inf");}