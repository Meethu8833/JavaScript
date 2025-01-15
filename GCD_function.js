function gcd(a,b){
    for (let i = 1; i <= a; i++) {
        if (a%i==0 && b%i==0){
            g=i
        }
        
    }
    console.log("GCD is ",g);
}
gcd(2,3)