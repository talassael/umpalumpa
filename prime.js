function isprime(userinput) {
    if (userinput == 1) {
        return false;
    }
    if(userinput == 2)
    {
        return true;
    }
    var nsqrt = Math.sqrt(userinput);
    for(i = 2; i <= nsqrt; i++){
        var mod = userinput % i;
        if(mod == 0){
            return false;
        }
    }
    return true;
}

function getNthPrime(nth) {
    var counter = 0;
    var i = 2;
    while (counter < nth) {
       if (isprime(i)) {
            counter++;
       }
       i++;
    }
    return --i;
}