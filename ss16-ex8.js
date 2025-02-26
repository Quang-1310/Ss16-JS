let number1 = prompt("Mời bạn nhập vào số thứ 1");

let number2 = prompt("Mời bạn nhập vào số thứ 2");

let number3 = prompt("Mời bạn nhập vào số thứ 3");

if(number1 > number2 && number1 > number3){
    alert(`Số ${number1} là số lớn nhất`);
}
else if(number2 > number3){
    alert(`Số ${number2} là số lớn nhất`);
}
else{
    alert(`Số ${number3} là số lớn nhất`);
}