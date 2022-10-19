/* Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi. 
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, 
uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

//visualizzare in pagina 5 numeri casuali
// - recuperare elementi dalla DOM
const numbersEl = document.querySelector('.numbers');
const timerEl = document.querySelector('.timer');

// - Math random per genearre i 5 numeri casuali e ciclo for per ripetere il numero casuale 5 volte


//genero una lista con 10 numeri casuali
//la mia lista di numeri casuali è inizialmente vuota
let numbersList = [];

//ciclo for per ripetere 5 volte la generazione dei numeri casuali da 0 a 10
function numberGenerator(numbersList) {
    for (let i = 0; i < 5; i++) {

        //la funzione mathrandom mi genera un numero tra 0 e 10
        const randomNumber = Math.floor(Math.random() * 10) + 1;

        //con push aggiungo un numero generato alla lista, ad ogni iterazione
        numbersList.push(randomNumber);

    }

}

//inserisco il generatore di array numeri casuali in una funzone
const GeneratedRandomNumbersList = numberGenerator(numbersList);

console.log(numbersList);

numbersEl.innerText = 'Osserva i seguenti numeri e carca di ricordarli ' + numbersList;


//parte un timer di 30 secondi. 
//Dopo 30 secondi i numeri scompaiono
let seconds = 30;

//il timer deve dimininuire i secondi a ogni secondo che passa
//set interval ripete ogni tot secondi
setInterval(() => {

}, interval);





