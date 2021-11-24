//1. Symbol(js에는 property's key로 문자형과 symbol형만 가능하다.
let id1=Symbol("id");//make unique identifier
let id2=Symbol("id");
alert(id1==id2);//false
alert(id1);//ERROR! Symbol cannot convert to String type.
alert(id2.toString());//Symbol(id)_printed
alert(id2.descruption);//id_printed only id

//2. hidden property_user는 서드파티 코드에서 가져온 객체로 새 property를 추가할 수 없느데, symbol은 서드파이에서 접근이 불가하기 때문에 서드파티코드 모르게 식별자를 부여할 수 있다.
let user={name: "John"};//in 서드파티코드
let id=Symbol("id");
user[id]=1;
user[id]=1;
alert(user[id]);//1
//제 3스크립트에서 현재 코드의 구성, 현재 코드의 서드파티 들의 코드를 모른체 일단 user을 식별해야한다면 Symbol("id")를 이용해 전용식별자로 사용할 수 있다.
let id_3=Symbol("id");
user[id_3]="제 3 스크립트 id 값";

//3. Symbol을 사용하지 않으면 발생하는 충돌과정
let user={name: "John"};
user.id="스트립트 id 값";
//제 3 스크립트가 어쩌다보니 동일하게 식별자를 만든다면
user.id="제3 스트립트 id값";

//4. 객체 리터럴에서 심볼형을 사용한다면
let id=Symbol("id");
let user={
	name: "John",
	[id]: 123//no "id": 123
};

//5. Stmbol은 for...in에서 배제된다.
let id=Symbol("id");
let user={
	name: "John",
	age: 30,
	[id]: 123//hide by rule of hiding symbolic property
};
for(let key in user)
	alert(key);
alert("direct access to Symbol key: "+user[id]);
//Object.assign은 심볼을 포함하여 모든 property를 복사한다.
let clone=Object.assign({}, user);
alert(clone[id]);//123

//6. Global Symbol in global symbol registry by using Symbol.for(key)
let id=Symbol.for("id");//"rw" to registry for global symbol
let idAgain=Symbol.for("id");//Read Symbol
alert(id===idAgain);//true

//7.Symbol.keyFor(sym) for get name not symbol
let sym=Symbol.for("name");
let sym2=Symbol.for("id");//Make global symbols
alert(Symbol.keyFor(sym));//name
alert(Symbol.keyFor(sym2));//id_if not exist, return undefined
//use description for get namge of common symbol
let globalSymbol=Symbol.for("name");
let localSymbol=Symbol("name");
alert(Symbol.keyFor(globalSymbol));//name
alert(Symbol.keyFor(localSymbol));//undefined!!_.keyFor only on global symbol!
alert(localSymbol.description);//name_common symbol has to use .description

//8. System Symbol_js내부에서 사용되는 심볼로 객체의 미세 조정을 위해 사용된다 Symbol  .hasInstance .isConcatSpreadable .iterator .toPrimitive등이 있다.
//9. 심볼을 완전히 숨길 순 없는게, Object.getOwnPropertySymbols(obj)로 모든 심볼이 나타나고, Reflect.ownKeys(obj)는 심볼형 키를 포함한 모든 키를 반환해준다.