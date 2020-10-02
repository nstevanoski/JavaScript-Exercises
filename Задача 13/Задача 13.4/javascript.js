var button = document.getElementsByTagName('button');
var niza = [];
var podatoci;
function func(){ 
    var Grad = document.getElementById('grad').value;
for(var i = 0; i < 4; i++){
    var x = 0;
niza[i] = new XMLHttpRequest();
niza[i].open('GET',''+ (i+1) +''+'.json');
niza[i].send();
niza[i].onreadystatechange = function(){
if(niza[x].status == 200 && niza[x].readyState == 4){
niza[i] = JSON.parse(niza[x].responseText);
x++;
if(Grad){
if(Grad == niza[i][0].Grad){
console.log('Grad: ' + niza[i][0].Grad);
console.log('Ziteli: ' + niza[i][0].Ziteli);
console.log('Tel-broj: ' + niza[i][0].TelBroj);
console.log('Informacii: ' + niza[i][0].Informacii);
}
}
}
}   
}
}