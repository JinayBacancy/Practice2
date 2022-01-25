function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0) {
            return ("Fizz");
        } else if (i % 5 == 0) {
            return ("Buzz");
        } else if (i % 15 == 0) {
            return ("FizzBuzz");
        } else {
            return (i);
        }
    }
}

fizzbuzz(20);