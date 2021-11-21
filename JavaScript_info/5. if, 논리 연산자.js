//1. common use of if
let year=prompt("When ECMAScript-2015 is made?");

if(year<2015)//p.s_ if("0") return true
	alert("up!");
else if(year>2015)
	alert("down!");
else
	alert("Correct!");

//2. common use of ternary operator(?)
let age=prompt("Type tour age. ", 18);

let message=(age<3)? "baby":(age<30)? "normal":(age<100)?"old":"skeleton";
alert(message);

//[logic operator]
//3. || find first truly value
let firstName="";
let lastName="";
let nickName="Violet";//if it's also "", print unknown
alert(firstName||lastName||nickName||"unknown");//|| returns truty value's origin value.


true||alert("not printed");
false||alert("printed");//use of short circuit evaluation

//4. && find first falsy value
let firstGame="GTA";
let lastGame="VR";
let demoGame="";
alert(firstGame&&lastGame&&demoGame&&"full!");//demoGame print.

//precedence of && is higher than ||
//5. we can change if to ||or&&
let x=1;
if(x>0)
	alert('bigger than 0!');

(x>0)&&alert('bigger than 0!');

//6. we can convert value to Boolean by using double not(!!). it's same to Boolean()
alert(!!"non-empty string");//true
alert(!!null);//false
//precedence of ! is higher in logic operator

//practice
alert(alert(1)||2||alert(3));// [1,2]_alert don't return any value. so it's undefined.
alert(null||2&&3||4);// [3]_2&&3=3...?ㄷㄷ

let id=prompt("Type id.","none");
let password;
if(id=="Admin"){
	password=prompt("Type password.", "none");
	if(password=="TheMaster"){
		alert("Welcome");
	}else if (password=="" || password==null){
		alert("Canceled!");
	}else{
		alert("Verify failed!");
	}
}