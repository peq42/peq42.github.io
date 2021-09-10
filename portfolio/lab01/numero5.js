function prime(){
loop1:
    for(var i=2;i<=1000;i++){
        loop2:
        for(o=2;o<i;o++){
            if(i%o==0) continue loop1;
        }
        console.log(i)
    }


}



prime()