let string = prompt("Nhập vào 1 chuỗi").trim();

// string.trim();

let count = 1;

if(string.length == 0){
    alert(`Chuỗi nhập vào rỗng`);
}

for(let i = 0; i < string.length; i++){
    if(string[i] == " " && string[i+1] > 'a' && string[i+1] < 'z' || string[i] == " " && string[i+1] > 'A' && string[i+1] < 'Z' || string[i] == " " && string[i+1] > '1' && string[i+1] < '9'){
        count++;
    }
}

alert(`Số lượng từ có trong chuỗi là: ${count}`);