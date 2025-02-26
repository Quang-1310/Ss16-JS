let string = prompt("Nhập chuỗi: ");

string = string[0].toUpperCase() + string.slice(1);

for(let i=1; i<string.length; i++){
    string = string.slice(0,i) + string[i].toLowerCase() + string.slice(i+1);
}

alert(string);