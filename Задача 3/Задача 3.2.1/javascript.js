function SoberiKakoBroj() {
    var x = Number(document.getElementById('broj1').value);
    var y = Number(document.getElementById('broj2').value);

    document.getElementById('rezultat').innerHTML = x+y;
    if(isNaN(x)&&isNaN(y)){
        alert("Внесете два броеви");
    return false;
    }
}
document.getElementById('soberi').addEventListener('click', SoberiKakoBroj);
