// const myARR = [1,22,3,4];

// console.log(myARR);
//array... printing every element in console log...


// < FOREACH (One of Array Method in JavaScript)> 

let myArray = [11,22,32,43,54];

//.forEach aik Call Back function leta ha and almost ye sb array method "call-back" function lety han...
let myreturn = myArray.forEach(function(num,index,myArray){
//console.log(num);
console.log("At Index " + " " + index + " " +"Number is" + " " + num + " " + myArray );
});

console.log(myArray);
console.log(myreturn);

// Jab ham forEach() ko call karte han, wo sirf array ke har item pe kaam(sirf iterate) karta hai.
// Lekin wo kuch bhi wapas (return) nahi karta.
// Agar ham forEach() ka result kisi variable mein store krein, to usme "undefined" milega. on line#18 in ""myreturn"" it is printing "undefined".

//------------------------------------------------------------------------------------------------------------------------------------//

