////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SNACK 1
const arrayObj = [{nome: "BMW", peso: "3"}, {nome: "Audi", peso: "2"}, {nome: "Alfa romeo", peso: "5"}, {nome: "Range Rover", peso: "2"}, {nome: "Tesla", peso: "1.5"}];

// CICLO CHE CONFRONTA I PESI DELLE BICI E NE STABILISCE LA PIù LEGGERA
let lessBike = arrayObj[0].peso;
for (let i = 0; i < arrayObj.length; i++) {
    let currItem = arrayObj[i].peso;
    if (currItem < lessBike) {
        lessBike = currItem;
    }
}

console.log(lessBike);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// SNACK 2
const arraySquad = [{nome: "Barcellona", puntiFatti: 0, falliSubiti: 0}, {nome: "Real madrid", puntiFatti: 0, falliSubiti: 0}, {nome: "Inter", puntiFatti: 0, falliSubiti: 0}, {nome: "Manchester united", puntiFatti: 0, falliSubiti: 0}, {nome: "Manchester city", puntiFatti: 0, falliSubiti: 0}];

// GENERATORE NUMERICO
function generator (min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

// CICLO FOR PER AGGIUNGERE IL NUMERO DEI FALLI SUBITI E DEI PUNTI FATTI AL NOSTRO ARRAY
for (let i = 0; i < arraySquad.length; i++) {    
    arraySquad[i].puntiFatti += (generator(10, 20));
    arraySquad[i].falliSubiti += (generator(10, 20));
}
console.log(arraySquad);

// CICLO CHE CREA UN NUOVO ARRAY E INSERISCE AL SUO INTERNO SOLAMENTE IL NOME DELLA SQUADRA E I FALLI SUBITI
const arraySquadNew = [];
for (let i = 0; i < arraySquad.length; i++) {
    const curTeam = arraySquad[i];
    const team = {
        nome: curTeam.nome,
        falliSubiti: curTeam.falliSubiti
    };
    arraySquadNew.push(team);
}
console.log(arraySquadNew); 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// SNACK 3
const arrayNum = [31, 44, 21, 45, 53, 124, 21, 51, 87, 59, 93, 85];

function inclusiva (arrayNum, min, max) {
    const newArrayNum = [];
    for (let i = 0; i < arrayNum.length; i++) {
        if (i >= min && i <= max) {
            newArrayNum.push(arrayNum[i]);
        }
    }
    return newArrayNum;    
}

console.log(inclusiva(arrayNum, 2, 8));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


