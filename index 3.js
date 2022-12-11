function numFactorial(n) {
    if (n<0) {
        return "ERROR!"
    }
    if (n==0 ) {
        return 1
    }
    else {
        let factorial=1
        while (n>1) {
            factorial= factorial*n
            n=n-1
            
        }
        return factorial
    }
}
console.log(numFactorial(10))