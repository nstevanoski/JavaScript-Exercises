var s=document.getElementsByTagName("img");
s.alt="Сликата не може да се прикаже";

var findspans = document.getElementsByTagName('span');
var span = document.getElementsByClassName('error');
for(var i = 0; i < span.length; i++){
span[i].style.color = "red";
}
