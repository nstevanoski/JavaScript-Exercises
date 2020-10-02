//Godina
var d = new Date();
//Mesec
var n = d.getMonth();
//Mesec ime
var mesec = new Array();
mesec[0] = "Januari";
mesec[1] = "Februari";
mesec[2] = "Mart";
mesec[3] = "April";
mesec[4] = "Maj";
mesec[5] = "Juni";
mesec[6] = "Juli";
mesec[7] = "Avgust";
mesec[8] = "Septemvri";
mesec[9] = "Oktomvri";
mesec[10] = "Noemvri";
mesec[11] = "Dekemvri";
var n1 = mesec[d.getMonth()];
//Den vo mesecot
var d1 = d.getDate();
//Den vo nedelata
var denvonedelata = new Array(7);
denvonedelata[0] = "Недела";
denvonedelata[1] = "Понеделник";
denvonedelata[2] = "Вторник";
denvonedelata[3] = "Среда";
denvonedelata[4] = "Четврток";
denvonedelata[5] = "Петок";
denvonedelata[6] = "Сабота";
var n2 = denvonedelata[d.getDay()];
//Momentalen cas
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  

//
console.log("Моментална година:", d.getFullYear());
console.log("Моментален месец:", n); //Почнува од 0
console.log("Моментален месец(име):", n1);
console.log("Ден:", d1);
console.log("Ден во неделата:", n2);

var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
// Додава 0 пред нив доколку минутата е 1 и сл
m = checkTime(m);
s = checkTime(s);
console.log("Моментален час:", h);
console.log("Моментална минута:", m);
console.log("Моментална секунда:", s);