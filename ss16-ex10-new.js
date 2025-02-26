let number1 = parseInt(prompt("Nhập vào số thứ nhất"));
let number2 = parseInt(prompt("Nhập vào số thứ hai"));

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

alert("Số ngẫu nhiên: " + getRndInteger(number1, number2));
