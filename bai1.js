function isPrimeNumber(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function primeNumber() {
    let n = document.getElementById("n").value;
    let result = "";
    for (let i = 1; i <= n; i++) {
        if (isPrimeNumber(i)) {
            result += i + " ";
        }
    }
    console.log(result);
    document.getElementById("footer").innerHTML = result;
}

