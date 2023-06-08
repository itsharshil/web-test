// Find even numbers between 0 50 using recursion

function findEvenNumbers(start, end) {
    if (start > end) {
        return;
    }
    if (start % 2 === 0) {
        console.log(start);
    }
    findEvenNumbers(start + 1, end);
}

console.log(findEvenNumbers(0, 50));