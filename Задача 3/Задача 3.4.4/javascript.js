var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var i = 61;
var s = "";
while(m<i){
  i--;
  s += i + " ";
}
console.log(s);
