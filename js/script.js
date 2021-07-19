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

/* 
ES 2
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e 
stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), 
di aggiungere un nuovo oggetto studente 
inserendo nell’ordine: nome, cognome e età. 
*/

//Array oggetti studenti
const students = [
    {name: 'John',
    surname: 'Smith'},
    {name: 'John',
    surname: 'Doe'},
    {name: 'Jane',
    surname: 'Doe'},
    {name: 'Joe',
    surname: 'Bloggs'}
]

//Utente inserisce nuovo studente
const newStudent = {
    name: '',
    surname: '',
    age: ''
};

const userName = prompt('Inserisci nome');
newStudent.name = userName;
const userSurname = prompt('Inserisci cognome');
newStudent.surname = userSurname;
const userAge = prompt('Inserisci età');
newStudent.age = userAge;

students.push(newStudent);

var printStudents = document.getElementById('student-list');
let listItemProperties = '';

//Ciclare su tutti gli studenti
for (let i = 0; i < students.length; i++) {
    for (let key in students[i]) {
        listItemProperties += key + ': ' + students[i][key] + '<br>';
    }
}

printStudents.innerHTML = listItemProperties;