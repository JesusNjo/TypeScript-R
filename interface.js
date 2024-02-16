"use strict";
let programadorInterface = {
    nombre: "Pedro Perez",
    tecnologias: ["JavaScript", "React"],
    isAvailable: true
};
let programadorInterfaceNew = {
    nombre: "Federico Lopez",
    tecnologias: ["Jquery", "Angular"],
    isAvailable: null
};
const enviarCurriculum = (programador) => {
    console.log(`Este curriculum es de ${programador.nombre}`);
};
enviarCurriculum(programadorInterface);
