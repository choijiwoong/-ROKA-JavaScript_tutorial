//1. Constructor Function
function User(name){//Constructor
	//this={};//make empty object
	this.name=name;
	this.isAdmin=false;
	//return this;
}
let user=new User("Purple");//MEchanism of new: Make empty object to this->execute body of function_add new property to this->return this
alert(user.name);
alert(user.isAdmin);

//2. Make complex object without recycling
let user=new function(){//prevent recycling by using anonymous constructor with capsulizing
	this.name="John";
	this.isAdmin=false;
}

//3. new.target; Whether new is used? Check constructor mode, regular mode
function User(){ alert(new. target); }
User();//undefined
new User();//function User(){...}

//4. make new by new.target
function User(name){
	if(!new.target){//new.target==undefined
		return new User(name); 
	}
	this.name=name;
}
let Purple=User("Purple");//change to new User
alert(Purple.name);//Purple

//5. Constructor with return_객체리턴시 this대신 객체반환, primitive반환시 무시하고 this반환
function BigUser(){//p.s 인수가 없는 생성자 함수는 생성시 괄호생략이 가능하다.
	this.name="Monkey";
	return {name:"Key"};
}
alert(new BigUser().name);

//6. Constructor with method
function User(name){
	this.name=name;
	this.sayHi=function(){ alert("My Name is"+this.name); }
}
let bora=new User("gemi");//make object by constructor with variable, method
bora.sayHi();