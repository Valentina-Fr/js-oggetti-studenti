/* 
ES 1
Creare un oggetto che descriva uno studente, 
con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in 
tutte le proprietà dell'oggetto.
*/

//Oggetto studente
const student = {
    name: 'John',
    surname: 'Smith',
    age: '40'
}

var printStudent = document.getElementById('student');
let studentProperties = '';

//Stampo con ciclo for in
for (let key in student) {
    studentProperties += key + ': ' + student[key] + '<br>';
}

printStudent.innerHTML = studentProperties;