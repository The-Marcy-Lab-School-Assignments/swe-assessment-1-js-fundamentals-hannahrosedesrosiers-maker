# Mod 1 Assessment - Short Response Section



Write your responses directly in this file. Follow markdown formatting guidelines.



---



## Section 1: Short Response



### Question 1



This code will give you a reference error. The variable `currentStatus` is defined inside the if-else statement. let uses block scope, JS does not let you use the variable outside of the block it was made in. When you try to use it outside the if-else statement, JS doesn't know what you are referring to. You can fix this by declaring the variable outside of the if statement.



```JavaScript

const react = (isReuben) => {

  let currentStatus;

  // variable is declared outside of the if statement

  if (isReuben) {

    curentStatus = "Everything is just fine";

  } else {

    currentStatus = "Time to panic.";

  }



  console.log(currentStatus);

};

```



### Question 2



The code logs 'Michael Jordan'. Both `bestPlayer` and `theGoat` are referring to the same object in JavaScript. When you have `bestPlayer.name = "Michael Jordan"` you are changing the value of the name key. When you log `theGoat.name`, it prints "Michael Jordan" because it points to the same object. In JavaScript, objects are reference types, so variables can refer to the same object in memory.



### Question 3



The code logs 'Paul is the hardest working person in the room. Laisha is also the hardest working person in the room’. Outside of the function, we have a variable `theHustler` set to the value `Laisha`, but there is also a variable with the same name within the function set to `Paul`. These are two different scopes: the function scope and the global scope. When you use the `console.log` inside the function, it refers to the variable also in the function. When you use `console.log` outside of the function, it refers to the one outside.



### Question 4



Rest parameters allows you to make functions that can have any number of arguments, which is good for when you don't yet know the number of arguments or isn't a fixed amount.

To use a rest parameter, you put 3 dots before the parameter name. Let's say you have a function called `testScores` that can take in multiple scores and find the average. Here's how you would write the first line.



`function testScores(...scores){`



The `...scores` allows the user to put in however many scores or numbers they want.

Now to write out a full function.



````javascript

function sum(...nums){

    let total = 0

    for (let i = 0; i < nums.length; i++){

        total += nums(i)

    }

    return total

}





### Question 5



Scope is basically where your variables are and thus where they can be used. You can think of scope like a computer in a library, you can use the computer in the library, but you can't take it out and use it outside. Another example can be food in the movie theatres, you cant take food from outside and eat it there, but you can get food from inside and eat it there. I will give an example, but questions 1 and 3 are also good examples.



```JavaScript

let food = 'McDonalds'



function movieTheatre() {

    let food = 'popcorn'

    console.log(food)

}

console.log(food)

````



First, we declare food outside of the function to 'McDonalds'. Then, when I created the function `movieTheatre`, I put in a variable also called 'food' and set it to 'popcorn'. There are 2 variables named `food`. When you use `console.log(food)` inside the function, it refers to the `food` variable that is also inside of the function, printing 'popcorn'. But when you use `console.log(food)` outside of the function, since you are not referring to the function, it refers to the `food` variable outside of the function, printing 'McDonalds'.



### Question 6



Modules are different files containing code that are imported to be used in other files. It is important to use it not only because it makes your code more neat and organized, but it’s key for the separation of concerns. This means that we can seperate the code into different functions and parts in different files to not only prevent clutter but also allow a smoother flow of code since you can easily refer back to another one and reuse the code.



Here's an example:

**File 1: food.js**



```JavaScript

//food.js

const food = "McDonalds";

module.exports = food;

```



**File 2: movieTheatre.js**



```JavaScript

//movieTheatre.js

const food = require("./food");

function movieTheatre() {

  console.log(food);

}

```



The function `movieTheatre` uses the `food` variable imported from `food.js`. There is no `food` variable in file 2, but using `module.exports`, we can take that variable `food` from `food.js` and use it in our second file to print 'McDonalds'.



### Question 7



`fruits` will still be `['apple', 'banana', 'cherry', 'date']` because the original array isnt changed by the code. `fruitsMinusOne` will be `['apple', 'banana', 'cherry,]` since it gives a new array with the last item `'date'` removed. A function is pure if it does not affect or change the input, so we make a copy of the array to make changes there. We wouldn't want to change the input, especially when doing collaborative work, as it keeps the code organized.



### Question 8



You can use objects to represent every item because it can hold the name, price, color, and other details about the item together. A cart is basically like a list of all your items, so probably arrays, since arrays can hold objects as well. Here's an example;



```JavaScript

const shoppingCart = [

    {name: 'pencils', price: 40, color: 'red', itemCode: '55db58d'}

    {name: 'notebooks', price: 20, color: 'blue', itemCode: 'pj88hw9'}

    {name: 'shirt', price: 11, color: 'white', itemCode: '02nnjfh'}

]

```



Each item in my cart is an object with its own details like price and color, the cart itself is the array holding them, and they are easy to track.

