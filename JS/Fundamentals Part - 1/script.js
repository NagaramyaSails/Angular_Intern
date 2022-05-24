/* Coding Challenge #1

Mark & John are trying to compare their BMI, which is calculated using the formula : BMI = mass / height **2 = mass / height * height 
(mass in kg and height in meter).
1. Store Mark's and John mass and height in variables.
2. Calculate both their BMIs using the formula.
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test Data 1 : Marks M=78kg and H=1.69m, Johns M=92kg and H=1.95m
Test Data 1 : Marks M=95kg and H=1.88m, Johns M=85kg and H=1.76m
*/
console.log("Coding Challenge - 1");
const MarksMass = 78;
const MarksHeight = 1.69;
const JohnsMass = 92;
const JohnsHeight = 1.95;
const MarksBMI = MarksMass / MarksHeight ** 2;
const JohnsBMI = JohnsMass / (JohnsHeight * JohnsHeight);
const MarkHigherBMI = MarksBMI > JohnsBMI;

console.log(
  "MarksBMI = " + MarksBMI + ", ",
  "JohnsBMI = " + JohnsBMI + ", ",
  "MarkHigherBMI = " + MarkHigherBMI
);

/*Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and improve it :
1. Print a nice output to the console, saying whohas the higher BMI. The message can be either "Mark's BMI is higher than John's!" or
   "John's BMI is higher than Mark's!"
2. Use a template string to include the BMI value is the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
Hint : Use if/else statements
*/
console.log("Coding Challenge - 2");
if (MarkHigherBMI) {
  console.log(`Mark's BMI (${MarksBMI}) is higher than John's (${JohnsBMI})!`);
} else {
  console.log(`John's BMI (${JohnsBMI}) is higher than Mark's (${MarksBMI})!`);
}

/*Coding Challenge #3
There are 2 gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score
wins the trophy!
1. Calculate the avg score for each team, using the test data below
2. Compare the team's avg scores to determine the winner of the competition, and print it to the console. Don't forget that there can be
   a draw, So test for that as well.
3. BONUS 1: Include a requirement for a min score of 100. with this rule, a team only wins if it has a higher score than the other team,
   and at the same time a score of at least 100 points. (Hint: Use logical operators to test min score, as well as multiple else-if blocks)
4. BONUS 2: Min score also applies to a draw! So a draw only happens when both teams have the same score and both have a score >= 100 points.
   otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108, and 89. Koalas score 88, 91 and 110.
TEST DATA BONUS 1: Dolphins score 97, 112, and 101. Koalas score 109, 95 and 123.
TEST DATA BONUS 2: Dolphins score 97, 108, and 89. Koalas score 109, 95 and 106.
*/
console.log("Coding Challenge - 3");
const DolphinsAvgScore = (97 + 108 + 89) / 3;
const KoalasAvgScore = (109 + 95 + 106) / 3;
console.log(
  `DolphinsAvgScore = ${DolphinsAvgScore} , KoalasAvgScore = ${KoalasAvgScore}`
);
if (DolphinsAvgScore > KoalasAvgScore && DolphinsAvgScore >= 100) {
  console.log("Dolphins wins the trophy !!");
} else if (KoalasAvgScore > DolphinsAvgScore && KoalasAvgScore >= 100) {
  console.log("Koalas wins the trophy !!");
} else if (
  KoalasAvgScore === DolphinsAvgScore &&
  KoalasAvgScore >= 100 &&
  DolphinsAvgScore >= 100
) {
  console.log("Both the teams wins the trophy !!");
} else {
  console.log("No team wins the trophy !!");
}

/*Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15%
(0.15) if the bill value is between 50 & 300. If the value is different, the tip is 20% (0.2).
1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use
   if/else statement (use ternary operator).
2. Print a string to the console containing the bill value, the tip, and the final value (bill+tip). 
Example : 'The bill was 275, the tip was 41.25, and the total value 316.25'.
TEST DATA : test foe bill values 275, 40, 430.
*/
console.log("Coding Challenge - 4");
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);
