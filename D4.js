/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
let prova;/*
function area(l1,l2){
    return (l1+l2)*2
}
prova = area(2,3)
console.log("L'area del rettangolo e': " + prova )


*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*//*
function crazySum(num1,num2){

    if(num1!=num2){
        return num1+num2
    }
    else{
        return num1*3
    }
}
prova = crazySum(5,10)
console.log("la somma è: " + prova)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*//*
let differenza
function crazyDiff(num1,num2=19){
        differenza = num1-num2
        console.log("differenza assoluta è: " + Math.abs(differenza))

        if(num1>num2)
        {
            return Math.abs((num1-num2)*3)
            
            
        }
        
}
prova = crazyDiff(18)
if (prova>0){
    console.log("differenza assoluta triplicata: "+ prova)
}
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*//*
function boundary(n){
    
    if((n<=100 && n>20) || n==400){
        return true
    }else{
        false
    }
}
prova = boundary(50)
console.log(prova)*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*//*
function epify(parola){
    let varepicode = "EPICODE"
    const cerca = parola.search("EPICODE")
    console.log(cerca)

    if(parola.search("EPICODE")!=0){
    const stringaepicode=varepicode.concat(parola) 
    return stringaepicode
    }else{
        return parola
    }
}
prova = epify("EPICODE")
console.log(prova)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/*
function check3and7(n){

    if(n%3==0 || n%7==0){
        return true
    }
    else{
        return false
    }
}
prova=check3and7(9)
console.log(prova)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

let stringainv=""
function reverseString(n){
    
    for(let i=n.length;i>=0;i--)
    {
        
        stringainv+=n.charAt(i)
        
        
    }
    return stringainv
}
prova=reverseString("luca")
console.log(prova)


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
let prova2=""
let i=0
function upperFirst(n){
    
   
        
        prova2=n.charAt(i).toUpperCase() + n.slice(i+1)
        prova2+=n.charAt(n.indexOf(" ")+1).toUpperCase() + n.slice(n.indexOf(" ")+1)
        console.log(prova2)
        console.log(n.indexOf(" "))
        

}
prova=upperFirst("andrea è un grande")
console.log(prova)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
