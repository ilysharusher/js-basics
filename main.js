// Task 1
function countLetters(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow) {
    const letterToCount = prompt('Enter the letter you want to count:');
    const countInFirstRow = countLetters(firstRow, letterToCount);
    const countInSecondRow = countLetters(secondRow, letterToCount);

    if (countInFirstRow > countInSecondRow) {
        return firstRow;
    } else if (countInSecondRow > countInFirstRow) {
        return secondRow;
    } else {
        return "Both strings have the same number of the specified letter.";
    }
}

console.log(getRow(firstRow, secondRow));

// Task 2
function formattedPhone(phone) {
    if (phone.match(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/)) {
        return phone;
    } else if (phone.match(/^(8|9)\d{10}$/)) {
        const cleanedNumber = phone.replace(/\D/g, '');
        const formattedNumber = `+7 (${cleanedNumber.slice(1, 4)}) ${cleanedNumber.slice(4, 7)}-${cleanedNumber.slice(7, 9)}-${cleanedNumber.slice(9, 11)}`;
        return formattedNumber;
    } else {
        return "Invalid phone number format.";
    }
}

console.log(formattedPhone('+71234567890'));
console.log(formattedPhone('89211234567'));
console.log(formattedPhone('9211234567'));
console.log(formattedPhone('1234567890')); // Invalid format
