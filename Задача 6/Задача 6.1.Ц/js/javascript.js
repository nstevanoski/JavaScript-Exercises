function myFunction(){
    document.getElementById("kopce").addEventListener("click", function(){
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var proverka=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)/;


        if( username.length==0||password.length==0){
            alert("Внесете корисничко име или лозинка");
            return false;
        }else if (proverka.exec(password)==null) {
            alert("Лозинката мора да вклучува барем една мала, голема буква, специјален и нумерички карактер!")
        }else{
            alert('Username: '+username+'\nPassword: '+password);
        }
    });
}

window.onload = function() {
    myFunction();
}