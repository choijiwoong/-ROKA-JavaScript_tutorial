//	[Object]
//1. Common use of Object
let user={
	name: "John",
	age:30,
	isAdmin=false,
	"inOcean": true,
};//object literal
alert(user["inOcean"]);//"John"
alert(user.age);//30
alert(user[age]);//30

//user.inOcean=false;//ERROR OCCUR
user["inOcean"]=false;//We have to approach this way to string as property key

let key="inOcean";
delete user[key];//delete property

const User={name: "John",};//Const object can be modified. const protect changing of User(that saves reference value)
User.name="Pete";
alert(User.name);

//2. Computed Property
let fruit=prompt("Which fruit do you want to buy", "apple");
let bag={
	[fruit]: 5,//set property's key to return value of prompt
	[fruit+"Computers"]: 10,//[] can handle expression.
}
alert(bag.apple);//if prompt returns "apple", well Work

let fruit2=prompt("Which fruit", "apple");
let bag2={};
bag2[fruit2]=5;//Make property by return value of prompt
bag2["asf"]=3;//also possible

//3. Property value Shorthand
function makeUser(name, age){//Like constructor
	return{//return object with initialization by arguments
		name: name,
		//can be replaced to name,
		age: age,
		//age,
	};
}
let user=makeUser("John", 30);//get returned object
alert(user.name);

//4. Object name can contain reserved word
let obj={
	for:1,
	let:2,
	return:3,
};
alert(obj.for);

let obj2={//0 in key converts to "0"
	0: "test",//"0": "test"
};
alert(obj2["0"]);//test
alert(obj2[0]);//test(same property)

let obj3={};//Only __proto__ cannot be used as key(only one exception_(prototype inheritance...))
obj3.__proto__=5;//5 is allocated, but it convert to Object now. we can't apply common operations.
alert(obj3.__proto__);//[object Object]

//5. Check isProperty
let key="age";

let user2={name:"John", age:30,};
alert(user2.noSuchProperty===undefined);//true_check empty property by .noSuchProperty method.
alert("age" in user2);//"" is important!
alert("alpha" in user);
alert(key in user);//true. other variable can be compared with same name.

//6. neccesity of in
let obj4={
	test: undefined;
};
alert(obj4.test);
alert("test" in obj4);

//7. for...in loop for object's keys
let user3={
	name: "John",
	age: 30,
	isAdmin: true,
};
//It alert sorted property if it's properties are Number
for(let key in user3){//Like range based for loop in c++, improved for loop in Java
	alert(key+": "+user3);
}

//8. Integer property: can convert num to str, str to num like "49". not +49, 1.2 that have to use Math.truc(Number("+49"))
