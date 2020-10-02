var tekst = { "a":"а", "b":"б", "c":"ц", "d":"д", "e":"е", "f":"ф", "g":"г", "h":"х", "j":"ј", "k":"к", "l":"л", "z":"з", "dj":"џ", "v":"в", "n":"н", "m":"м", "p":"п", "o":"о", "i":"и", "u":"у", "dz":"ѕ", "t":"т", "р":"r" };

function convert(tekst){
var latinString = 'a s d f g h j k l m n b v c x z r e t y u i o p ';
var latintoCyrillic = { "a":"а", "b":"б", "c":"ц", "d":"д", "e":"е", "f":"ф", "g":"г", "h":"х", "j":"ј", "k":"к", "l":"л", "z":"з", "dj":"џ", "v":"в", "n":"н", "m":"м", "p":"п", "o":"о", "i":"и", "u":"у", "dz":"ѕ", "t":"т", "р":"r" };
var serbianString = latinString.split('').map(function(character){
    return tekst[character];
}).join('');
}
console.log( tekst ); 