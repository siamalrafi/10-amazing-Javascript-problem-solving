// (1) Find Factorial of a number using for loop:

/* const inputNumber = 5;  //give the input number
let factorialNumber = 1;
for (let i = 1; i <= inputNumber; i++) {
    factorialNumber *= i;
}
console.log(factorialNumber); */


// Find Factorial of a number using a while loop:

/* let i = 1;
const inputNumber = 5;
let sum = 1;
while (i <= inputNumber) {
    sum *= i;
    i++;
}
console.log(sum); */


// (3) Calculate Factorial in a Recursive function:

/* function Factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * Factorial((n - 1))
    }
}
console.log(Factorial(5)); */


// (5) Find Fibonacci Element in a Recursive Way:

/* function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(10)); */


// (6) Check whether a number is a Prime Number or not:

/* function isPrime(n) {
    for (let i = 1; i < n; i++) {
        if (n % 2 === 0) {
            return 'Not prime'
        } else {
            return 'prime'
        }
    }
}
console.log(isPrime(5)); */


// (7) Print the prime number between 0 to 100

/* for (let counter = 0; counter <= 100; counter++) {
    let notPrime = false;
    for (let i = 2; i <= counter; i++) {
        if (counter % i === 0 && i !== counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
        console.log(counter);
    }
} */


// (8) Find the largest element of an array:

/* let array = [1, 2, 3, 4, 5];
console.log(Math.max(...array)); */


// (9) Sum of all numbers in an array:

/* let array = [1, 2, 3, 4, 5];

const total = array.reduce(function(a,b){
    return a + b;
})
console.log(total); */


// (10) Reverse a string by using funciton:

/* const sentance = 'repoleved bew a eb lliw I';
function reverse(string) {
    return sentance.split('').reverse().join('')
}
console.log(reverse(sentance)); */
