var transformString=(input) =>{
    let output = '';

    // Check if the length of the input string is divisible by 3
    if (input.length % 3 === 0) {
        // Reverse the entire string
        output = input.split('').reverse().join('');
    }
// Check if the length of the input string is divisible by 5
    if (input.length % 5 === 0) {
       // Replace each character with its ASCII code
        output = input.split('').map(char => char.charCodeAt(0)).join(' ');
    }
// Check if the length of the input string is divisible by both 3 and 5
    if (input.length % 3 === 0 && input.length % 5 === 0) {
        // Reverse the entire string and replace each character with its ASCII code
        output = input.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    }

    // Return the transformed string or the original input string if no transformation is applied

    return output || input;
}

// here there is  Example usage:
console.log(transformString("Hamburger")); 
console.log(transformString("Pizza")); 
console.log(transformString("Chocolate Chip Cookie")); 
