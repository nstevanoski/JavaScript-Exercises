
function data(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10) {
    dd='0'+dd
  } 
  
  if(mm<10) {
    mm='0'+mm
  } 
  today = dd+'.'+mm+'.'+yyyy;
  document.getElementById("data").innerHTML = today;

}

data();
function casovnik(){
    var cas = new Date();

    var h = cas.getHours();
    var m = cas.getMinutes();
    var s = cas.getSeconds();

    h=("0" + h).slice(-2);
    m=("0" + m).slice(-2);
    s=("0" + s).slice(-2);

    cas = h+" : "+m+" : "+s;
    document.getElementById('vreme').innerHTML= cas;
    var t=setTimeout(casovnik, 500);
}
casovnik();