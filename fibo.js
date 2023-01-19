function calculate_fibo1() {
    var user_input = document.getElementById("userinput").value;
    var result = fiborec(user_input);
    document.getElementById("fibo_result").innerHTML = result;
}

function fiborec(aaa) {
    if (aaa <= 2) {
        return 1;
    } else {
        return fiborec(aaa - 1) + fiborec(aaa - 2);
    }
}