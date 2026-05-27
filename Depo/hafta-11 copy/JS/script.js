/*function merhaba(){
    document.write("Merhaba!");
}

function konsolDöngü(){
    for(var i=0; i<=5; i++){
        console.log("Deneme" +(i+1))
    }
}
merhaba()


function KareAl(sayi){
    document.write(sayi+"*"+sayi+ "=" + sayi*sayi + "<br>") ;
}

KareAl();
*/
var sonuc;
function Topla(sayi1, sayi2){
    return sayi1 + sayi2;
}

sonuc= Topla(10,5);
document.write("---Sonuç:" + sonuc)