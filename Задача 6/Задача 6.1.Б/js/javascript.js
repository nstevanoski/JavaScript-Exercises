function myFunction(){
      var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    
    if( username.length==0||password.length==0){
        alert("Внесете корисничко име или лозинка");
    return false;
    }else{
        alert('Username: '+username+'\nPassword: '+password);
    }
}

window.onload = function() {
    document.getElementById("kopce").addEventListener("click", myFunction);
}