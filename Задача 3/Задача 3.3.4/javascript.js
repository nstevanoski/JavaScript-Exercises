var tekst = prompt('Vnesi recenica');
	tekst = tekst.split(" ");
    var zbor = prompt('Vnesi zbor');
	var x = 0;
	function zborSeSodrzi(tekst,zbor){
		for(var i = 0; i < tekst.length; i++){
        if(tekst[i] == zbor){
            x = true;
        }
    }
if(x == true){
alert('Zborot '+zbor+' se sodrzi vo recenicata');
}
else{
alert('Zborot '+zbor+' ne se sodrzi vo recenicata');
}
}
    zborSeSodrzi(tekst,zbor);