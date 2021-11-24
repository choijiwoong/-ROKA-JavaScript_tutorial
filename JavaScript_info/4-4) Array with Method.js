//	[Array]
//1. Simple example of Array
let arr=['apple', {name: 'purple'}, true, function(){alert("HELLO");}];
alert(arr[1].name);//purple
arr[3]();//HELLO

//2. Array can be used as stack(LIFO) or queue(FIFO) by using push&pop(fast), shift&unshift(slow beacuse of copy). 
//this struct that support function of stack&queue is called "deque"(double ended queue)
let fruits=["Apple", "Orange", "Pear"];//솔직히 pop, push다 알잖아. shift랑 unshift만 다룰게. 인자 여러개로 한꺼번에 넣을수도 있음(with 시간이 들겠지-로꼬. 억지로 감은 눈을 떴을 때 내일 모레였음 좋겠는데..)
alert(fruits.shift());//remove "Apple" & print
fruits.unshift('Apple');//add to front
alert(fruits);//["Apple", "Orange", "Pear"]//(Mechanism of Array is same to object(so we can use property like length). just key of object is index.)

let cars=[];//3. The mechanism of Array is object, but we don't use it like object for optimization.(No compile error because it's perfectly object) 
cars[9999999]="mornning";//(make property)
cars.age=10;//(make property)

//3. for..of to Array on array-like object(that doesn't use index but act like array)
let names=["Kerson", "Gheesu", "Choimin"];
for(let name in names)
	alert(name);//we can't access it's index! just for value. this way is well used to array-like object.

//Array is also object. so we can use for..of too. But it's not Good to array-like because it works on all of propertys of object with other methods..
for(let key in names)//And for...in is optimized to Object not Array. so we have to use for..of to Array without for..in
	alert(names[key]);
//(p.s) we can make array be empty by using 'arr.length=0'

//4. toString method on Array_No Symbol.toPrimitive or valueOf method on Array.
alert( []+1 );//"1"
alert( [1]+1 );//"11"
alert( [1,2]+1 );//"1,21"

//	[Array & Method]
//1. splice for remove element perfectly.(delete can't space of origin property. just delete value)
let sample1=["I", "study", "JavaScript", "now", "."];
sample1.splice(1,1);//At index 1, remove 1 elements
alert(sample1);//["I", "JavaScript", "now", "."]
sample1.splice(1,3, "yesterday", "!");//replace spliced space with these element. We can also add element by setting deletecount(3) to Zero.
alert(sample1);//["I", "yesterday", "!"]

//2. slice returns subarray not substring
let sample2=['t', 'e', 's', 't','.','j','s'];
alert(sample2.slice(1,3);//es

//3. concat array1+array2
let sample3=[1,2];
let sample3_1={
	0: "something",
	length: 1,
};
alert(sample3.concat(sample3_1));//1, 2, [object Object]

let sample4=[1,2];
let sample4_1={
	0: "something",
	1: "else",
	[Symbol.isConcatSpreadable]: true,//Make array-like obejct to Array.
	length: 2,//set length to 2 for saving 'something', 'else'
};
alert(sample4.concat(sample4_1));//1, 2, something, else, 

//4. forEach_Execute function to each element of Array
["PKSE", "JHS", "CJW"].forEach((item, index, array)=>{
	alert(`${item} is at index ${index} in ${array}`);
});

//5. indexOf, lastIndexOf, includes
let sample5=[1,0,false];
alert(sample5.indexOf(0));//1
alert(sample5.indexOf(false));//2
alert(sample5.indexOf(null));//-1
alert(sample5.includes(1));//true
alert(sample5.includes(NaN));//false

//6. find(return item), findIndex(return item's index), filter__find multi element version
let users=[
	{id: 1, name: "John"},
	{id: 2, name: "Pete"},
	{id: 3, name: "Mary"},
];
let user=users.find(item=>item.id==1);//find item that's id is 1. find only one element
alert(user.name);

let someUsers=users.filter(item=>item.id<3);//filter
alert(someUsers.length);//2

//7. method that convert Array
let lengths=["Bilbo", "Gandalf", "Nazgul"].map(item=>item.length);//map return result of function
alert(lengths);//5, 7, 6

let sample6=[1, 2, 15];
sample6.sort();//quickdort
alert(sample6);//1, 15, 2 because it sort array as string. So if we want to sort by way we want, we have to pass compare function as argument additionally

sample6.sort((a,b)=>a-b);//casting Number by operator
alert(sample6);//1, 2, 15 GOOD!

sample6.reverse();//make reverse
alert(sample6);//15, 2, 1

//split, join
let names='Choikong, Calling, 명동';

let stor=names.split(', ');//2nd argument is limit of string length
for(let name of stor)
	alert(`message to ${name}`);
alert(stor[0].split(''));//C, h, o, i, k, o, n, g

let stor2=stor.join(', ');
alert(stor2);//'Choikong, Calling, 명동'

//reduce(function(accumulator, item, index, array){}, [initial]), reduceRight_(Like forEach, for, for..of But some complex)
let sample7=[1,2,3,4,5];
let result=sample7.reduce((sum, current)=>sum+current, 0);//sum's initial value to 0, current is 1~5. (initial value can be skipped then automatically set initial value to first current)
alert(result);//15

//8. Array.isArray_typeof can't distinguish common object, commont array(typeof{}: object, typeof[]: object)
alert(Array.isArray({}));//false
alert(Array.isArray([]));//true

//9. thisArg with Array method_대부분의 배열메소드(find, filter, map, without sort)은 thisArg를 옵션으로 받는다.
arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func,thisArg);

let army={
	minAge: 18,
	maxAge: 27,
	canJoin(user){//canJoin find user that returns true
		return user.age>=this.minAge && user.age<this.maxAge;
	}
};
let users=[
	{age: 16},
	{age: 20},
	{age: 23},
	{age:30},
];

let soldiers=users.filter(army.canJoin, army);//compiler는 army없이는 army.canJoin을 단독 함수로 취급하여 this를 undefined로 만드는데, this객체로 army를 보내줌으로써 이를 해결함
alert(soldiers.length);//2
alert(soldiers[0].age);//20
alert(soldiers[1].age);//23