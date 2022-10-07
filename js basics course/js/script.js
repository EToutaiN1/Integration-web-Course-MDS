console.log('bonjour');

const print = document.getElementById("print-submission");

let values = [7,8,9,10,'Valet','Dame','Roi','As'];
let symbols = ['♥', '♣', '♦', '♠'];

let jeu_de_cartes =[];

function printCard() {

    for (idx in values) {
    const number = values[idx];
        for (i in symbols){
            const color = symbols[i];
            const card = number + ` de ` + color;
            jeu_de_cartes.push(card);

            print.innerHTML += `<p>`+ card +`</p>`;
            console.log(`${number}`,` de `,`${color}`);
        }
    }

    // for (let value of values) {
    //     for (let symbol of symbols){
    //         const card = value + ` de ` + symbol;
    //         print.innerHTML += `<p>`+ card +`</p>`;

    //         console.log(`${value}`,` de `,`${symbol}`);
    //     }
    // }
}
