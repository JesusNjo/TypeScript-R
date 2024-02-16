"use strict";
//tsc script.ts --- Crea un JS a partir del archivo TS
console.log('Archivo Typescript');
//tsc script.ts -w --- Los cambios que se hagan el el TS se van al JS
console.log("cambio");
function suma(a, b) {
    return a + b;
}
console.log(suma(4, 5));
const programadores = [
    { name: "Francisco", lastname: "Naranjo", rama: "Backend", edad: 30, isDeveloper: true },
    { name: "Juan", lastname: "Perez", rama: "FrontEnd", edad: 28, isDeveloper: true },
    { name: "Pedro", lastname: "Sanchez", rama: "Fullstack", edad: 36, isDeveloper: true },
    { name: "Alejandra", lastname: "Rodriguez", rama: "PMO", edad: 42, isDeveloper: false },
];
programadores.forEach(x => console.log(x.name, x.edad));
let estudiasteJavascript = true;
console.log(estudiasteJavascript ? "Puedes seguir viendo el curso" : "Retirate, no puedes estar");
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let jugoMessi = true;
let motivo = 'Porque no jugò Messi';
const jugar = (equipoA, equipoB, juegaMessi) => {
    if (juegaMessi) {
        equipoA += messi;
        motivo = `Porque Messi hizo ${messi} Gol/s`;
    }
    ;
    if (equipoA == equipoB)
        return `Empate ${motivo}`;
    return equipoA > equipoB ? `Gano Inter Miami ${motivo}` : `Gano Fc Dalas ${motivo}`;
};
console.log(jugar(interMiami, fcDallas, jugoMessi));
