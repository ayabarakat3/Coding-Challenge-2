// Task 1: Calculate the Tip
let bill = 133;
// Output = 133;
let tip = (bill <=300 && bill >= 50) ? (bill * 0.15) : (bill * 0.20);
// Since the bill is over $50 and less than $300, we would use 15% of the bill as tip.  
console.log(tip);

// Task 2: Output details
// To get the accurate sum total of the bill including the tip, the full bill amount plus the tip would be combined. 
sumTotal = bill + tip
console.log(`The bill is $${bill}, the tips is $${tip}, and the total is $${sumTotal}.`); 
//Output = 152.95

// Task 3: Create a Function
// A function is created to help get the results for the chosen numbers in a quick and accurate way. 
function calculateTip(bill) {
    return (bill <=300 && bill >= 50) ? (bill * 0.15) : (bill * 0.20)}
let testerBill = 100;
let testerTip = calculateTip(testerBill);
console.log(`The total bill is $${testerBill} and the tip is $${testerTip}` )
const testBill = 100;
console.log("Tip for $100 bill: $", calculateTip(testBill));
// Output: Bill=$100 and Tip=$15

// Task 4&5: Utilize Arrays and Data Set 
function calculateTip(bill) {
    return (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20);}
//Data Set #1
const billSet1 = [275, 40, 430];
const tipSet1 = billSet1.map(bill => calculateTip(bill));
const totalSet1 = billSet1.map((bill, index) => bill + tipSet1[index]);
// Data Set #2
const billSet2 = [125, 555, 44];
const tipSet2 = billSet2.map(bill => calculateTip(bill));
const totalSet2 = billSet2.map((bill, index) => bill + tipSet2[index]);
const combinedData = {
dataSet1: {
bills: billSet1,
tips: tipSet1,
totals: totalSet1},
dataSet2: {
bills: billSet2,
tips: tipSet2,
totals: totalSet2} };

console.log(`Combined Data Sets:`);
// Data set 1 information:
console.log(`Data Set 1 Bills: $${combinedData.dataSet1.bills}`);
console.log(`Data Set 1 Tips: $${combinedData.dataSet1.tips}`);
console.log(`Data Set 1 Totals: $${combinedData.dataSet1.totals}`);
// Data set 2 information:
console.log(`Data Set 2 Bills: $${combinedData.dataSet2.bills}`);
console.log(`Data Set 2 Tips: $${combinedData.dataSet2.tips}`);
console.log(`Data Set 2 Totals: $${combinedData.dataSet2.totals}`);
// Output: All data sets arrays have been completed. 
/*
Entire script has been completed at this point.
Overview of all completed tasks:
-Tip was calculated for chosen bill amount that was over $50 and under #300.
-Total sum of bill+tip was calculated.
-Function created to reveal total bill amount+tip of a $100 bill. 
-Arrays utilitized and used to reveal total bill amounts + tip for each of the provided data sets. 
-Data from both sets was merged and displayed.
*Code has been checked multiple times. The code should run and meet all requirements with no issues**/

