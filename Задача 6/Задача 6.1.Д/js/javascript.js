function myFunction(){
    document.getElementById("kopce").addEventListener("click", function(){
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var element = document.getElementById('spanel');
        var proverka=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)/;

        if( username.length==0||password.length==0){
            alert("Внесете корисничко име или лозинка");
            return false;
        }else if (proverka.exec(password)==null) {
            alert("Лозинката мора да вклучува барем една мала, голема буква, специјален и нумерички карактер!")
        }else{
            alert('Username: '+username+'\nPassword: '+password);
        }
        //Proverka na lozinka
        if(password.length<6) 
        { 
        element.innerHTML='Лозинката мора да е подолга од 5 карактери';
        element.style.color='yellow';
        }else if(proverka.exec(password)==null || password.length<6){
            element.innerHTML='Лозинката мора да содржи голема, мала буква, специјален и нумерички карактер!';
            element.style.color='red';
        }
        else
        { 
            element.innerHTML='Лозинката е безбедна';
            element.style.color='green';
        }
    });
}

window.onload = function() {
    myFunction();

}