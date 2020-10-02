function myFunction() {
  var boja = document.forms[0];
  var txt = "";
  for (var i = 0; i < boja.length; i++) {
    if (boja[i].checked) {
      txt = txt + boja[i].value + " ";
    }
  }
  document.getElementById("order").innerHTML = "Избраната боја е: " + txt;
}