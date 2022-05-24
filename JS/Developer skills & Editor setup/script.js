"use strict";

/*Coding Challenge #1 
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Example: [17,21,23] will print "... 17d C in 1 days ... 21d C in 2 days ... 23d C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!
TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

console.log("Coding Challenge - 1");
// 1) Understand the Problem
// ...Array transformed into strin and seperated by ...
// ...what is the X days? Ans = index+1
// 1) Breaking up into sub-Problems
// ...transform array into string
// ...Transform each element to string woth d C
// ...Strings need to contain day (index + 1)
// ...add ... between elements and start and end of string
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let str = "... ";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}d C in ${i + 1} days ... `;
  }
  console.log(str);
};
console.log(data1);
printForecast(data1);
console.log(data2);
printForecast(data2);
