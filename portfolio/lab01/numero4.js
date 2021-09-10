function fibonacci(){
    var anterior=1;
    var anterior1;
    var atual=0
    for(i=1;i<=100;i++){
        anterior1=atual
        atual=atual+anterior
        anterior=anterior1
        console.log(atual)
    }
}

fibonacci()