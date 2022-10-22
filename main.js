var a = prompt('birinchi soni kiriting')
var b = prompt('ikkinchi soni kiriting')
var c = prompt('uchuinchi soni kiriting')
a = Number(a)
b = Number(b)
c = Number(c)
if (a > b && c && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
    alert(`${a} katta  ${b} ${c} dan`);
}else if (c < a && b && !isNaN(c) && !isNaN(a) && !isNaN(b)) {
    alert(`${c}  kichik ${a} ${b} dan`);
}else if(b < c && a && !isNaN(b) && !isNaN(c) && !isNaN(a)) 
    alert(`${b} kichik ${c} ${a} dan`);

