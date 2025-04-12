
//Products Array
let products = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Mobile", price: 800, inStock: false },
    { name: "Keyboard", price: 150, inStock: true },
    { name: "Monitor", price: 300, inStock: false }
  ];



  //use case#1
  //if we want to display just the avaiable products in array, we will use filters array method.

  let availableProducts = products.filter(function(product) {
    return product.inStock === true;
  });
  

//   console.log(availableProducts);  //(2) [{…}, {…}] > here (2)means that there are 2 items in an array ,  "{...}" meaning of this is Object.

//and when we want to see the "details" of object we use console.table() or JSON.stringify()....
console.table(availableProducts);   //working fine!!
//console.log(JSON.stringify(availableProducts, null, 2)); //complete JSON Format...as it as
// >> so basically, filter() har product check kryga  — and sirf wahi products new array mein aein gi jinka inStock true hai.
 
//------------------------------------------------------------------------------------------------------------------------------------//


//use case # 2
//Har product ka naam aur price ko show karwana ho (formatted list) , we will use .map()
let productList = products.map(function(product) {
    return `${product.name} - $${product.price}`;
  });
//   console.log(productList);  

console.table(productList); 

//>>so basically, here, map() har product ko transform kryga — aur sirf naam aur price ka string bana ke new array return karta hai

//------------------------------------------------------------------------------------------------------------------------------------//


//Both Methods > Chaining Technique...

let availableList = products
  .filter(function(product) {
    return product.inStock;
  })
  .map(function(product) {
    return `${product.name} - $${product.price}`;
  });

// console.log(availableList);

console.table(availableList); //it will only display the name and price (using .map()) of the available product(filtering/.filter())

//Pehle filter() sirf available products ko rakhta hai
//Phir map() unka naam aur price string bana ke return karta hai