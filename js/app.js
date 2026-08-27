console.log('hello js');


// data una lista di prezzi originali, applica uno sconto del 20% a ciascun prodotto

const lista = [30, 40, 7, 82, 56];

const prezziScontati = lista.map((elem) => {
    return (elem * 0.8).toFixed(2);

});


console.log(prezziScontati);


// data una lista di voti di esami, trova il primo esame non superato


const esami = [28, 15, 30, 26, 29];

const esameNonSuperato = esami.find((elem) => {

    if (elem <= 17) {
        return 'Esame non superato'

    }
});

console.log(esameNonSuperato);


// data una lista di consumi elettrici giornalieri in kWh, stampa ogni consumo. Usa console.warn per i consumi alti


const consumi = [5, 7, 12, 1500, 36, 152];

consumi.forEach((element) => {

    if (element > 100) {
        console.warn(`consumo alto: ${element}`);


    } else {
        console.log(element);

    }
})


// data una lista di nomi, trova solo quelli che hanno una lunghezza tra 3 e 5 caratteri

const nomi = ['Anna', 'Lucilla', 'Bernadette', 'Giulia', 'Marco', 'Lele'];

const nomiCorti = nomi.filter((element) => element.length > 2 && element.length < 6);

console.log(nomiCorti);


// data una lista di parole, verifica che nessuna abbia un carattere maiuscolo

const parole = ['ciao', 'Arrivederci', 'MaMMamiA', 'nuovo'];

const nessunaMaiuscola = parole.every((element) => element === element.toLowerCase());

console.log(nessunaMaiuscola);


// data una lista di città, verifica se c'è qualche città composta da più parole (es. 'New York')


const città = ['Roma', 'Abu Dhabi', 'New York', 'Venezia', 'Città del Messico'];

const cittàComposte = città.filter((element) => element.trim().includes(' '));
//  {

//     if (element.trim().includes(' ')) {

//         return element;

//     }
// });

console.log(cittàComposte);


// data una lista di calorie consumate, convertile in kJ

const calorie = [50, 36, 173, 25, 94];

const calorieConvertite = calorie.map((element) => (element * 4.184).toFixed(2));

console.log(calorieConvertite);


// data una lista di ore lavorate ogni giorno della settimana, stampa per ogni giorno il tempo relativo lavorato, in minuti

const oreLavorate = [8, 7.5, 6, 8, 4, 0, 0];

const giorni = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];

const oreInMinuti = oreLavorate.map((element, index) => ({
    Giorno: giorni[index],
    Minuti: element * 60
}));

console.table(oreInMinuti);


// data una lista di valutazioni (1-5 stelle), trova solo le recensioni con più di 4 stelle


const valutazioni = [1, 4, 5, 4.5, 3, 5, 2];

const recensioniAlte = valutazioni.filter((element) => element > 4);

console.log(recensioniAlte);



// data una lista di stati di prenotazione ("confermata", "annullata", "in attesa"), trova la prima prenotazione annullata

const statoPrenotazione = ['in attesa', 'in attesa', 'confermata', 'annullata', 'confermata'];

const prenotazione = statoPrenotazione.findIndex((element) => element === 'annullata');

console.log(prenotazione);



// data una lista di test (true/false), verifica se sono stati tutti superati


const test = ['true', 'false', 'false', 'true', 'true', 'true'];

const testSuperati = test.every((element) => element === 'true');

console.log(testSuperati);





























