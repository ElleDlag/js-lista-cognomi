var surname = ["sacchi", "speranza","neri", "bianchi","miele","ferrari",  "conte", "rossi","ferro", "sasso", ];
console.log(surname);
var mySurname = prompt("Your surname");
console.log(mySurname);
surname.push(mySurname);
console.log(surname);
surname.sort();
console.log(surname);
var mySurnamePos = surname.indexOf(mySurname);
console.log(mySurnamePos);

var output = document.querySelector('.list-name');

for (var i = 0; i<surname.length; i++ ){
    output.textContent += surname[i] + ", ";
};

document.querySelector('.position-name').textContent = mySurnamePos;




