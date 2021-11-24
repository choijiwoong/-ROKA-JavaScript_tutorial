//1. casting to Number
alert ('2'>1); //true
alert('01'==1); //true

//2. difference of rules on Boolean, ==
let a=0;
alert(Boolean(a));//false

let b="0";
alert(Boolean(b));//true

alert(a==b);//true. == changes "0" to 0 with different rule of explicit convertion to Boolean

//3. ==(equality operator) don't distinguish 0&false
alert(0==false);//true
alert(''==false);//true
alert(0===false);//false_we can compare false & 0 by using ===(strict equality operator) that return false if argument's types are different.

//4. == don't distinguish null&undefined
alert(null==undefined);//true
alert(null===undefined);//false (because they get different type.)

//5. cmp(null, undefined) makes both to Number(null->0, undefined->NaN)

//6. cmp(null, 0)
alert(null>0);//false
alert(null==0);//false_ equality operator's work is different with <,>,<=,>=.  equality operator return false comparing other value without null&undefined.
alert(null>=0);//true_to Number

//7. undefined can't be compared with other value
alert(undefined>0);//false_convert to NaN
alert(undefined<0);//false_convert to NaN
alert(undefined==0);//false_return false with same reason of 6

//So we have to concentrate to null, undefined on operator!

//8. practice
5>4	true
"apple">"pineapple"		false
"2">"12"	true
undefined==null	false[true_because both can't be distinguished]
undefined===null	true[false_because of different type]
null=="\n0\n"	false_null only return true with undefiend.
null===+"\n0\n"	true[false_other type]