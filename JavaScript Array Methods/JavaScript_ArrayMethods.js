// const myARR = [1,22,3,4];

// console.log(myARR);
//array... printing every element in console log...

//------------------------------------------------------------------------------------------------------------------------------------//

// < .forEach (One of Array Method in JavaScript)> 

let myArray = [11,22,32,43,54];

//.forEach aik Call Back function leta ha and almost ye sb array method "call-back" function lety han...
let myreturn = myArray.forEach(function(num,index,myArray){
//console.log(num);
console.log("At Index " + " " + index + " " +"Number is" + " " + num + " " + "and printing complete array again:" + myArray );
});

//console.log(myArray);
//console.log(myreturn);//undefined because foreach does not return anything, this method has no "return type" it just returned the undefined. does not give us the newArry

// let myreturn1 = myArray.forEach(function(num){

//     console.log(num);//value of myArray[] is setting in the call back func's "num" one by one by using .forEach array method,

// });

// Jab ham forEach() ko call karte han, wo sirf array ke har item pe kaam(sirf iterate) karta hai.
// Lekin wo kuch bhi wapas (return) nahi karta.
// Agar ham forEach() ka result kisi variable mein store krein, to usme "undefined" milega. on line#18 in ""myreturn"" it is printing "undefined".

//------------------------------------------------------------------------------------------------------------------------------------//

// < .map (One of Array Method in JavaScript)> 
//Har element ke upar kaam karke usko transform (yaani modify/change) karta hai — aur uss naye result se new array return karta hai.
//ye ham tb use krty han jb "jb har item ko change/modify krna ho.""

//--------------------  
// map() har number ko 2 se multiply karta hai.
// New array banata hai jisme transformed (doubled) values hoti hain. .forEach new array nahin bnata
// Original array change nahi hota. (i.e line#49)
let numbers = [1, 2, 3, 4];

let doubled = numbers.map(function(num) {
  return num * 2; //Yahan return n * 2 ka matlab hai: "is element ko double karke new array mein daal do."
});

console.log(doubled); // [2, 4, 6, 8] // modified new array.
console.log(numbers); // [1, 2, 3, 4] //Original array change nahi huwa

//------------------------------------------------------------------------------------------------------------------------------------//

// < .filter (One of Array Method in JavaScript)> 
//Har element ko check karta hai — aur sirf unhi elements ko return karta hai jo "condition ko pass" karte hain.
//ye ham tb use krty han jb hmein array se kuch items remove karne ho based on a condition.

let numbersArr = [1, 2, 3, 4, 5];

let evens = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evens); // [2, 4]
/*
filter() har number ko check karta hai: kya wo even hai? //num % 2 === 0;

Sirf even numbers ko rakhta hai .    [2,4]

New array return karta hai — sirf matching items ke sath. [2,4]
*/







