function prime(a){
    if(a==1){
        console.log(a,"is not prime");
        
    }
    else if(a==2){
        console.log(a,"is prime");
        
    }
    else{
        var val=0
        for (let i = 2; i < a; i++) {
             if (a%i==0){
                val=1
             }     
        }
        if(val==0){
            console.log(a,"is prime");
            
        }
        else{
            console.log(a,"is not prime");
        }
    }
}
prime(18)