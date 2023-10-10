function convertTemperature() {
    // Get the user input and selected unit
    const temperature = parseFloat(document.getElementById("inputTemperature").value);
    const unit = document.getElementById("unitSelector").value;
    
    // Check if the input is a valid number
    if (isNaN(temperature)) {
        alert("Please enter a valid number.");
        return;
    }

    // Perform the temperature conversion
    let result;
    if (unit === "celsius") {
        // Convert Celsius to Fahrenheit
        result = (temperature * 9/5) + 32;
    } else {
        // Convert Fahrenheit to Celsius
        result = (temperature - 32) * 5/9;
    }

    // Display the result
    document.getElementById("result").textContent = `Result: ${result.toFixed(2)} ${unit === "celsius" ? "Fahrenheit" : "Celsius"}`;
}
