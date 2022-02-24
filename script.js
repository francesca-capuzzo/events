
const button3 = document.getElementById('button3');
button3.onclick = buttonClick;                                     //--> restituisce un EVENTO "click" che da un po' di informazioni dull'elemento.


function buttonClick(element) {
    console.log(element);
}



button3.onclick = () => buttonClick2("Bottone 3");                 //--> restituisce una stringa

function buttonClick2(string) {
    console.log(string);
}



const button4 = document.getElementById('button4');
button4.addEventListener('click', buttonClick2);                    //--> restituisce un EVENTO "click" che da un po' di informazioni dull'elemento.
button4.addEventListener('click', () => buttonClick2('bottone 4')); //--> restituisce una stringa



let counter = 0;

function countClick(event) {
    counter++;
    console.log(counter);

    if (counter === 7) {
        button4.removeEventListener('click', countClick);          //AGGIUNTA DOPO --> come è stato aggiunto l'evento, posso anche toglierlo.. in questo caso dopo 7 click.
    }
    event.stopPropagation();                                       //--> in questo modo evito che l'evento venga loggato più volte con la funzione di JS stopPropagation(); --> vedi riga 47 perchè button 4 è stato aggiunto al paragrafo
}


function countClick2(event) {
    counter++;
    console.log(counter);

    if (counter === 7) {
        button4.removeEventListener('click', countClick);          
    }
    event.stopPropagation();                                       
    event.preventDefault();
    window.location = 'https://google.com'
}

button3.onclick = countClick;                                      //--> restituisce il conto di quante volte viene cliccato ma la funzione assegnata prima viene sovrascritta!!! (linea 3)
button4.addEventListener('click', countClick);                     //--> restituisce l'evento, la stringa e il counter ad ogni click perchè è stata scritta come addEventListener()


const parPippo = document.getElementById('par-pippo');
parPippo.addEventListener('click', countClick);                    //cliccando sul paragrafo ottengo lo stesso count dei bottoni perchè l'evento 'click' può essere assegnato a qualunque elemento html

//AGGIUNGENDO IL BOTTONE 4 AL PARAGRAFO, (avendo entrambi la funzione countClick), IL LOG DI COUNTER VERRA' GENERATO DUE VOLTE AD OGNI CLICK

const link = document.getElementById('link');
link.addEventListener('click', countClick2);


const link2 = document.getElementById('link2');
link2.addEventListener('click', displayPar);

function displayPar(event) {
    let par = document.getElementById('hidden-par');
    par.style.display = 'block';
    event.preventDefault();
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//GLI EVENTI POSSO ESSERE DIVERSI:
//'click' --> click del mouse
//'mousedown'
//'keydown' --> indica il tasto che viene cliccato su tutta la tastiera



document.addEventListener('keydown', changeBackground);

function changeBackground(event) {
    //console.log(event);

    let number = parseInt(event.key);            //con tutte le lettere della tastiera ritorna NaN mentre con i numeri ritorna il numbero cliccato
    //console.log(number);
    if (event.ctrlKey && !isNaN(number)) {
        event.preventDefault();                 //--> questo serve solo perchè ctrl + numero sono shortcut ma a noi serve solo printare il numero 
        //console.log(number);
        document.body.style.backgroundColor = '#' + number + number + number;
    }
}



function onMouseEnter() {
    console.log("sono entrato");
}

function onMouseLeave() {
    console.log("sono uscito");
}

function onMouseOver() {
    console.log("sono sopra");
}

function onMouseMove() {
    console.log("mi sto muovendo");
}

function onKeyDown(event) {
    console.log("tasto premuto" + event.key); 
}

let selectedKey = "";
function onKeyDown2(event) {
    if (event.key !== selectedKey) {
        console.log("tasto premuto" + event.key);
        selectedKey = event.key;
    }
   
}



const div = document.getElementById('mouse-div-2'); //faccio la stessa cosa dell'HTML per il div1 ma lo faccio nel file js per il div 2 
div.addEventListener('mouseenter', onMouseEnter);
div.addEventListener('mouseleave', onMouseLeave);

div.addEventListener('mouseover', onMouseOver); //fa la stessa cosa del mouse enter ma lo ri-runna più volte se resto sull'oggetto

div.addEventListener('mousemove', onMouseMove); //fa la stessa cosa del mouse enter ma lo ri-runna mille volte se mi muovo sull'oggetto

document.addEventListener('keydown', onKeyDown) //printa il tasto che viene premuto (grazie a event.key) e se lo tengo premuto continua a loggare (con solo la funzione onKeyDown)
document.addEventListener('keydown', onKeyDown2); //printa il tasto che viene premuto (grazie a event.key) e se lo tengo premuto NON continua a loggare (con la funzione onKeyDown2) perchè metto la flag "selectedKey"


////////////////////////////////////////////////////////////////////////////////////////////////////////

//EVENT TRIGGERS:
//setTimeout
//setInterval

setTimeout(() => {
    console.log("pippo");
}, 10000);                  //logga pippo nella console dopo 10 secondi che viene refreshata --> i secondi sono scritti sempre in millisecondi (3 zeri in più) --> e POI SI INTERROMPE


setInterval(() => {
    console.log("pluto");  
}, 1000);                   //logga pluto nella console dopo 1 secondo che viene refreshata --> CONTINUA A FARLO OGNI SECONDO 



let intervalCounter = 0;

const interval = setInterval(() => {
    console.log(intervalCounter);
    intervalCounter++;
}, 1000);                  //logga il counter nella console ogni 1 secondo e lo aumenta di 1 ogni secondo --> CONTINUA A FARLO


let intervalCounter2 = 0;

const interval2 = setInterval(() => {
    console.log(intervalCounter2);
    if (intervalCounter2 === 10) {
        clearInterval(interval2)
    }
    intervalCounter++;
}, 1000);                 //logga il counter nella console ogni (1) secondo e lo aumenta di 1 ogni secondo --> CONTINUA A FARLO finche il counter non arriva a 10



let searchTimeOut;

function realTimeSearch(event) {
    if (searchTimeOut) {
        clearTimeout(searchTimeOut)
    }
    searchTimeOut = setTimeout(() => {
        console.log("sto cercando");
    }, 1000);             //si utilizza nelle ricerche quando l'utente smette di scrivere per più di 1 secondo --> con il clearTimeOut se l'utente inizia a scrivere il searchTimeOut viene azzerato ogni volta.
}

document.addEventListener('keydown', realTimeSearch);