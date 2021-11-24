//	[Null Coalesing Operator_??]
//1. nullish coalescing operator ??
x=(a!==null && a!==undefined)? a:b;//a??b's mechanism 갑자기 호떡먹고싶다 그 전자레인지 돌려먹는거

let firstName=null;
let lastName=null;
let nickName="violet";
alert(firstName??lastname??nickName?"unknown");

//2. difference of ?? and ||
let height=0;
alert(height||100);//100_|| return trusy
alert(height??100);//0_?? return defined value

//3. precedence of ?? is low.
let height=null;
let width=null;
let area=(height??100)*(width??50);
alert(area);//5000

//4. safety issue_ ?? can't use with || or &&
//let x=1&&2??3;//SyntaxError. if we want to use it both, add () like 
let x=(1&&2)??3;
alert(x);//2

//	[loop]
//5. common use of loop
for(let i=0; i<3; i++)
	alert(i);

//6. The reason why we don't have to use ? instead of ?
(i>5)?alert(i):continue;//Syntax Error!

//7. Label
outer: for(let i=0; i<3; i++){
	for(let j=0; j<3; j++){
		let input=prompt('value of (${i}, ${j}', '');
		//we want to stop this! but we can't do it by break because we have to escape double for loop
		//use Label!
		if(!input)
			break outer;//not jmp outer! break outer's loop!
	}
}
alert("Done!");

//8. practice
let range=prompt("input prime range", "0");
outer: for(let i=2; i<=range; i++){
	for(let j=2; j<i; j++){
		if(i%j==0)
			continue outer;
	}
	alert(i);
}