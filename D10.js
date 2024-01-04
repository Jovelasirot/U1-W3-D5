/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const giveMeRandom = () => {
  const random = Math.floor(Math.random() * 21 + 0);
  return random;
};

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "Jovel",
  surname: "Asirot",
  age: 21,
};

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

const mySkills = ["javascript", "python"];

me.skills = mySkills;

/* ESERCIZIO F
Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("Css");

/* ESERCIZIO G
Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  return randomNum;
};

console.log("The number is:", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (a, b) => {
  if (a > b) {
    return console.log(`${a} is greater than ${b}`);
  } else {
    return console.log(`${b} is greater than ${a}`);
  }
};

whoIsBigger(27, 22);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const strinOne = "If the snow falls";

const splitMe = () => {
  const stringPerWord = strinOne.split(" ");
  console.log(stringPerWord);
};

splitMe(strinOne);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (inputStringTwo, check) => {
  if (check) {
    return inputStringTwo.slice(1);
  } else {
    return inputStringTwo.slice(0, -1);
  }
};

const test = "test";
const resultDelete = deleteOne(test, false);

console.log(resultDelete);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const stringThree = "I want 9 figure income";

const onlyLetters = () => {
  const stringThreeL = stringThree.replace(/\d/g, "");
  /* lo slash indica l'inizio e la fine di un espressione regolare, "\d" rappresenta le cifre numeriche e "\g" applica l'espressione all'intera stringa senza fermarsi alla prima corrispondenza */
  console.log(stringThreeL);
};

onlyLetters();

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (email) => {
  email.toLowerCase();
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailReg.test(email);
};
let inputEmail = "test@email.com";
const isEmail = isThisAnEmail(inputEmail);

if (isEmail === true) {
  console.log(`La stringa "${inputEmail}" è un indirizzo email.`);
} else {
  console.log(`La stringa "${inputEmail}" NON è un indirizzo email.`);
}

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = () => {
  const todayIs = new Date();
  const currentDate = todayIs.getDate();
  console.log(currentDate);
};

whatDayIsIt();

/* ESERCIZIO 8
  Scrivi una funzione chiamata "randomNumero" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  randomNumero(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const diceTwo = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const randomNumero = (numberOfRolls) => {
  const result = {
    sum: 0,
    values: [],
  };

  for (let i = 0; i < numberOfRolls; i++) {
    const diceValue = diceTwo();
    result.sum += diceValue;
    result.values.push(diceValue);
  }

  return result;
};

const randomResult = randomNumero(2);

console.log("Risultato del lancio dei dadi:", randomResult);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = (inputDate) => {
  const startingDate = new Date(inputDate);
  const currentDateTwo = new Date();
  const timeDifference = Math.floor(
    (currentDateTwo - startingDate) / (1000 * 60 * 60 * 24)
  );

  return timeDifference;
};

let inputDate = "2002-12-01";
const passedDays = howManyDays(inputDate);

console.log(`Dal ${inputDate} ad oggi son passati ${passedDays} giorni`);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = (birthday) => {
  const today = new Date();
  const birthdayDate = new Date(birthday);

  return (
    today.getDate() === birthdayDate.getDate() &&
    today.getMonth() === birthdayDate.getMonth()
  );
};

const myBirthday = "2023-12-06";
const isBirthdayToday = isTodayMyBirthday(myBirthday);

if (isBirthdayToday === true) {
  console.log("Oggi è il mio compleanno!");
} else {
  console.log("Oggi non è il mio compleanno.");
}

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = (movies, propToDelete) => {
  for (let i = 0; i < movies.length; i++) {
    const target = movies[i];

    if (target.hasOwnProperty(propToDelete)) {
      //hasOwnProperty determina se un oggetto ha un proprieta con il nome specificato tra le parentesi
      delete target[propToDelete];
    }
  }
  return movies;
};

const newMovies = deleteProp(movies, "Poster");
console.log("This is the new movies array", newMovies);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const findNewestMovie = (movies) => {
  const sortedMovies = movies.sort(
    (a, b) => parseInt(b.Year) - parseInt(a.Year)
  );

  return sortedMovies[0];
};

const newestMovie = findNewestMovie(movies);

if (newestMovie) {
  console.log(
    "The newest movie is:",
    newestMovie.Title,
    "(",
    newestMovie.Year,
    ")"
  );
} else {
  console.log("No movies found.");
}

findNewestMovie(movies);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = (movies) => {
  let n = 0;
  movies.forEach((element) => {
    n++;
  });
  return console.log(n);
};

countMovies(movies);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = () => {
  const yearsArray = movies.map((movie) => movie.Year);
  return yearsArray;
};

console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = (movies) => {
  const lastMillenniumMovies = movies.filter((movie) => {
    const movieYear = parseInt(movie.Year);
    return movieYear >= 2000;
  });

  return lastMillenniumMovies;
};

console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = (movies) => {
  const sum = movies.reduce((accumulator, movie) => {
    return accumulator + parseInt(movie.Year);
  }, 0);

  return sum;
};

console.log("La somma di tutti gli anni è:", sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (movies, searchString) => {
  const matchingMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(searchString.toLowerCase())
  );

  return matchingMovies;
};

console.log("Risultati della ricerca:", searchByTitle(movies, "Avenger"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
let match = [];
let unMatch = [];
const searchAndDivide = (movies, searchString) => {
  const matchingMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(searchString.toLowerCase())
  );

  match.push(matchingMovies);
  unMatch.push(...movies.filter((movie) => !matchingMovies.includes(movie)));
};

searchAndDivide(movies, "Avenger");
console.log("match", match);
console.log("unMatch", unMatch);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = (movies, deleteThisNum) => {
  const updatedMovies = [
    ...movies.slice(0, deleteThisNum),
    ...movies.slice(deleteThisNum + 1),
  ];

  return console.log("array senza il numbero 3", updatedMovies);
};

const deleteThisNum = 3;
removeIndex(movies, deleteThisNum);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

document.getElementById("container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

document.querySelectorAll("td");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printTextInTdElements = () => {
  const tdElements = document.querySelectorAll("td");

  tdElements.forEach((tdElement, index) => {
    console.log(`Testo in <td> ${index + 1}:`, tdElement.textContent.trim());
  });
};

printTextInTdElements();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const addBgToLinks = () => {
  const allLinks = document.querySelectorAll("a");
  allLinks.forEach((link) => {
    link.style.backgroundColor = "red";
  });
};

addBgToLinks();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const aggiungiElemento = () => {
  let myList = document.getElementById("myList");

  let nuovoElemento = document.createElement("li");

  let testoElemento = document.createTextNode("Batman");
  nuovoElemento.appendChild(testoElemento);

  myList.appendChild(nuovoElemento);
};

aggiungiElemento();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const deleteUl = () => {
  let myList = document.getElementById("myList");
  myList.innerHTML = "";
};

deleteUl();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime = (numero) => {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
};

let numberToVerify = 61;
console.log(`is ${numberToVerify} a prime number?`, isItPrime(numberToVerify));
