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
let pcGenList = [];
let userList = [];
//ciclo for per ripetere 5 volte la generazione dei numeri casuali da 0 a 10
function numberGenerator(pcGenList) {
    for (let i = 0; i < 5; i++) {

        //la funzione mathrandom mi genera un numero tra 0 e 10
        const randomNumber = Math.floor(Math.random() * 10) + 1;

        //con push aggiungo un numero generato alla lista, ad ogni iterazione
        pcGenList.push(randomNumber);

    }
    return pcGenList
}
const GeneratedRandomPcList = numberGenerator(pcGenList);
console.log('lista del pc', GeneratedRandomPcList);
//inserisco il generatore di array numeri casuali in una funzone

numbersEl.innerText = 'Osserva i seguenti numeri e carca di ricordarli ' + pcGenList;

//parte un timer di 30 secondi. 
//Dopo 30 secondi i numeri scompaiono
let seconds = 30;

//il timer deve dimininuire i secondi a ogni secondo che passa
//set interval ripete ogni 1000 millisecondi (1 secondo) il decrementare dei 30 secondi
const intervalId = setInterval(function () {
    timerEl.innerText = seconds;
    seconds--;
    //se il countdown è pari a -1 (così vsualizzo anche l'1) ferma il ciclo setinterval e fai scomparire i numeri
    if (seconds == 0) {

        timerEl.style.display = 'none';
        numbersEl.style.display = 'none';
        clearInterval(intervalId);

    }
}, 1000);


/* Dopo che sono stati inseriti i 5 numeri, il software dice 
quanti e quali dei numeri da indovinare sono stati individuati.
 */
const containerEl = document.querySelector('.container');
let score = 0;
setTimeout(answers, 30000);
function answers() {

    for (let i = 0; i < 5; i++) {
        const userNumber = Number(prompt('Inserisci un numero alla volta di quelli visualizzati'));
        userList.push(userNumber);
        console.log('qui numero utente', userList[i]);


        let arrayScore = [];
        if (GeneratedRandomPcList.includes(userList[i])) {
            for (let i = 0; i < userList.length; i++) {
                arrayScore.push(1);
                console.log('lista punti da sommare', arrayScore);

            }
            score += arrayScore[i];
            console.log(userList[i], 'è incluso, hai ottenuto 1 punto');
            containerEl.insertAdjacentHTML('beforeend', `<h3>${userList[i]} è incluso, hai ottenuto 1 punto</h3>`);
        }
    }

    console.log('hai totalizzato ', score, 'punti');
    containerEl.insertAdjacentHTML('beforeend', `<h2>Hai totalizzato ${score} punti</h2>`);
}
//console.log(userList);






