console.log("----------------------------------------------------------------------------------------")
myArray = [2,4,5,6,7,8];

//console.log("this is len" + " " +  myArray.length())
console.log("-----------------------------LENGTH OF ARRAY(using built-in function)------------------------")

console.log("Length of the Array is: " +  " " + myArray.length) // output is 6. so the length of the array is 6

/*
 but if we want to fetch/print the last value in the array. we will use formula .length - 1
 > because index starts from 0.it means 6-1 = 5 so it will give us the last value "8" becasue last value is on last index "5"
*/
//we will store the arrya in the variable...
// let myVar =  myArray

//-----------------------------------------------------------------------------------------------------------------------------------//
//Global Variable in a javascript is like that would be accessible in every function,every block,every place of the program .....
//--Global Scoped and MinHoisting(idk about Minhousiting and maybe this is a global scoped)

console.log("------------------- Global Variable--------------------")
let myName = "ali" //global variable. this is global variable. here "myName" is declared as global variable. so it is accessible inside the function:greet()
const myName1 = "Asad"
//var myName = "ali"
function greet() {
    // console.log("Hello " + myName); // here this is accessible
    return "Hello " + myName; // here this is accessible

  }

 console.log("This is a Global declared Variable's output:" + "     "  +  greet()); // Output: Hello Ali
  console.log("and This one is a Global declared Variable's output:" +  "    " + myName1); // Output: Ali
//-----------------------------------------------------------------------------------------------------------------------------------//
/*
 Implicitly Global Variable (Dangerous Part)
 Agar tum kisi variable ko bina let, const, ya var ke declare kar do function ke andar ya kahin bhi — to JavaScript usko automatically global bana deta hai.
 if we declare any variable without using let/const/var inside the function or anywhere in the program, that is "VERY DANGEROUS"
 > we can change the global state of our program accidently at any time.
 > very difficult to find bugs
 > program becomes unpredictable
*/
//a variable made as "GLOBAL" mistakenly
console.log("------------------- Implicitly Global Variable (Dangerous Part)-'MISTAKENLY assigned without let/var/const'-------------------")
function test(){
    myAge = 23; //without declaring var/const/let , it has become implicitly global variable(accidently/by mistake)
}

test();

console.log("This is a Implicitly Global declared Variable's output" + " "  + myAge) // output: 23 //here "myAge" is assigned inside function but without let/const/var. so JS has make it as GLOBAL VARIABLE


//Problem
/*
if function has make any var as global accidently, and another function was using the same name variable for himself,data will corrupt or overwrite 
and it will be difficult to track the bug/error
so that's why js allows strict mode ("use strict") where it does not allow this kind of mistake.
*/

//-----------------------------------------------------------------------------------------------------------------------------------//