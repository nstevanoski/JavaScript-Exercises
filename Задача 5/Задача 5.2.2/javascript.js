var element = document.getElementsByClassName('required');

for(var i=0;i<element.length;i++){
    var newSpan = document.createElement('span')
    newSpan.className='required-span'
    newSpan.innerHTML ='*'
    document.body.insertBefore(newSpan,element[i].nextSibling);
}

var input = document.getElementsByTagName('input');
for (var i=0;i<input.length;i++){
    var newLabel = document.createElement('label');
    newLabel.textContent=input[i].name;
    newLabel.setAttribute("for",input[i].id);
    document.body.insertBefore(newLabel,input[i]);
}