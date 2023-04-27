let boy = document.getElementsByClassName("boy-box").value;
let kilo = document.getElementsByClassName("kilo-box").value;

let btn = document.querySelector("#btn");



 if (sonuc <= 18.5) {
    alert("Vücut Kitle Endeksiniz İdeal Kilonun Altında!");
  } else if (sonuc >= 18.5 && sonuc <= 24.9) {
    alert("Vücut Kitle Endeksiniz İdeal Kiloda!");
  } else if (sonuc >= 25 && sonuc <= 29.9) {
    alert("Vücut Kitle Endeksiniz İdeal Kilonun Üstünde!");
  } else if (sonuc >= 30 && sonuc <= 39.9) {
    alert("Vücut Kitle Endeksiniz İdeal Kilonun Çok Üstünde!");
  } else if (sonuc >= 40) {
    alert("Vücut Kitle Endeksiniz İdeal Kilonun Çok Üstünde (Morbid Obez)");
  }
