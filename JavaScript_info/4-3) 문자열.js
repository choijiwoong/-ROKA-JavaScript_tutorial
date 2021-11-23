//1. js는 UTF-16을 따른다. BackTick은 표현식을 ${}로 묶어 출력할 수 있는데, 이를 template literal이라고 한다.
//Backticks
function sum(a, b){ return a+b; }
alert(`1+2=${sum(1,2)}.`);//print with Expression

let guestList=`guest:
	*John
	*Pete
	*Mary
`;
alert(guestList);//여러줄에 걸쳐서 출력이 가능하다. 만약 backtick이 아닌 일반 따옴표로 했다면 오류가 발생한다. 물론 \n사용해도댐

//Template Function(Tagged Template)은 func(String name)과 같은 함수를 func`The String Argument`이런식으로 호출하는 방식이다.

//2. 특수 기호
alert("\u00A9");//0. escape character인 backslash charactor로 시작._유니코드
alert("\u{20331}");//긴 유니코드_중국어.

alert(`My\n`.length);//3. js에서는 length()가 아닌 프로퍼티 length에 길이를 저장한다.

//3. 특정 글자에 접근하는 방법은 [pos]나 .charAt(index)를 사용하면 된다. 반환할 글자가 없는 경우 []는 undefined를, charAt은 빈 문자열을 반환한다.
let str="Hello";
alert(str[1000]);//undefined
alert(str.charAt(1000));//''

for(let char of "Hello")
	alert(char);//for..of를 사용하여 문자열을 구성하는 글자를 대상으로 반복작업을 한다.
//문자열은 읽기만 가능하기에 중간에 글자를 수정하려면 에러를 발생시키며, 새로운 문자열을 만들어 기존의 변수에 대입해야한다.
//(p.s) toLowerCase(), toUpperCase()

//4. 부분 문자열substring 찾기 with .indexOf(substr, position)_앞에서부터 .lastIndexOf(substr, position)_뒤에서부터
let str='Widget with id';
alert(str.indexOf('Widget'));//0_Widget시작 location
alert(str.indexOf('widget'));//-1_cannot find start point of widget because it distinguish upper, lower
alert(str.indexOf("id"));//1
alert(str.indexOf('id', 2))//12_second argument: 2번째로 등장하는 위치
//use of indexOf
let str="As sly as a fox, as strong as an ox";
let target='as';
let pos=0;

while(true){
	let foundPos=str.indexOf(target, pos);
	if(foundPos==-1)
		break;
	alert(`Location: ${foundPos}`);
	pos=foundPos+1;//let find next target in foundPos.
}//7, 17, 27

//5. 비트NOT연산자는 피연산자를 32비트정수로 바꾼 후 모든 비트를 반전한다._~n=-(n+1)고로 !str.indexOf("Widget") 대신 ~str.indexOf("Widget")을 사용할 수 있다.
//이땐 항상 큰 수의 경우 잘려서 의도한대로 ~가 작동하지 않는 다는 것을 인지해야 한다.

//6. 모던 JS에선 .includes메소드를 사용하여 문자열 포함 여부를 검사한다._위치정보 말고 포함여부만을 알고 싶을 때 적절하다.
alert("Widget with id".includes("Widget"));//true
alert("Hello".includes("Bye"));//false
alert("Widget".includes("id",3));//false_infexOf처럼 3번째 등장하는 id가 있는지 확인
alert("Widget".startsWith("Wid"));//true_~로 시작하는지
alert("Widget".endsWith("get");//true_~로 끝나는지

//7. 부분 문자열 추출하기_*slice(start, end)*, substring(start, end), substr(start, length)
let str="stringify";
alert(str.slice(0,5));//'strin'
alert(str.slice(0,1));//'s'
alert(str.slice(2));//'ringify'
alert(str.slice(-4,-1));//gif
alert(str.slice(6,2));//""(Empty String)

alert(str.substring(2,6));//'ring'
alert(str.substring(6,2));//'ring'_slice()와의 차이점

alert(str.substr(2,4));//"ring"_by length
alert(str.substr(-4,2));//"gi"

//8. 문자열 비교하기
//.codePointAt(pos)_글자의 코드를 반환
alert("z".codePointAt(0));//122
alert("Z".codePointAt(0));//90
//.fromCodePoint(code)_code에 대응되는 글자를 만들어준다.
alert(String.fromCodePoint(90));//Z
alert('\u005a');//Z
//application
let str='';
for(let i=65; i<=220; i++)
	str+=String.fromCodePoint(i);
alert(str);

//9. 문자열 제대로 비교하기
//우선 언어의 종류를 알아야하는데, 대부분 ECMA-402를 지원한다. str.localeCompare(str2)로 ECMA-402규칙대로 비교한 값(정수)가 반환된다.
alert('Österreich'.localeCompare('Zealand'));//-1_인자2개를 더 쓸 수 있다 정도만 알아두자.

//10. 문자열 심화_2바이트로는 65536개의 조합밖에 만들지 못하기에 사용빈도가 낮은 기호는 서로게이트 쌍(surrogate pair)이라는 2바이트로 인코딩한다.
alert('𝒳'.length);//2
alert( '😂'.length );//2
alert( '𩷶'.length );//2
//String.fromCodePoint와 str.codePointAt을 사용하여 surrogate pair을 제대로 처리할 수 있다. 그 전까지는 fromCharCode, charCodeAt을 사용하였지만 이는 서로게이트를 처리하지 못했다.
alert('𝒳'[0]);//ERROR _0xd800~0xdbff로 첫번째 글자를 나타내고
alert('𝒳'[1]);//둘은 붙어있을때만 의미가 있다._oxdc00~0xdfff로 두번째 글자를 나타내기에, 범위로 서로게이트 바이트를 확인할 수 있다.(저 범위는 서로게이트를 위해 표준에서 비워둠)
alert('𝒳'.charCodeAt(0).toString(16));//d835_처리가 불가능하기에 코드를 반환함
alert('𝒳'.charCodeAt(1).toString(16);//dcb3

//11. 발음 구별 기호(a->ä)와 유니코드 정규화
alert('S\u0307');//처럼 베이스클자에 '윗점'을 나타내는 유니코드 문자를 붙여 Ṡ를 만들 수 있다. 
alert('S\u0307\u0323');//Ṩ_아래점도 추가하여 나타낼 수 있다.

let s1='S\u0307\u0323';// Ṩ
let s2='S\u0323\u0307';// Ṩ
alert(s1==s2);//False! 윗점과 아랫점을 나타낸 순서가 다르기에 같은 글자여도 False를 반환한다.
//고로 unicode normalization정규화 알고리즘으로 각 문자열을 정규화해야 한다.
alert("S\u0307\u0323".normalize()=="S\u0323\u0307".normalize());//True!_normalize를 하면 Ṩ를 나타내는 \u1e68하나로 치환된다.
