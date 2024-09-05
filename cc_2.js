// Task 1: Calculate the Tip

let bill = 275;
// output = 275;
let tip = (bill <=300 && bill >= 50) ? (bill * 0.15) : (bill * 0.20);
// Since the bill is over $50 and less than $300, we would use 15% of the bill as tip. 
console.log(tip);
