var starList = ["sacchi", "speranza","neri", "bianchi","miele","ferrari",  "conte", "rossi","ferro", "sasso", ];
console.log(starList);
var updateList = starList
var mySurname = prompt("Your surname");
console.log(updateList);
surname.push(mySurname);
console.log(surname);
surname.sort();
console.log(surname);
var mySurnamePos = surname.indexOf(mySurname);
console.log(mySurnamePos);

var output = document.querySelector('.list-name');
// with for
/* for (var i = 0; i<surname.length; i++ ){
    output.textContent += surname[i] + ", ";
}; */

// with do while
var i = 0;
while (i<surname.length){
    output.textContent += surname[i] + ", ";
    i++;
};

document.querySelector('.position-name').textContent = mySurnamePos;




