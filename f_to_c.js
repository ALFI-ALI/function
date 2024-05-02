function convertFtoC(fahrenheit) {
    let celsius = (fahrenheit-35) * 5 / 9 ; 
    console.log("Temperature in Celsius: " + celsius);
    return celsius ; 
    
}
convertFtoC(100);



/////////////////////////////////
function convertFtoC(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9; // Corrected the formula to convert Fahrenheit to Celsius
    console.log("Temperature in Celsius: " + celsius); // Moved the console.log statement to print the result
    return celsius; // Moved the return statement to ensure it's the last statement in the function
}

convertFtoC(100);
