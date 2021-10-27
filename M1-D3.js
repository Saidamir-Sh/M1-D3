
/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* Let's say you are in a garden and picking flowers. And while picking you are storing them in different baskets depending on their color, just like this In programming when we work with any data (input or output) we have to specify which type of data we are defining. there are 6 main data types : String , Integer, Bigint, Boolean, Null, Undefined*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* variable is something like container. first we declare them and initialise the value */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

console.log(12 + 20)
/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/
/*
let x
x = 12
*/
/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/
let name
name = "John Doe"


/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/
/*
console.log(12 - x)
*/
/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "jhon"
let name2 = "Jhon"

if(name1 !== name2) {
    console.log("Both names are different")
}

if(name1.toLowerCase() === name2.toLowerCase()) {
    console.log("Now they are equal.")
}


/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

let x = 7
let lettersArr = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]

console.log("Number is : " + x + " " + " : "+ lettersArr[x]);

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

let number = true
let isNumber = number ? 15 : 'nah it was false'
console.log(isNumber);

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
