function isprime(userinput) {
    if (userinput == 1) {
        return false;
    }
    if(userinput == 2)
    {
        return true;
    }
    var nsqrt = Math.sqrt(userinput);
    for(i = 2; i < nsqrt; i++){
        var mod = userinput % i;
        if(mod == 0){
            return false;
        }
    }
    return true;
}