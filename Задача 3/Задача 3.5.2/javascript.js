
     var person1 = Object();
    var person2 = Object();
    var person3 = Object();
    var nizaKorisnici = [
      person1 = {
        ime:'Nikola',
        prezime:'Stevanoski',
        adresa:'Cando Kuzmanov 60',
        maticen:'2205000410002'},
      person2 = {
        ime:'Filip',
        prezime:'Vitkov',
        adresa:'Belasica 13',
        maticen:'1811999488001'}
    ]
    function proverka(a,b){
        if(a.ime == b.ime || a.prezime == b.prezime){
            alert('Imaat isto ime ili prezime');
        }
        else{
            alert('Nemaat isto ime ili prezime');
        }
    }
    proverka(person1,person2);
