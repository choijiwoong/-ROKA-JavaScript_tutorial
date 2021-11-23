//1. IEEE-754(double precision floating point number)_(64bit사용_인데 여기선 저장을 위해 52비트 사용)이나, Bigint로 저장된다.
let bilion=1e9;
alert(7.3e9);//7,300,000,000
let ms=1e-6;

//2. 268이외의 다른 진법은 parseInt를 사용하자.
alert(0xff);//16
alert(0o377);//8
alert(0b11111111);//2

//3. toString(base)_base진법으로 num을 표기 후 String으로 변환
let num=355;
alert(num.toString(16));//주로 16은 색,문자인코딩
alert(num.toString(2));//비트연산디버깅
alert(123456..toString(36));//0~9, A~Z로 나타내는 최대의 base. url줄이는것처럼 긴 식별자를 짧게 줄일때 사용한다.
//숫자를 직접 입력시, 점을 하나만쓰면 소수부로 인식하기에 구분을 위해 ..을 사용한다. (12345).toString(36)은 가능함.

//4. 어림수(Rounding)구하기_Math.floor(내림), Math.ceil(올림), Math.round(반올림), Math.trunc(소소부 그냥 무시)
//소수점 아래로 어림수를 만들고 싶을때는 곱하고나누거나, toFixed(n)_(n번쨰수까지 어림수(반올림)를 구한 후 문자형으로 반환)을 사용하면 된다.
let num=1.23456;
alert(Math.floor(num*100)/100);//1.23
num=12.34;
alert(num.toFixed(1));//"12.3"(반올림)
alert(num.toFixed(5));//"12.34000"_문자형이라는 것을 유의해야 함.

//주의해야할 점
alert(1e500);//Infinity
alert(0.1+0.2==0.3);//false_0.1+0.2=0.30000000000000004_loss of precision(정밀도 손실)
alert(0.1.toFixed(20));//loss of precision을 눈으로 확인하는 방법
//toFixed(n)을 사용하여 loss of precision을 해결할 수 있다.
let sum=0.1+0.2;//Solution
alert(+sum.toFixed(2));//0.3_2자리까지 반올림한걸 문자형으로 받은 수 +를 사용하여 자동 형변환 number.

alert(9999999999999999);//10000000000000000! 52비트에 위 수를 저장하기에 공간이 부족하기에 the least significant digit(유효 숫자)가 손실된다.
//js는 +0과 -0이 존재한다.

//5. isNaN, isFinite_to Number only
alert(NaN===NaN);//false. MaM은 자기 자신을 포함하여 그 어떤 값과도 같지 않다. 고로 isNaN을 사용하여 비교
alert(isNaN(NaN));//true
alert(isNaN("str"));//true_숫자형확인하는 변수에 str넣으니 NaN

alert(isFinite("15"));//true
alert(isFinite("str"));//false_because of NaN
alert(isFinite(Infinity));//false
//isFinite는 문자열이 일반 숫자로 이루어졌는지 검증하는데에 유용하다.
let num=+prompt("숫자를 입력해요", "");//문자열을 숫자형으로 변환 by+
alert(isFinite(num));//숫자가 아닌 값 입력 시 false 반환.
//Object.is를 사용하여 비교도 가능한데, 아래의 경우를 제외하고는(아래 2가지 경우엔 ===보다 더 정확함) ===와 비슷하다. 고로 비교 결과가 ===보다 정확해야 하는 경우, 사용
Object.is(NaN, NaN)===true
Object.is(0, -0)===false

//6. parseInt와 parseFloat
alert(+"100px");//NaN. +혹은 Number()을 사용하여 변환 시 규칙이 엄격하기에 숫자가 아니면 형 변환이 실패한다.
//다만 19$, 200%처럼 숫자만 추출해야하는 경우가 존재하기에 이때, parse를 사용하여 특정 부분만 추출한다.
alert(parseInt("100px"));//100
alert(parseFloat('12.5em'));//12.5
alert(parseInt('12.3'));//12
alert(parseFloat("12.3.4"));//12.3
alert(parseInt('a123'));//NaN_앞에서부터 확인하기에 읽을 수 있는 숫작사 없다고 판단함.

//parseInt의 두번째 인수는 radix로 원하는 진수를 정해줄 때 사용이 가능하다.
alert(parseInt('0xff', 16));//255
alert(parseInt('ff', 16));//255. 0x가 없어도 radix로 알아서 판단하여 동작함
alert(parseInt('2n9c', 36));//123456

//7. 기타 수학 함수_Math.random()_0.0~9.9, Math.max(a,b,c...), Math.min(a,b,c...), Math.pow(n, power)
//8. Practice 1
alert(6.35.toFixed(1));//1.4
alert(6.35.toFixed(1));//6.3 !! Not Error. 무한소수임 sol은 최대한 정수와 가깝게 만들면 됨.