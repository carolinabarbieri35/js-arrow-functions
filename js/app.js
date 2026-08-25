console.log('hello js');


// data una lista di prezzi originali, applica uno sconto del 20% a ciascun prodotto

const lista = [30, 40, 7, 82, 56];

const prezziScontati = lista.map((elem) => {
    return elem - 1.20;

});


console.log(prezziScontati);


