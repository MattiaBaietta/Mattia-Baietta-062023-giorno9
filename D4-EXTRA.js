// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
let test1
test1=giveMeRandom(5)
let totale=0

function checkArray(n){
        for(let i=1;i<n.length;i++){
            if(n[i]<5){  
            
            console.log("Il numero : " + n[i] + " non è maggiore di 5")

            }else{

            console.log("Il numero : " + n[i] + " è maggiore di 5")
            }
            totale = totale + n[i]
        }
        return totale
}

prova=checkArray(test1)
console.log(prova)
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
const shoppingCart=[
    {
        price:10,
        name:"tshirt",
        id:2345,
        quantity:10
    },
    {
        price:20,
        name:"jeans",
        id:2335,
        quantity:100
    },
    {
        price:100,
        name:"shoes",
        id:1235,
        quantity:5
    },
    {
        price:1,
        name:"boxers",
        id:4545,
        quantity:3
    }
]
function shoppingCartTotal(n){
    let somma=0
    for(let i=0;i<n.length;i++){
        somma= somma+(n[i].price*n[i].quantity)
    }
    return somma

}
prova=shoppingCartTotal(shoppingCart)
console.log(prova)

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
const wishlist = {
    price:5,
    name:"vans",
    id:2515,
    quantity:10,
}
function addToShoppingCart(n){
    shoppingCart.push(n)
    let somma=0
    for(let i=0;i<shoppingCart.length;i++){
        
        somma= somma+shoppingCart[i].quantity
    }
    return somma

}
prova=addToShoppingCart(wishlist)
console.log(prova)
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
let maggiore={}
function maxShoppingCart(n){
    maggiore[0]=n[0]
    for(let i=0;i<n.length;i++){
        if(maggiore[0].price<=n[i].price)
        {
            maggiore[0]=n[i]
        }
    }
    return maggiore
}
prova=maxShoppingCart(shoppingCart)
console.log(prova)

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/
let lastarray=[]
function latestShoppingCart(n){
    lastarray[0]=n[n.length-1]
    return lastarray[0]
}
prova=latestShoppingCart(shoppingCart)
console.log(prova)
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

function loopUntil(n){
    let n1=0
    let n2
    while(n1<3){
        n2=Math.floor(Math.random()*10)
        console.log(n2)
        if(n2>n)
        {
            n1++
        }

    }
}

prova=loopUntil(6)


/**/
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

function average(n){
    let somma=0
    let numeri=0
    console.log(n.length)
    console.log(n[0])
    for(let i=0;i<n.length;i++){
        if(isNaN(n[i]))
        {
        }
        else{
            somma+=n[i]
            numeri++
        }
    }
    return somma/numeri


}
prova=average([1,2,3,"e",4,5,"x"])
console.log(prova)

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
function longest(n){
    let maggiore=""
    
    for(let i=0;i<n.length;i++){

        if(n[i].length>maggiore.length)
        {
            maggiore=n[i]
        }
    }
    return maggiore

}
prova=longest(["luca","andrea","siummmmmmm","numero1000000000"])
console.log(prova)

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
function emailContent(n){
    console.log(n.search("SCAM"))
    if((n.toUpperCase().search("SCAM")!=-1)||(n.toUpperCase().search("SPAM")!=-1)){
        return true
    }
    else{
        return false
    }
    
}
prova=emailContent("hdjasdhjsak")
console.log(prova)

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/
const datanuova = new Date(1989,10,21)
let datatot=0
function giornidata(n)
{
    const dataattuale = new Date()
    
    datatot= (dataattuale.getTime()-n.getTime())
    return ((((datatot/1000)/60)/60)/24)

}

prova=giornidata(datanuova)
console.log(prova)

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/
function matrixGenerator(x,y){
    let xy=[0]
    let i=0
    let ix=0
    let iy=0
    let lunghezza=x*y
    while(i<lunghezza){      
        if(ix<x){
            xy[i]=String(iy)+String(ix)
            ix++
            console.log(xy)
        }else if(ix=x){
            iy++
            ix=0
            xy[i]=String(iy)+String(ix)
            ix++
        }

        
        i++
    }
    return xy

}
prova=matrixGenerator(5,3)
console.log(prova)
/* SCRIVI QUI LA TUA RISPOSTA */
