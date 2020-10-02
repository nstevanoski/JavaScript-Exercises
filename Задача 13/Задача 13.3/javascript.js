          
            function a(){
                var x,y,vx,vy;
                var borderHeight, borderWidth;
                var div;
                var k = 0;
                var br=document.getElementById('canvas');
                
                
                function Topka(a,b,c){
                    div = document.createElement('div');
                    br.appendChild(div);
                    div.className = 'div';
                    div.style.width = a + 'px';
                    div.style.height = a + 'px';
                    div.style.position = 'absolute';
                    div.style.top = b + 'px';
                    div.style.left = c + 'px';
                    div.style.backgroundColor = 'black';
                    div.style.borderRadius = '50%';
                
                }
            
                
                function func(){
                    borderWidth=br.clientWidth;
                    borderHeight=br.clientHeight;
                    x=Math.random()*300 + 100;
                    y=Math.random()*300 + 100;
                    vx=1;
                    vy=1;
                Topka(30,y,x);
                Topka(30,x,y);
                myFunction();
                }
                function myFunction(){
                   var div = document.getElementsByClassName('div');
                    
                    x+=vx;
                    y+=vy;
                    if(x>borderWidth-25||x<0) vx=-1*vx;
                    if(y>borderHeight-25||y<0) vy=-1*vy;
                    
                    k++;
                    
                    for(var i = 0; i < 2; i++){
                        if(i == 0){
                    div[0].style.top = x + 'px';
                    div[0].style.left = y + 'px';
                        }
                        else{
                    div[i].style.top = y + 'px';
                    div[i].style.left = x + 'px';
                        vy = 0;
                        }
                    }
                    if(k == 100){
                        return false;
                    }
                
                    
                    setTimeout(myFunction, 20);
                    
                
                }
                func();
                
            }
                