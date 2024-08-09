function checkLeapYear() {
    // Get the year from the input field
    const year = parseInt(document.getElementById('yearInput').value);

    // Check if the input is a valid number
    if (isNaN(year)) {
        document.getElementById('result').textContent = 'Please enter a valid year.';
        return;
    }

    // Determine if it's a leap year
    let result;
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                result = `${year} is a leap year.`;
            } else {
                result = `${year} is not a leap year.`;
            }
        } else {
            result = `${year} is a leap year.`;
        }
    } else {
        result = `${year} is not a leap year.`;
    }

    // Display the result
    document.getElementById('result').textContent = result;
}


function calculatePower() {
    // Get base and exponent from input fields
    const base = parseFloat(document.getElementById('baseInput').value);
    const exponent = parseInt(document.getElementById('exponentInput').value, 10);

    // Validate inputs
    if (isNaN(base) || isNaN(exponent)) {
        document.getElementById('result').textContent = 'Please enter valid numbers for both base and exponent.';
        return;
    }

    // Calculate power using the built-in Math.pow function
    const result = Math.pow(base, exponent);

    // Display the result
    document.getElementById('result').textContent = `${base} raised to the power of ${exponent} is ${result}.`;
}


function calculateTotal() {
    // Get the selected ticket type
    const ticketType = document.getElementById('ticketType').value;
    
    // Get the quantity of tickets
    const quantity = parseInt(document.getElementById('quantity').value, 10);
    
    // Define ticket prices
    const prices = {
        adult: 20,
        child: 10,
        senior: 15
    };
    
    // Validate inputs
    if (isNaN(quantity) || quantity <= 0) {
        document.getElementById('result').textContent = 'Please enter a valid quantity greater than 0.';
        return;
    }

    // Calculate total cost
    const price = prices[ticketType];
    const totalCost = price * quantity;

    // Display the result
    document.getElementById('result').textContent = `Total cost for ${quantity} ${ticketType} tickets is $${totalCost}.`;
}