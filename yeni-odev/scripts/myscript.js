let resimler = [
    'img/ari-usun-elestirisi.jpg',
    'img/tinin-gorungubilimi.jpeg'
];
let sliderIndex = 0;

function sliderBaslat() {
    let sliderResim = document.getElementById("slider-resim");
    if (sliderResim) {
        setInterval(function() {
            sliderIndex++;
            if (sliderIndex == resimler.length) {
                sliderIndex = 0;
            }
            sliderResim.src = resimler[sliderIndex];
        }, 3000); 
    }
}

function sepetHesapla() {
    let toplam = 0;
    let secenekler = document.getElementsByName("kitap-sec");
    let toplamGosterge = document.getElementById("sepet-toplam");

    if (toplamGosterge) {
        for (let i = 0; i < secenekler.length; i++) {
            if (secenekler[i].checked == true) {
                toplam += Number(secenekler[i].value);
            }
        }
        toplamGosterge.innerHTML = "Seçili Ürünler Toplamı: " + toplam + " TL";
    }
    return toplam;
}

function topluSatinAl() {
    let toplam = sepetHesapla();
    if (toplam > 0) {
        alert("Toplam " + toplam + " TL tutarındaki kitaplar için ödeme sayfasına yönlendiriliyorsunuz.");
    } else {
        alert("Lütfen en az bir kitap seçiniz!");
    }
}


function formSonucYaz() {
    let alan = document.getElementById("sonuc-kutu");
    if (alan) {
        let params = new URLSearchParams(window.location.search);
        let isim = params.get("isim");
        let eposta = params.get("eposta");
        let konu = params.get("konu");
        let memnunluk = params.get("memnunluk");

        alan.innerHTML = "<h3>Form Sonuçları</h3>" +
            "<p>İsim: " + (isim ? isim : "-") + "</p>" +
            "<p>E-posta: " + (eposta ? eposta : "-") + "</p>" +
            "<p>Konu: " + (konu ? konu : "-") + "</p>" +
            "<p>Memnunluk: " + (memnunluk ? memnunluk : "0") + "</p>";
    }
}


window.onload = function() {
    sliderBaslat();
    formSonucYaz();
};
