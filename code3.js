function fizzbizz(n) {
    var c3 = 0;
    var c5 = 0;
    for (let i = 1; i <= n; i++) {
        c3++;
        c5++;
        var d = "";
        if (c3 == 3) {
            d += "fizz";
            c3 = 0;
        }
        if (c5 == 5) {
            d += "buzz";
            c5 = 0;
        }
        if (d == "") {
            console.log(i);
        } else {
            console.log(d);
        }
    }
}