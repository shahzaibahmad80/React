//------------------------------------------------------------------------------------------------------------------------------------//

//-------------------------------EVERY ARRAY METHOD TAKES/USES CALL BACK FUNCTION(WITH PARAMETERS)-----------------------------------//

console.log("----------------------------------------------------------------------------------------")
// < .forEach (One of Array Method in JavaScript)> 

console.log(".forEach (Array Method) - Start")

let myArray = [11,22,32,43,54];

let myreturn = myArray.forEach(function(num,index,myArray){
    console.log("At Index " + " " + index + " " +"Number is" + " " + num + " " + "and I am printing complete array again:" + myArray );
});
/*
//console.log(myreturn);//undefined because foreach does not return anything, this method has no "return type" it just returned the undefined. does not give us the newArry
this 1 line is just to verify that does it really returned the "UNDEFINED".
*/
// let myreturn1 = myArray.forEach(function(num){

//     console.log(num);//value of myArray[] is setting in the call back func's "num" one by one by using .forEach array method,

// });

// when we use forEach(),it just work/iterate on the each and every element in the array.
// but it does not returned any thing. BUT if we store the result of .forEach in a variable and print that it will display us "UNDFINED". 

console.log(".forEach (Array Method) - End")

//------------------------------------------------------------------------------------------------------------------------------------//
console.log("--------------------------------------------------")
console.log(".map (Array Method) - Start")

// < .map (One of Array Method in JavaScript)> 

let OriginalArray = [1, 2, 3, 4];

let newArray = OriginalArray.map(function(element) {
  return element * 2; //here: "it means: "that double that (element > 'multiply the original's array's element with 2') and add that new element into "new array"
});

console.log(newArray + " "  + "Modified/New Array in .map()"); // [2, 4, 6, 8] // modified new Array.
console.log(OriginalArray + " " + "Original Array in .map()"); // [1, 2, 3, 4] //Original array change nahi huwa

// .map takes one Call Back function 
// map() array method is used to "transform" every element of array and returned new array.
// in this case: it is multiplying each element with 2 and adding that new transformed elements(new element) in the new array, and it will returned that new array.
// but it Does not change the Original Array (i.e line#49)
// and we use this when "we want to change/modify/transform the item"

// NOTE: .forEach array method does make  "new array". it just filtered/iterate the items/elements



console.log(".map (Array Method) - End")

//------------------------------------------------------------------------------------------------------------------------------------//

// Universal Format (Common in Both ".map and .filter" but also in .forEach as well. implemented above,syntax different because .forEach does not return anythig)-//
/*
MyArray.method(function(element, index, array) {
   // yahan hum condition ya logic likhte hain
   return something;
});
//in foreach method this syntax would not work, because foreach does not "return anything",it just iterate and print(console)
*/
//NOTE: this Universal Format is little different in .reduce array method case. 
/*
MyArray.reduce(function(accumulator, currentValue, index, array) {
  return updatedAccumulator;
}, initialValue);
*/
//------------------------------------------------------------------------------------------------------------------------------------//

console.log("--------------------------------------------------")

console.log(".filter (Array Method) - Start")

// < .filter (One of Array Method in JavaScript)> 

let OriginalArray_f = [1, 2, 3, 4, 5];

let evens = OriginalArray_f.filter(function(num) {
  return num % 2 === 0;//here .filter checks every "num" element of array and returned that new element based on condition. ("num % 2===0")
});

console.log(evens);

// it returns the "elements" according to the condition
// it also checks each element and just returned those elements who "passes the condition".
// we use this when we want to wanted to remove few items from the array based on a condtion.
// it returned new array — with having just matching items/elements/records. in this case: [2,4]

console.log(".filter (Array Method) - End")

//------------------------------------------------------------------------------------------------------------------------------------//

console.log("--------------------------------------------------")

console.log(".reduce (Array Method) - Start")

//-------------------Example#1---------------------------------------
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue,  initialValue,);

console.log("basic example of reduce method from MDN documentation > " + "     " + sumWithInitial);


// it combines the elements of the array in a single value. just like total,average or sum of something.(for example SHOPPING CART example) 
//so, from the above example, ".reduce()" method takes 1 call back function like other array methods and this call back function takes 2 parameters(accumulator,currentValue)
//and here in this we will define one initial value usually this is "0" and it passed to the "accumulator" and then we added up that "accumulator" with "currentVal" 
// and we return it. and that returned value gets stored in the accumulator for the next use.
//above code explanation:
/*
so,firstly we defined the "Initial Value" with "0" and it will be passed to the accumulator.
so, reduce method will run on "array1"[], and in the call back function there will be 0 assigned to the accumulator, because initial value gets assigned to the accumulator.
and currentVal will be "1" (first element of the "array1"). and it will be added up (0"accumulator" + 1"currentVal"") it will return 1. 
and this accumulator will get this value (1). and accumulator will keep getting the updated value after summing up.
so, on 2nd iteration accumulator's value will be having the "1"(updated value after sum) and currentVal"2""(next element in the array1). it will 1+2=3(it will goes to accumulator)
on 3rd iteration accumulator's value would be 3(updated value after sum) and cuurentVal"3"(next element in array1) so in now in accumulator it will go 6.
on 4th iteration accumulator's value would be 6(updated value after sum) and currentVal"4"(next elemetn in array1) so in accumulator it will go 4+6=10. (accumulator=10)

this above code is a basic example. we can have few other examples too with using OBJECTS (Key-Value pairs)               
*/ 

//-------------------Example#2---------------------------------------

const ShoppingCart = [
    {
        itemName: "Oppo",
        price: 500,
    },
    {
        itemName: "Vivo",
        price: 500,
    },
    {
        itemName: "Redmi",
        price: 1000,
    }]


    const shoppingCart_Total = ShoppingCart.reduce(function(accumulator,currentVal)
    {
            return accumulator + currentVal.price
    },0);

    console.log("Shopping Cart's Sum is: " + "  " + " " + shoppingCart_Total);

/*
just default method.
MyArray.reduce(function(accumulator, currentValue, index, array) {
  return updatedAccumulator;
}, initialValue);
*/

console.log(".reduce (Array Method) - End")


//------------------------------------------------------------------------------------------------------------------------------------//