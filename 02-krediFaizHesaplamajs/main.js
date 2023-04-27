function krediHesapla() {
  let cekilecekTutar, vadesayisi;
  let aylikTaksit, odenecekToplamTutar;

  cekilecekTutar = Number(document.getElementById("txtKrediTutari").value);

  let liste= document.getElementById("listeVade");
  vadesayisi=liste.options[liste.selectedIndex].value;

    if(vadesayisi==12){
        odenecekToplamTutar=cekilecekTutar*1.1;
    }
    else if(vadesayisi==24){
        odenecekToplamTutar=cekilecekTutar*1.2;
    }
    else if(vadesayisi==36){
        odenecekToplamTutar=cekilecekTutar*1.3;
    }
    else if(vadesayisi==48){
        odenecekToplamTutar=cekilecekTutar*1.4;
    }


  /* odenecekToplamTutar=cekilecekTutar*1.1; */
  aylikTaksit=odenecekToplamTutar/vadesayisi;

  document.getElementById("sonuc").innerHTML=
"Geri ödeme toplamı : " + parseInt(odenecekToplamTutar)+"<br>" + "Aylık taksit tutarınız : " + parseInt(aylikTaksit);
}
