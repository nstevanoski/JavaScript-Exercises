var x, y, vx, vy;
var VisinaRamka, SirinaRamka;
var ramka = document.getElementById('ramka');
function init()
{
  SirinaRamka = ramka.clientWidth;
  VisinaRamka = ramka.clientHeight;
    x = Math.random()*SirinaRamka;
    y = Math.random()*VisinaRamka;
    vx = Math.random()*10 -5;
    vy = Math.random()*10 -5;
    mainloop();
}
function mainloop()
{
    x += vx;
    y += vy;
    if (x>SirinaRamka-20||x<0) vx = -1*vx;
    if (y>VisinaRamka-20||y<0) vy = -1*vy;
    document.getElementById("topce").style.left = x+"px";
    document.getElementById("topce").style.top = y+"px";
    setTimeout(mainloop, 30);
}