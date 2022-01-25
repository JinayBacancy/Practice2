function isPrime(n) {
    let flag;
    if (n == 1) {
        return false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                flag = 0;
                break;
            } else {
                flag = 1;
                continue;
            }

        }
    }
    if (flag == 0) {
        return false;

    } else if (flag == 1) {
        return true;
    } else {
        return true;
    }

}
console.log(isPrime(657));