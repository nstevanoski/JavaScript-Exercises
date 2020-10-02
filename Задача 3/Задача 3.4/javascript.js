var objDate = new Date();
var hours = objDate.getHours();
if(hours>=06&&hours<=10){
    console.log('Добро утро.');
}
else if(hours>=10&&hours<=18){
    console.log('Добар ден.');
}
else{
    console.log('Добро вечер.');
}