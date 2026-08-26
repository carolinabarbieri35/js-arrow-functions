console.log('hello js');


// data una lista di prezzi originali, applica uno sconto del 20% a ciascun prodotto

const lista = [30, 40, 7, 82, 56];

const prezziScontati = lista.map((elem) => {
    return elem - 1.20;

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














