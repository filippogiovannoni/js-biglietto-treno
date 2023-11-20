/* Tools 
- prompt
- const / let
- if / else
- console.log
- document.getElementById
- .innerHTML

Tariffario
- 0.21€ / km 
- < 18 anni: -20%
- > 65 anni: -40%
*/


// Chiedere all'utente quanti km vuole percorrere
const km_percorsi = parseInt(prompt ('Quanti chilometri vuoi percorrere per questa tratta?'));

// Chiedere all'utente quanti anni ha
const user_age = parseInt(prompt ('Quanti anni hai?'));

// Tariffario per chilometri percorsi
const km_price = (0.21 * km_percorsi);

// Se il passeggero ha un'età minore di 18 anni, verrà applicato uno sconto del 20%
if (user_age < 18) {
    
    const under_18 = (km_price - (km_price / 100 * 20));
   
    // Stampo in pagina il prezzo della tratta per il passeggero minorenne
    document.getElementById('price').innerHTML = `Il prezzo per la seguente tratta è di: ${under_18.toFixed(2)}`+ "€";

// Altrimenti se il passeggero ha un'età superiore ai 65 anni, verrà applicato uno sconto del 40%
} else if (user_age > 65) { 
    
    const over_65 = (km_price - (km_price / 100 * 40));
  
    // Stampo in pagina il prezzo della tratta per il passeggero over 65
    document.getElementById('price').innerHTML = `Il prezzo per la seguente tratta è di: ${over_65.toFixed(2)}`+ "€";

// Altrimenti il passeggero non potrà usufruire di nessuna scontistica.
} else {

    // Stampo in pagina il prezzo della tratta per il passeggero.
    document.getElementById('price').innerHTML = `Il prezzo per la seguente tratta è di: ${km_price.toFixed(2)}`+ "€";

}
