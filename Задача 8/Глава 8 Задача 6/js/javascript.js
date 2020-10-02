function myFunction(){
    document.getElementById("kopce").addEventListener("click", function(){
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var element = document.getElementById('spanel');
        var proverka=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)/;

        if( username.length==0||password.length==0){
            element.innerHTML='Ве молиме внесете корисничко име или лозинка';
            element.style.color='red';
            return false;
        }else if (proverka.exec(password)==null || password.length<6) {
            element.innerHTML='Лозинката мора да содржи барем една голема буква, една мала буква, една бројка, еден специјален карактер и да е долга барем шест карактери';
            element.style.color='red';
        }else{
            alert('Username: '+username+'\nPassword: '+password);
            element.innerHTML='Лозинката е безбедна';
            element.style.color='green';
        }

    });
}

window.onload = function() {
    myFunction();

}