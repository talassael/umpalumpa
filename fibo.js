function calculate_fibo() {
    var user_input = document.getElementById("userinput").value;
    var result = fiboloop(user_input);
    document.getElementById("fibo_result").innerHTML = result;
}

function fiborec(aaa) {
    if (aaa <= 2) {
        return 1;
    } else {
        return fiborec(aaa - 1) + fiborec(aaa - 2);
    }
}

function fiboloop(aaa) {
    if (aaa == 1) {
        return 0;
    } else if (aaa == 2) {
        return 1;
    }
    var a = 0;
    var b = 1;
    for (let i = 3; i <= aaa; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}