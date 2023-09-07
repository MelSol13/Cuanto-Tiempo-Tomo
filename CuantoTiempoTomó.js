Number.prototype.isPrime = function() {
    if (this <= 1) {
        return false;
    }
    
    if (this <= 3) {
        return true;
    }
    
    if (this % 2 === 0 || this % 3 === 0) {
        return false;
    }
    
    for (let i = 5; i * i <= this; i += 6) {
        if (this % i === 0 || this % (i + 2) === 0) {
            return false;
        }
    }
    
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 1,000,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

