// Task 1: Calculate the Tip
let bill = 133;
// Output = 133;
let tip = (bill <=300 && bill >= 50) ? (bill * 0.15) : (bill * 0.20);
// Since the bill is over $50 and less than $300, we would use 15% of the bill as tip. 
console.log(tip);

// Task 2: Output details
sumTotal = bill + tip
console.log(`The bill is $${bill}, the tips is $${tip}, and the total is $${sumTotal}.`); 
//Output = 152.95

// Task 3: Create a Function
function calculateTip(bill) {
    return (bill <=300 && bill >= 50) ? (bill * 0.15) : (bill * 0.20)}
let testerBill = 100;
let testerTip = calculateTip(testerBill);
console.log(`The total bill is $${testerBill} and the tip is $${testerTip}` )

// Task 4&5: Utilize Arrays and Data Set
// Function created to calculate tip
function calculateTip(bill) {
    return bill * 0.2;}

const bills = [275, 40, 430,];  
// const bills = [125, 555, 44];  // Test Data Set 2
const tips = bills.map(bill => calculateTip(bill));
const totals = bills.map((bill, index) => bill + tips[index]);
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);
const testBill = 100;
console.log("Tip for $100 bill:", calculateTip(testBill));
