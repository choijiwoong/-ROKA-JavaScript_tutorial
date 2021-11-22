//primitive(string, number, bigint, boolean, symbol, null, undefined) is not object

//1. use primitive like Object_원시값이 메소드나 property에 접근하려하면 추가기능을 제공하는 Object Wrapper를 만들어주고, 곧 삭제시킨다.
let str="Hello"; //moonlight_dept
alert(str.toUpperCase());//HELLO. 원시값의 프로퍼티에 접근하는 순간 특별한 객체를 만들어 메서드 실행 후 파괴 for가벼움
//(p.s null, undefined는 wrapper가 없음)
let n=1.23456;
alert(n.toFixed(2));//1.23

//2. Do not use String, Number, Boolean as constructor_래퍼객체를 만들 순 있지만 복잡해짐
alert(typeof 0);//number
alert(typeof new Number(0));//object

let zero=new Number(0);
if(zero)
	alert("zero를 객체로 간주하여 1f의 boolean값을 가짐");
//just use wrapper without new!
let num=Number("123");//값을 반환하지 객체를 저장하지 않음

//3. practice_Add property to primitive.
let str="Hello";
str.test=5;//프로퍼티 만들려하면 wrapper객체가 만들어지는데, 엄격모드는 wrapper의 property수정이 불가하여 오류를 발생. 
//비엄격이면 에러없이 test가 추가되나 바로 wrapper가 삭제되기에 마지막줄에서 마찬가지로 test property를 찾을 수 없다.
alert(str.test);