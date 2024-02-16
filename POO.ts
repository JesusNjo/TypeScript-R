class Pelicula{
    nombre?: string;
    protagonistas?: string[];
    actores?: string[]

    proyectarEnCine(){
        console.log(`${this.protagonistas} está siendo proyectada..`);
    }
    constructor(nombre:string,protagonistas:string[],actores:string[]){
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
}

const peliculaX = new Pelicula("Titanic",["Jack", "Rose"],["Leonardo DiCaprio", "Elena Jones"]);
const peliculaXX = new Pelicula("Barbie",["Barbie", "Ken"],["Margot Robbie", "Ryan Goslin"]);
peliculaX.proyectarEnCine();
peliculaXX.proyectarEnCine();