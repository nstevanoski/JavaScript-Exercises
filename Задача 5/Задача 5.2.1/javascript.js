var element = document.getElementsByClassName('required');

for(var i=0;i<element.length;i++){
    var newSpan = document.createElement('span')
    newSpan.className='required-span'
    newSpan.innerHTML ='*'
    document.body.insertBefore(newSpan,element[i].nextSibling);
}

