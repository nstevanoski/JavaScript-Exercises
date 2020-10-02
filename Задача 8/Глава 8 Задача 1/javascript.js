var textbox = document.getElementById('textbox');

function proverka(){
  if(textbox.value.length==0){
    alert("Внесете текст");
  }else{
    alert("Внесениот текст е: "+textbox.value);
  }
}