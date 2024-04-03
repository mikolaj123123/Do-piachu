function oblicz(){
    let pogrzeb=document.getElementById('pogrzeb').checked;
    let trumna=document.getElementById('trumna').checked;
    let kremacja=document.getElementById('kremacja').checked;
    let pochowek=document.getElementById('pochowek').checked;
    let suma=0;

    if(pogrzeb==true){
        suma=suma+2000;
    }
    if(trumna==true){
        suma=suma+690;
    }
    if(kremacja==true){
        suma=suma+4200;
    }
    if(pochowek==true){
        suma=suma+2137;
    }
    document.getElementById('wynik').innerHTML=suma+" zł";
}