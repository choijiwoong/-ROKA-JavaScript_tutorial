//1. 객체는 논리평가 시 true를 반환한다. 숫자형이나 문자열으로만 형 변환이 일어난다. 문자형 변환은 객체 출력 시 일어난다.
//2. ToPrimitive_객체를 다른 타입으로 변환하기(여기서 목표로 하는 자료형을 hint라고 부른다)
alert(obj);//문자열을 기대하는 연산 시 hint는 string
anotherObj[obj]=123;//hint는 string
let num=Number(obj);//수학연산을 기대할땐 hint가 number
let n=+obj;//hint_number
let delta=date1-date2;//hint_number
let greater=user1>user2;//hint_number
let total=obj1+ob2;//애매할 땐 hint가 default_concat인지 +인지
if(user==1){...};//객체를 숫자?문자형?뭐로 바꿀까 hint_default
//사실 Date객체를 제외하고 hint가 default일 때와 number일 때를 동일하게 처리함.(p.s 모든 객체는 true이기에 hint_boolean은 없다)

//3. Symbol.toPrimitive(시스템 심볼)
obj[Symbol.toPrimitive]=function(hint){//hint is one of string, number, default
	
	return primitive_value;
}

let user={
	name: "John",
	money:1000,
	
	[Symbol.toPrimitive](hint){//만약 이 객체가 toPrimitive화된다면. 즉 이 하나로 모든 종류의 형 변환을 다룬다.
		alert('hint: ${hint}');
		return hint=="string"?'{name: "${this.name}"}' :this.money;//그 hint가 string이면 name만 반환, 아니면 숫자만 반환
	}
};//hook song_기리보이, We-펀치넬로(핏.미노이)
alert(user);//{name: "John"}	hint_string. 
alert(+user);//1000	hint_number
alert(user+500);//1500	hint_default

//4. toString, valueOf_객체에 Symbol.toPrimitive가 없다면 js는 규칙에 따라 이 둘을 실행한다.(toPrimitive가 정의되어 있지 않다면)
//hint_string: toString->valueOf, hint_else: valueOf->toString(toString은 문자열 [object Object]반환, valueOf는 객체자신 반환)
let user={name:"John"};
alert(user);//[object Object]
alert(user.valueOf()===user);//true_return itself.(그냥 이 명령어를 무시하는 느낌. toString이 안된다면. 객체자신을 반환하기에)

//example
let user={
	name: "John",
	money: 1000,
	//hint_string
	toString(){
		return '{name: "${this.name}"}';
	},
	//hint_number or default(hint is not string)
	valueOf(){
		return this.money;
	}
};
alert(user);//{name: "John"}_toString
alert(+user);//1000_valueOf
alert(user+500);//1500_valueOf
//Same result to Symbol.toPrimitive!

//if 모든 형 변환을 한 곳에서 다 처리해야한다면 Symbol.toPrimitive와 valueOf가 없으면 toString이 모든 변환을 처리하기에 toString만 정의한다.
let user={
	name: "John",
	
	toString(){
		return this.name;
	}
};
alert(user);//John
alert(user+500);//John500

//5. Return Type_toString이 문자열이 아닌다른 값을 반환해도 에러가 발생하지 않고, Symbol.toPrimitive의 hint가 number일때 숫자형 자료가 아닌 다른 값을 반환할 수 있다.
//다만 객체가 아닌 원시값을 반환해 준다는 것이다.(toString이 number을, Symbol.toPrimitive의 hint가 Number일때 string을 반환할 수도 있다는 가능성을 의미)
// 또한 과거의 잔재로 toString이나 valueOf가 객체를 반환할 수도 있는데, 이 때는 에러로 알아서 처리하여 아무것도 실행시키지 않는다.
//다만 Symbol.toPrimitive는 무조건 primitive를 반환하게 해야지 그렇지 않으면 오류를 발생시킨다.

//6. 추가 형 변환_2번의 형변환
let obj={
	toString(){ return "2"; }//String("2")반환
};
alert(obj*2);//4_Number("2")반환 후 연산
slert(obj+2);//22_문자열로 처리가 가능하기에 추가 형변환 없이 그대로 String("2")로 처리

//7. 요약하면 object->primitive casting시 obj[Symbol.toPrimitive](hint)부터 찾고 없는데 hint가 Stirng이면 obj.toString()부터, hint가 number면 obj.valueOf부터 호출한다.
//다만 obj.toString()으로 모든 변환을 다 다룰 수 있기에 나머지 다 안쓰고 저거로만 처리해도 된다.