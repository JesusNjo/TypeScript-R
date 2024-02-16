interface ProgramadorInterface{
    nombre:string,
    tecnologias: string[],
    isAvailable?: boolean | null
}

let programadorInterface: ProgramadorInterface= {
    nombre: "Pedro Perez",
    tecnologias : ["JavaScript", "React"],
    isAvailable: true
}

let programadorInterfaceNew: ProgramadorInterface= {
    nombre: "Federico Lopez",
    tecnologias : ["Jquery", "Angular"],
    isAvailable: null
}

const enviarCurriculum=(programador:ProgramadorInterface) =>{
    console.log(`Este curriculum es de ${programador.nombre}`);
}
enviarCurriculum(programadorInterface);