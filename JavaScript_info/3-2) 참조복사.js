//	[copy reference]
//1. Comparing object, it actually converts to primitive.
let a={};
let b=a;
alert(a==b);//true
alert(a===b);//true
b={};
alert(a==b);//false

//2. deep copy_js doesn't apply Arraycopy.
let user={ name: "John", age: 30};
let clone={};//empty object
for(let key in user)
	clone[key]=user[key]

//3. uss Object.assign() to object
let user2={ name: "John", };
let permissions1={canView: true};
let permissions2={canEdit: true};
let permissions3={name: "Tom"};//cover!
Object.assign(user2, permissions1, permissions2, permissions3);

//4. problem_double object
let user3={
	name: "John",
	sizes:{
		height: 182,
		width: 50,
	}
};
let clone2=Object.assign({}, user3);
alert(user3.sizes===clone2.sizes);//true
//user3 & clone2 share sizes. so we have to need deep cloning by using _.cloneDeep(obj) in lodash's method.

//	[Garbage Collector]
let user4={name: "John",};
let admin=user4;
admin=null;//John can be accessed by user4 yet!
user4=null;//GC delete "John" in memory!

//5. example of family
function marry(man, woman){
	woman.husband=man;
	man.wife=woman;
	
	return{
		father: man,
		mother: woman,
	}
}
let family=marry({name: "John"}, {name: "Ann"});
delete family.father;
delete family.mother.husband;//"John" can't be reachable! remove "John"

family=null;//All data is deleted! beacuse it cannot be reachable!

/*6. GC's mechanism
- 루트정보를 수집하여 mark하고, 이를 참조하는 모든 객체, 그 객체가 참조하는 객체까지 전부 mark한다.
mark되지않은 모든 객체를 삭제한다.
- GC의 최적화 기법으로 Generational Collection(세대별 수집_새 객체, 오래된 객체), Incrememtal Collection(점진적 수집_나누어 mark), Idle-time Collection(유후 시간 수집_CPU가 쉬는시간에만 GC가동)등이 있다.
*/