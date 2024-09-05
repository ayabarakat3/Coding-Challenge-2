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
