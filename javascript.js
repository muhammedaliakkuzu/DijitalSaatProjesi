function ekle(deger)
{
    var stringyap = deger.toString();
    var uzunluk   = stringyap.length;
    if(uzunluk === 1)
    {
        return "0" + stringyap;
    }
    else
    {
        return stringyap;
    }
}

function SaatGuncelle()
{
    var zaman        = new Date();
    var saatdegeri   = zaman.getHours();
    var dakikadegeri = zaman.getMinutes();
    var saniyedegeri = zaman.getSeconds();
    document.getElementById("Saat").innerHTML = ekle(saatdegeri) + ":" + ekle(dakikadegeri) + ":" + ekle(saniyedegeri);
}

setInterval(SaatGuncelle,1000);