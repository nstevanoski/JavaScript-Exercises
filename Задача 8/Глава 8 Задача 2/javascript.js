function proverka() {
  var checkBox = document.getElementById("blabla");
  var text = document.getElementById("proverka");
  if (checkBox.checked == true){
    text.innerHTML='checkbox-от е одбран';
  } else {
     text.innerHTML='checkbox-от не е одбран';
  }
}