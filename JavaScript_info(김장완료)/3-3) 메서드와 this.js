//	[Method]
//1. Make Object's Method
let user={
	name: "John",
	age:30,
};
user.sayHi=function(){ alert("Hi"); };//directly
user.sayHi();

function sayHello(){
	alert("Hello");
};
user.sayHello=sayHello;
user.sayHello();

//2. Simple Grammer for making method
user={
	sayHi: function(){
		alert("Hi");
	}
};
//or
user={
	sayHi(){
		alert("Hi");
	}
};

//3. this_js's this value is defined in runtime. (not common 'bound this')_it has pros and cons like flexible, mistakable
let user={
	name: "John",
	age: 30,
	sayHi(){
		alert(this.name);
	}
};
user.sayHi();

//4. dangerous reference by outer variable(USE THIS FIRST!)
let user={
	name: "John",
	age: 30.
	sayHi(){
		alert(user.name);
	}
};
let admin=user;
user=null;
admin.sayHi();//ERROR OCCUR cannot find user.name in sayHI() method.

//5. this_In js, we can use this everywhere.
let user={name:"John"};
let admin={name:"Admin"};
function sayHi(){ alert(this.name); }

user.f=sayHi;//set method(sayHi)
admin.f=sayHi;

user.f();//John
admin.f();//Admin
admin['f']();//Admin

//6. Call function with this without Object
function sayHi(){ alert(this); }
sayHi();//undefined. (But if not strict mode, this refer global object(window).)

//7. this in arrow function
let user={
	firstName:"purple",
	sayHi(){
		let arrow=()=>alert(this.firstname);//arrow doesn't have unique this value. so it get this to outer function
		arrow();
	}
};
user.sayHi();//purple. 

//8. practice
function makeUser(){
	return{
		name: "John",
		ref:this//undefined because this called in function.
		//ref(){ return this; }//solution
	};
};
let user=makeUser();//set this. this value will be set in time that's called.
alert(user.ref.name);//error
//alert(user.ref().name);//John_colution

//9. practice -2
let ladder={
	step:0,
	
	up(){
		this.step++;
		return this;//for chainning
	},
	down(){
		this.step--;
		return this;
	},
	showStep(){
		alert(this.step);
		return this;
	}
}
ladder.up().up().down().up().down().showStep();//Chainning thanks to return this.