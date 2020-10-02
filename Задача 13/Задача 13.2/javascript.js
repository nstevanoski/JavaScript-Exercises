var Korisnik = Object();

Korisnik = {
    Ime:"Nikola", 
    Prezime:"Stevanoski", 
    Adresa:"Cando Kuzmanov 60", 
    TelBroj:"070205044"
};

var kluc = Object.keys(Korisnik);

for (var i = 0, len = kluc.length; i < len; i++) {
    var li = document.createElement("LI");
    document.getElementById("myList").appendChild(li);
    li.innerHTML=Korisnik[kluc[i]];
}