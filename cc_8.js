//Task 1: Function Declaration - Employee Salary Calculation
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return `Net Salary: $${netSalary.toFixed(2)}`;
}

//Created function calculates the net salary by adding the base salary and bonus, then subtracting the tax amount.
