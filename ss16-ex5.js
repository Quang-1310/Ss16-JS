let number1 = prompt("Nhập số thứ 1");
let number2 = prompt("Nhập số thứ 2");

if(number1 % number2 == 0){
    alert(number1 + " là bội số của " + number2);
}
else{
    alert(number1 + " không là bội số của " + number2);
}