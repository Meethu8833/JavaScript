a=["aaa","bbb","ccc","ddd"]
b="bbb"
l=a.length

for (var i=0;i<l;i++){
    if (b==a[i]){
        delete a[i]
        val=1
    }
}



