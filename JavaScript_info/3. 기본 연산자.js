//[1. Common operand]
//1. usual Arithmetic casting
alert(2**2+2+'1');//'61' + 연산은 피연산자가 문자열로 변경된 후 concat된다.
alert(6-'2');//-연산은 피연산자가 숫자형으로 변경된다.

//2. unary operator+
let x=1;
alert(+x);//1
let y=-2;
alert(+y);//-2
//change to Number type by unary +_same work with Number(...)
alert(+true);//1
alert(+"");//0

let apples="2";
let oranges="3";
alert(apples+oranges);//'23' Logic error!
alert(+apples + +oranges);//'5' Good! change string to number by unary+! (feat. operator priority)

//3. operator precedence
let a=1;
let b=2;
let c=3-(a=b+1);
alert(a);//3
alert(c);//0

//4. bit operator_Zero-Fill Right Shift(>>>) 아마 부호비트 상관없이 그냥 0으로 채우는거일듯

//5. comma operator,
let A=(1+2, 3+4);//return last result only
alert(A);//7

A=1+2, 3+4;//3 comma has low precedence.

//6. practice 1
""+1+0 //"10"
""-1+0 //0		[1]
true+false //1
6/"3" //2
"2"*"3" //6
4+5+"px" //45px		[9px]
"$"+4+5 //$45
"4"-2 //2
"4px"-2 //NaN
7/0 //Infinite
"   -9   "+5 //"     -9   5"
"    -9   "-5 //-14
null+1 //1
undefined+1 //1		[NaN]_(Number)undefined->NaN
" \t \n"-2 //NaN		[-2]_\t, \n makes space also.