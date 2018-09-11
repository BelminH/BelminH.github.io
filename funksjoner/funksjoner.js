function setup() {
    document.getElementById("nr1").innerHTML = "sum3+4= " + sum(3, 4);
    document.getElementById("nr2").innerHTML = "sum(3+7+8)/3= " + snitt(3, 7, 8);
    document.getElementById("nr3").innerHTML = "sum3*7= " + produkt(3, 7);
    document.getElementById("nr4").innerHTML = "c2f: " + c2f(37.8);
    document.getElementById("nr5").innerHTML = "f2c: " + f2c(100);
}

function sum(a, b) {
    return a + b;
}

function snitt(a, b, c) {
    return (a + b + c) / 3;
}

function produkt(a, b) {
    return a * b;
}

function c2f(celcius) {
    return celcius * 9 / 5 + 32
}

function f2c(farenheit) {
    return (farenheit - 32) * 5 / 9;
}

function primtall() {
    if (n == 1) return false;
    if (n == 2) return true;
    if (n & 2 === 0) return false;
    for (let i = 3; i < Math.sqrt(n + 1); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}
