function arr(a,b){
    s1=a.split("")
    s2=b.split("")
    a1=s1.sort()
    a2=s2.sort()
    b1=a1.toString()
    b2=a2.toString()
    if(b1==b2){
        console.log("Anagram");
        
    }
    else{
        console.log("Not anagram");
        
    }
}

arr("asd","asd")