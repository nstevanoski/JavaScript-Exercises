window.onload = function() {
  
    var cars = [
      { model:"a6", proizvoditel:"audi", tip:"elegant", gorivo:"dizel", sostojba:"poloven", mokjnost:"90" },
      { model:"a4", proizvoditel:"audi", tip:"elegant", gorivo:"benzin", sostojba:"poloven", mokjnost:"80" },
      { model:"207", proizvoditel:"peugeot", tip:"kabriolet", gorivo:"plin", sostojba:"poloven", mokjnost:"105" },
      { model:"520", proizvoditel:"bmw", tip:"elegant", gorivo:"dizel", sostojba:"nov", mokjnost:"77" },
    ]
    
    document.getElementById("prebaruvanje").addEventListener("click",filterCars);
    var ispisuvanje = document.getElementById('koli');

    function filterCars(){
    var Model = document.getElementById('model').value;
    var Proizvoditel = document.getElementById('proizvoditel').value;
    var Tip = document.getElementById('tip').value;  
    var Gorivo = document.querySelector('input[name=gorivo]:checked');
	  var Sostojba = document.querySelector('input[name=sostojba]:checked');
    var Mokjnost = document.getElementById('mokjnost').value;
    var Filtrirani = cars;
      
      if(Model){
        var selectedCarsByModel = [];
        for(var j=0;j<Filtrirani.length;j++){
          if(Filtrirani[j].model === Model){
            selectedCarsByModel.push(Filtrirani[j]);
          }
        }
        Filtrirani = selectedCarsByModel;
      }
      
      if(Proizvoditel){
        var selectedCarsByProizvoditel = [];
        for(var i=0;i<Filtrirani.length;i++){
          if(Filtrirani[i].proizvoditel === Proizvoditel){
            selectedCarsByProizvoditel.push(Filtrirani[i]);
          }
        }
        Filtrirani = selectedCarsByProizvoditel;
      }
          
      if(Tip){
        var selectedCarsByTip = [];
        for(var j=0;j<Filtrirani.length;j++){
          if(Filtrirani[j].tip === Tip){
            selectedCarsByTip.push(Filtrirani[j]);
          }
        }
        Filtrirani = selectedCarsByTip;
      }

      if(Mokjnost){
        var selectedCarsByMokjnost = [];
        for(var j=0;j<Filtrirani.length;j++){
          if(Filtrirani[j].mokjnost === Mokjnost){
            selectedCarsByMokjnost.push(Filtrirani[j]);
          }
        }
        Filtrirani = selectedCarsByMokjnost;
      }
		
      if(Gorivo && Gorivo.value){
		Gorivo = Gorivo.value;
        var selectedCarsByGorivo = [];
        for(var j=0;j<Filtrirani.length;j++){
          if(Filtrirani[j].gorivo === Gorivo){
            selectedCarsByGorivo.push(Filtrirani[j]);
          }
        }
        Filtrirani = selectedCarsByGorivo;
      }
		
			
      if(Sostojba && Sostojba.value){
		Sostojba = Sostojba.value;
        var selectedCarsBySostojba = [];
        for(var j=0;j<Filtrirani.length;j++){
          if(Filtrirani[j].sostojba === Sostojba){
            selectedCarsBySostojba.push(Filtrirani[j]);
          }
        }
        Filtrirani = selectedCarsBySostojba;
      }

      ispisuvanje.innerHTML=Filtrirani;
      console.log(Filtrirani);
    }
  }