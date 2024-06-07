var transformString=(input) =>{
    let output = '';

    if (input.length % 3 === 0) {
        output = input.split('').reverse().join('');
    }

    if (input.length % 5 === 0) {
        output = input.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    if (input.length % 3 === 0 && input.length % 5 === 0) {
        output = input.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    }

    return output || input;
}

// here there is  Example usage:
console.log(transformString("Hamburger")); 
console.log(transformString("Pizza")); 
console.log(transformString("Chocolate Chip Cookie")); 
