const rows = document.querySelectorAll('tr');

for(var i=0;i<rows.length;i++){
  if((i%2)==0){
    rows[i].className='odd';
  }else{
    rows[i].className='even';
  }
}
