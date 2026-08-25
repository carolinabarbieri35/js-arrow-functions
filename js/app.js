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






