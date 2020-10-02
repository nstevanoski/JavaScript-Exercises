var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = "";
var i=60;
while(m<i){
  m++;
  s += m + " ";
}
console.log(s);

