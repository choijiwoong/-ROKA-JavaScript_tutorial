//	[Debug by Chrome]

//Sources Pannel is consisted by fileSearchSection, codeEditorSection, jsDebuggingSection.

// We can make breakpoint by click code line that we want to stop execution of line
//and we can check value of variable in breakpoint time.
// Condition breakpoint can make by click right mouse button, it will be stopped whan it's true
//We can also make breakpoint in code by type 'debugger;'

//Debugging Section: Watch_show value of variable in breakpoint time, Call Stack_show execution path reversely
//					 Scope_print all defined variable(Local, Global, this)

//We can print to console that other users cannot watch because it's printed to console.
for(let i=0; i<5; i++)
	console.log("Num ",i);

//	[warning]
function ninjaFunction(elem){
	//code by using elem as argument
	elem=clone(elem);
	//code by using copy of elem
}

//	[automatic test(feat. Mocha)]
//Behavior Driven Development(BDD)_output is called as specification & spec
//spec is consisted by describe, it, assert.equal()
describe("pow", function(){
	it("pow n", function(){
		assert.equal(pow(2,3), 8);//if different, Error occur
	});
});

//	[automatic test library(Mocha, Cahi, Sinon)]
//in BDD, Spec first, Create next. Make us easy for modifying code without error.
//one test per one it block!!!! if not, we have to debugging it block for debugging!!!!

//	[polyfills]
//추가된지 얼마 안 된 기능을 사용해 작성하다보면 특정 엔진에서 지원을 안한다는 것을 알 수 있은데, 이때 transpiler인 Babel을 사용하면 모던 자바스크립트 코드를 구표준을 준수하는 코드로 바꿔준다.