var niza = new Array(7);
niza[0] = 11,
niza[1] = 13,
niza[2] = 1,
niza[3] = 22,
niza[4] = 15,
niza[5] = 3,
niza[6] = 4;
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(niza[0],"+",niza[1],"+",niza[2],"+",niza[3],"+",niza[4],"+",niza[5],"+",niza[6],"=",niza.reduce(reducer));