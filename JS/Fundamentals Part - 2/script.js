"use strict";

/*Coding Challenge #1
Back to the gymnastics teams, the Dolphines and Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the avg of the 3 scores is calculated (so 1 avg score per team). Ateam only wins if it has at least
DOUBLE the avg score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the avg of 3 scores.
2. Use the function to calculate the avg for both teams.
3. Create a function 'checkWinner' that takes the avg score for each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs
   the winner to the console, together with the victory points, according to the rule above.
   Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49.
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27.
HINT: To check if a number A is at least double num B, check for A >= 2*B. Apply this to the team's avg scores.
*/
console.log("Coding Challenge - 1");
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(`avgDolphins : ${avgDolphins}, avgKoalas : ${avgKoalas}`);
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} VS. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} VS. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(avgDolphins, avgKoalas);
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(`avgDolphins : ${avgDolphins}, avgKoalas : ${avgKoalas}`);
checkWinner(avgDolphins, avgKoalas);

/* Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 & 300,
and if the value is different, the tip is 20%.
1. Write a function 'calcTip' that takes any bill value as input and returns the corresponding tip, calculated based on the rules above.
   Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: create an array 'total' containing the total values, So the bill + tip.
TEST DATA: 125, 555 and 44
*/
console.log("Coding Challenge - 2");
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
//const calcTip = bill => bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.2;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Total: ${total}`);

/* Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations!
Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith).
2. Create a 'calcBMI' method on each object to calculate the BMI (the method on both objects). Store the BMI value to a property,
   and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI.
Example: "John's BMI (28.3) is higher than Mark's (23.9)!".
TEST DATA: Marks W = 78 kg and H = 1.69 m. John W = 92 kg and H = 1.95 m.
*/
console.log("Coding Challenge - 3");
const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
Mark.calcBMI();
John.calcBMI();
console.log(`Mark's BMI: ${Mark.BMI} , John's BMI: ${John.BMI}`);
if (Mark.BMI > John.BMI) {
  console.log(
    `${Mark.fullName}'s BMI (${Mark.BMI}) is higher than ${John.fullName}'s BMI (${John.BMI}).`
  );
} else if (John.BMI > Mark.BMI) {
  console.log(
    `${John.fullName}'s BMI (${John.BMI}) is higher than ${Mark.fullName}'s BMI (${Mark.BMI}).`
  );
}

/*Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
1. Create an array 'bills' containing all 10 test bill values.
2. Create empty arrays for the tips and totals ('tips' and 'totals').
3. Use the 'calcTip' function we wrote before to calculate tips and total values (bill + tip) for every bill value in 
   bills array. Use a for loop to perform the 10 calculations!
TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52.
HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays.
4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the
   avg of all numbers in the given array. How to solve it :
   4.1: First, you will need to add up all values in the array, To do the addition, start by creating a variable 'sum' that starts at 0.
        Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the
        end of the loop, you have all values added together.
    4.2: To calculate the avg, divide the sum you calculaed before by the length of the array.
    4.3: Call the function with the 'totals' array.
*/
console.log("Coding Challenge - 4");
const billsArr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsArr = [];
const totalsArr = [];
const calcTipFn = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
for (let i = 0; i < billsArr.length; i++) {
  const tip = calcTipFn(billsArr[i]);
  tipsArr.push(tip);
  totalsArr.push(tip + billsArr[i]);
}
console.log(`Bills: ${billsArr}`);
console.log(`Tips: ${tipsArr}`);
console.log(`Totals: ${totalsArr}`);
const calcAverageFn = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(`Average of totals: ${calcAverageFn(totalsArr)}`);
