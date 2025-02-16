// Task 1: Employee Salary Calculation

function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return `Net Salary: $${netSalary.toFixed(2)}`;
};

console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6950.00"

// Created a function that calculates the net salary by adding the base salary and bonus, then subtracting the tax amount


// Task 2: Product Price After Discount

function calculateDiscount(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    return `Final Price: $${finalPrice.toFixed(2)}`;
};

console.log(calculateDiscount(100, 0.2)); // Expected output: "Final Price: $80.00"
console.log(calculateDiscount(250, 0.15)); // Expected output: "Final Price: $212.50"

// This function calculates the final price of a product after applying a discount


// Task 3: Service Fee Calculation

function calculateServiceFee(amount, serviceType) {
    let feeRate = serviceType === "Premium" ? 0.15 : serviceType === "Standard" ? 0.10 : 0.05;
    let serviceFee = amount * feeRate;
    return `Service Fee: $${serviceFee.toFixed(2)}`;
}
console.log(calculateServiceFee(200, "Premium")); // Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); // Expected output: "Service Fee: $50.00"

// Here we created a function for a service fee based on the service type provided
 

// Task 4: Car Rental Cost Calculation

function calculateRentalCost(days, carType, insurance = false) {
    let dailyRate = carType === "Economy" ? 40 : carType === "Standard" ? 60 : 100;
    let totalCost = days * dailyRate + (insurance ? days * 20 : 0);
    return `Total Rental Cost: $${totalCost}`;
}
console.log(calculateRentalCost(3, "Economy", true)); // Expected output: "Total Rental Cost: $180"
console.log(calculateRentalCost(5, "Luxury", false)); // Expected output: "Total Rental Cost: $500"

// Here we calculated the total rental cost based 3 parameters


// Task 5: Loan Payment Calculation

function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);
    return `Total Payment: $${totalPayment.toFixed(2)}`;
}
console.log(calculateLoanPayment(1000, 0.05, 2)); // Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // Expected output: "Total Payment: $6050.00"
 
// Here we created a function to see the total payment for a loan including interest over a given period


// Task 6: Identifying Large Transactions

function filterLargeTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}
let transactions = [200, 1500, 3200, 800, 2500];
console.log(filterLargeTransactions(transactions, amount => amount > 1000)); // Expected output: [1500, 3200, 2500]

// Here we essentially are using filters to see transactions above a specified amount using a higher-order function


// Task 7: Shopping Cart Tracker

function createCartTracker() {
    let total = 0;
    return function(amount) {
        total += amount;
        return `Total Cart Value: $${total}`;
    };
}
let cart = createCartTracker();
console.log(cart(20)); // Expected output: "Total Cart Value: $20"
console.log(cart(35)); // Expected output: "Total Cart Value: $55"

// Here we created a function that returns another function that maintains a total of the cart value in $


