
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

