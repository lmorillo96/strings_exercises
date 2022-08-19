// métodos más utilizados con cadenas de caracteres

let firstName = "Leandro"
let lastName = " Morillo"

let student = firstName.concat(lastName);
let studentUpper = student.toUpperCase();
let studenLower = student.toLowerCase();
let countLetters = student.length;
let firstLetter = student[0];
let lastLetter = student[14];
let trimWord = "                    Leandro Morillo        ".trim();
let includeName = student.includes("Leandro");


console.log(student);
console.log(studentUpper);
console.log(studenLower);
console.log(countLetters);
console.log(firstLetter);
console.log(lastLetter);
console.log(trimWord.length);
console.log(includeName);


