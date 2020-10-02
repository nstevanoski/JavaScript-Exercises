var regex = /((00)?\+?[+389]{3})?[\/\-\s*\.]?(((\(0\))|0)?\s*7\d{1})[\/\-\s*\.\,]?([\d]{3})[\/\-\s*\.\,]?([\d]{3})/;
console.log(regex.test('072331564')); // true
console.log(regex.test('099875332')); // false
console.log(regex.test('+389 70225687')); //true
console.log(regex.test('+389 070225687')); //true
console.log(regex.test('+389-070225687')); //true
console.log(regex.test('+381 090225687')); //false