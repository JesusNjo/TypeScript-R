type Programador = {
    nombre:string,
    tecnologias: string[],
    isAvailable?: boolean |null; // Se agrega el ? PARA INDICAR QUE EL DATO ES OPCIONAL! LUEGO LE AGREGAMOS | NULL PARA INDICAR QUE TAMBIÉN PUEDE LLEGAR DATOS NULOS
}
//Le ponemos el tipo de dato en OBJETO
let programadorx: Programador = {
    nombre: "Francisco Naranjo",
    tecnologias: ["Java", "Spring boot", "React"],
    isAvailable : true
}

let programadorxNew: Programador = {
    nombre: "Juan Rodriguez",
    tecnologias : ["Cobol", "C++"],
    isAvailable : false
}

console.log(programadorxNew);