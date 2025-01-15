function palindrome(s1,s2){
    a2=s2.split("").reverse().join("")
    console.log(s1,"     ",a2);

    if(s1==a2){
        console.log("Palindrome");
        
    }
    else{
        console.log("Not Palindrome");
        
    }
}
palindrome("asd","dsa")