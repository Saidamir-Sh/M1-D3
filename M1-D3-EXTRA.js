// Additional assignments for Day 3

/* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/
let isMale = true
let gender = isMale ? "male" : "female"

/* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/
let a
let b 
if (a === 8 || b === 8 || a + b === 8 || a - b === 8) {
    console.log("Verified");
}

/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.
*/
let fullName = "Jhon " + "Doe"

/* EXTRA 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/
let i = 2
let j = 4
let k = 6

if (i > j && i > k) {
    if (j > k) {
        console.log(i + " " + j + " " + k)
    } else {
        console.log(i + " " + k + " " + j)
    }
} if (j > i && j > k) {
    if(i > k) {
        console.log(j + " " + i + " " + k)
    } else {
        console.log(j + " " + k + " " + i)
    }
} if (k > i && k > j) {
    if(i > j) {
        console.log(k + " " + i + " " + j)
    } else {
        console.log(k + " " + j + " " + i)
    }
}

/* EXTRA 5
 Write a piece of code for finding the average of two given integers.
*/
let avrg1 
let avrg2
console.log((avrg1 + avrg2)/2)

/* EXTRA 6
 Write a piece of code for finding the longest of two given strings.
*/
let firstString = "abcdf"
let secondString = "abcd"

if (firstString.length > secondString.length) {
    console.log("First string is longer than Second")
} else {
    console.log("Second string is longer than first")
}

/* EXTRA 7
 Write a piece of code for checking if a given value is a integer or not.
*/
let unknownVar = "variable"
if (typeof unknownVar === "number") {
    console.log("Yes, it is a number")
} else {
    console.log("No, it is not a number")
}

/* EXTRA 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
