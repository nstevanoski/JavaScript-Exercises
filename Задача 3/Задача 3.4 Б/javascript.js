var vreme = new Date();
var cas = vreme.getHours();
cas > 12 ? console.log(cas-12 + 'pm') : console.log(cas + 'am');
