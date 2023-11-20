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
const km_percorsi = prompt ('Quanti chilometri vuoi percorrere per questa tratta?')


// Chiedere all'utente quanti anni ha
const user_age = prompt ('Quanti anni hai?')



const km_price = (0.21 * km_percorsi)
console.log (km_price)